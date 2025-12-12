---
title: Visualizing Simpy using Textual
description: How to use Textual to visualize and animate Simpy discrete event simulations in Python. Simulating a machine shop example.
createdDate: 2025-03-08
tags:
  - python
  - textual
  - simpy
---
![demo simpy textual app running](/static/content/images/blog/20250308/20250308_demo-simpy-textual.gif)
*Example running machine shop simulation*

I recently started looking into discrete event simulation and found the barrier to entry was surprisingly low. Instead of learning dedicated software like Arena or Simio, you can use [simpy](https://simpy.readthedocs.io/en/latest/contents.html), an open source Python framework for discrete event simulation.

`simpy` uses generator functions to model processes, enabling queues, resources, and random events. Simple models can use print statements for evaluation, but as complexity increases, understanding process flow and resource allocation becomes harder.

Metrics and visualizations help address these issues, but while `simpy` is great at handling processes, it leaves these other aspects to the user. Fortunately, the Python ecosystem provides plenty of solutions.

One solution for visualization is `textual`, a Python framework designed for rapid development of terminal user interfaces. Each simulation iteration can be plotted and visualized in the terminal. `textual` had a few more additional benefits:
- Using a terminal user interface keeps things simple. Visualizations or animations don't need to be complex.
- Everything is in Python. `simpy` can be called directly and type hints are shared.
- Figures can be created using `textual-plotext`, a widget for using `plotext`, a terminal plotting library.
- The app can be bundled to an executable using `pyinstaller`, making it easy to distribute.

This proof of concept is the end result, the rest of the blog post explains how some of the key features were implemented. Many of these concepts could be applicable for visualizations or animations beyond `simpy`.

**Links:**
- https://github.com/magicalpuffin/demo-simpy-textual

## Animating Machines and Modifying Simulation Parameters

![textual simpy changing inputs](/static/content/images/blog/20250308/20250308_textual-simpy-inputs.gif)
*Changing input parameters for machine shop simulation*

Model parameters were handled using `textual` input widgets. If the simulation or model parameters is changed, the entire environment needs to be reset for it to apply. The performance impact of the simulation itself is very low compared to updating the animations and figures. The start time and step delay controls when the animation starts and how long to wait before continuing the simulation.

The animations for queue and machines used `textual` label widgets. Every iteration, the text would be updated using metrics log. The changes in color are from a class in the `.tcss` file.

```python
class SimulationAnimation(VerticalScroll):
    # ...

    class MachineDisplay(Static):
        def compose(self) -> ComposeResult:
            self.border_title = self._content
            self.active_part = Label("Current Part: None", id="part")
            self.parts_made = Label("# of Parts Made: 0", id="parts_made")
            self.machine_status = Label("Status: Idle", id="status")
            self.broken_duration = Label("Broken Duration: 0", id="broken_duration")
            self.idle_duration = Label("Idle Duration: 0", id="idle_duration")

            yield self.active_part
            yield self.parts_made
            yield self.machine_status
            yield self.broken_duration
            yield self.idle_duration

        def update_machine_metrics(self, machine_log: MachineMetrics):
            self.active_part.update(f"Current Part: {machine_log['part_id']}")
            self.parts_made.update(f"# of Parts Made: {machine_log['parts_made']}")
            self.broken_duration.update(
                f"Broken Duration: {machine_log['broken_duration']:.2f}"
            )
            self.idle_duration.update(
                f"Idle Duration: {machine_log['idle_duration']:.2f}"
            )

            if machine_log["part_id"] is None:
                self.remove_class("active")
                self.machine_status.update("Status: Idle")
            else:
                self.add_class("active")
                self.machine_status.update("Status: Active")
            if machine_log["broken"]:
                self.add_class("broken")
                self.machine_status.update("Status: Broken")
            else:
                self.remove_class("broken")

	# ...

    def update_text(self, sim: MachineShop):
        self.queue_display.update(sim.store.items.__len__())
        for i, machine_display in enumerate(self.query(self.MachineDisplay)):
            if len(sim.machine_metrics_log[i]) > 0:
                machine_display.update_machine_metrics(sim.machine_metrics_log[i][-1])
            else:
                machine_display.update_machine_metrics(
                    {
                        "name": "",
                        "broken": False,
                        "broken_duration": 0,
                        "idle_duration": 0,
                        "part_id": None,
                        "parts_made": 0,
                        "time": 0,
                    }
                )

    def update_machine_grid(self, num: int):
        self.query_one("#machine-grid").remove_children()
        self.query_one("#machine-grid").mount_all(
            [self.MachineDisplay(f"machine-{i + 1}") for i in range(num)]
        )
```

## Initializing and Resetting Simulation

To run the simulation in `textual`, an async task is created using `asyncio`. This iterates through the model, updating the progress bar and sending an message at each time interval.

When the model is paused the task is stopped, if it is resumed, a new async task is created but uses the same environment. Although it was not implemented in this example, it should be possible to step through the simulation using `env.step()`. 

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
## Modifying the Machine Shop SimPy example

The discrete event simulation model used is from [SimPy Machine Shop Example](https://simpy.readthedocs.io/en/latest/examples/machine_shop.html). The model was modified to be declared by a `MachineShop` class and to parameterize key inputs such as the number of machines. The `Machine` class was also modified to track additional metrics such as idle duration. 

Metrics are logged using a process which appends the state of machines at a fixed time interval. Although this will miss events between time steps, it was the simplest implementation and sufficient for the visualizations.

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

![textual plot text figures](/static/content/images/blog/20250308/20250308_textual-plotext-figures.png)
*Figures created by textual-plotext of machine shop metrics*

Figures were created using [plotext](https://github.com/piccolomo/plotext) and [textual-plotext](https://github.com/Textualize/textual-plotext/). Using the metrics log, the figure is cleared and redrawn each simulation iteration. Data is converted to `polars` for easier filtering.

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