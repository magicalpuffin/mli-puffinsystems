---
id: 20250308
slug: visualizing-simpy-with-textual
title: Visualizing simpy with textual
description: Visualizing textual
createdDate: 2025-03-08
---
*Example running simulation*

I recently started looking into discrete event simulation and found that the barrier to entry was surprisingly low. Using [simpy](https://simpy.readthedocs.io/en/latest/contents.html) and python, you have a framework capable of modeling just about everything and full access to the entire python ecosystem.

Although `simpy` is very useful for creating and running discrete event simulations, it doesn't handle logging metrics or visualizing the results. When creating more complex models, it becomes really difficult to understand what is actually going on. Is a process being skipped? Does the system transfer to the right state? Are resources correctly being allocated?

Many of these problems can be solved by creating animations or visualizations of the simulation. More advances animations using 3d models are 

It is possible to create basic animations using textual. It is also possible to create controls for pausing and to parameterize the model.

Reasons to use `textual`:
- Using a terminal user interface keeps things simple. Visualizations don't need to be complex.
- Everything is in python. `simpy` can be called directly and type hints are shared.
- The app can be bundled to an executable using `pyinstaller`. Anyone can run the model.  

This is a demo which shows that this is possible. These concepts could be applicable for visualizing or animating other simulations in `textual`. 

**Links:**
- https://github.com/magicalpuffin/demo-simpy-textual

## Simulation Control

To run the simulation in `textual`, an async task is created in the background. This iterates through the model, updating the progress bar and sending an message at each time interval. 

```python
# snippet of initializing and running simulation
class SimulationControl(VerticalGroup):
    sim_task: asyncio.Task | None
    current_sim_time: float
    simulation_control_params: SimulationControlParams
    machine_shop_params: MachineShopParams

	# ...

    def init_simulation(self):
        self.env = simpy.Environment()
        self.sim = MachineShop(self.env, params=self.machine_shop_params)

        self.current_sim_time = self.simulation_control_params.start_sim_time
        self.paused = False

        self.query_one(ProgressBar).update(
            total=self.simulation_control_params.end_sim_time, progress=0
        )
        self.update_progress_label()
        self.post_message(self.SimulationIteration(self.sim))

    async def run_simulation(self, start, end):
        for i in range(start, end, self.simulation_control_params.step_sim_time):
            await asyncio.sleep(self.simulation_control_params.step_delay_time)
            self.current_sim_time = i + self.simulation_control_params.step_sim_time
            self.env.run(until=self.current_sim_time)

            self.query_one(ProgressBar).update(progress=self.current_sim_time)
            self.update_progress_label()
            self.post_message(self.SimulationIteration(self.sim))
    # ...
```
## Modifying the Machine Shop simpy example

The discrete event simulation model used was based on the [simpy machine shop example](https://simpy.readthedocs.io/en/latest/examples/machine_shop.html). Modifications were made to parameterize and log metrics as the model ran. 

The easiest method to log metrics was to just create a process which constantly records the state at a fixed time step. This could miss events between time steps. however, creating a system which only logs on event requires more work when creating and updating the visualizations. 

```python
class MachineShop:
    def __init__(self, env: simpy.Environment, params: MachineShopParams) -> None:
        self.env = env
        self.repairman = simpy.PreemptiveResource(env, capacity=params.num_repairman)
        self.store = MonitorStore(env)
        self.machines = [
            Machine(
                env,
                f"Machine_{i + 1}",
                self.repairman,
                self.store,
                params.machine_params,
            )
            for i in range(params.num_machines)
        ]

        self.metrics_log: list[MachineShopMetrics] = []
        self.machine_metrics_log: list[list[MachineMetrics]] = [
            [] for i in range(params.num_machines)
        ]

        self.env.process(part_arrival(env, self.store, params.mean_time_to_arrive))
        self.env.process(other_jobs(env, self.repairman, 30))
        self.env.process(self.monitor_metrics(1))

    def monitor_metrics(self, freq: float):
        while True:
            for i, machine in enumerate(self.machines):
			# ...
            self.metrics_log.append(
                {
                    "time": self.env.now,
                    "queue_items": len(self.store.items),
                    "total_parts_made": total_parts_made,
                    "total_broken_duration": total_broken_duration,
                    "total_idle_duration": total_idle_duration,
                    "num_machine_broken": num_machine_broken,
                    "num_machine_active": num_machine_active,
                }
            )
            yield self.env.timeout(freq)
```

## Creating Figures with plotext

Figures were created using [plotext](https://github.com/piccolomo/plotext) and [textual-plotext](https://github.com/Textualize/textual-plotext/)

Using the machine logs, the figure is cleared and redrawn each simulation iteration. Data is converted to `polars` for easier filtering

```python
class SimulationFigures(VerticalScroll):
    class LinePlot(PlotextPlot):
        def __init__(self, title: str, xlabel: str, ylabel: str):
            self.title = title
            self.xlabel = xlabel
            self.ylabel = ylabel
            super().__init__()

        def on_mount(self):
            self.plt.title(self.title)
            self.plt.xlabel(self.xlabel)
            self.plt.ylabel(self.ylabel)

        def refresh_plot(self, *args: Sequence[Any]):
            self.plt.clear_data()
            self.plt.plot(*args)
            self.plt.xticks(
                [args[0][i] for i in np.linspace(0, len(args[0]) - 1, 5, dtype=int)],
                [
                    f"{args[0][i]:5.2f}"
                    for i in np.linspace(0, len(args[0]) - 1, 5, dtype=int)
                ],
            )
            self.refresh()

    def compose(self) -> ComposeResult:
	    # ...
        self.queue_over_time = self.LinePlot(
            title="Queue Over Time", xlabel="Time", ylabel="# in Queue"
        )
        # ...
        with HorizontalGroup():
            yield self.queue_over_time
		# ...
    def update_figures(self, sim: MachineShop):
        if len(sim.metrics_log) < 1:
            return

        df = pl.DataFrame(sim.metrics_log).tail(100)
        # ...
        self.queue_over_time.refresh_plot(
            df["time"].to_list(), df["queue_items"].to_list()
        )
        # ...

```