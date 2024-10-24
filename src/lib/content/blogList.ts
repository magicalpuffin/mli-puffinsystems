type BlogPost = {
	id: number;
	slug: string;
	title: string;
	createdDate: string;
	updatedDate?: string;
};

export const blogList: BlogPost[] = [
	{
		id: 20240407,
		slug: "lucia-auth-cloudflare-argon2",
		title: "How to use Lucia Auth on Cloudflare with an Argon2 Rust Worker",
		createdDate: "2024-04-07",
	},
	{
		id: 20240327,
		slug: "demo-manufacturing-kanban-2",
		title: "Demo Manufacturing Kanban Part 2",
		createdDate: "2024-03-27",
	},
	{
		id: 20240117,
		slug: "pandas-to-pydantic",
		title: "Converting Pandas Dataframes to Pydantic Models",
		createdDate: "2024-01-17",
	},
	{
		id: 20240102,
		slug: "piantor-keyboard-build",
		title: "Piantor Keyboard Build",
		createdDate: "2024-01-02",
	},
	{
		id: 20230801,
		slug: "confluence-to-obsidian",
		title: "Confluence to Obsidian",
		createdDate: "2023-08-01",
	},
	{
		id: 20230715,
		slug: "demo-manufacturing-kanban-1",
		title: "Demo Manufacturing Kanban Part 1",
		createdDate: "2023-07-15",
	},
	{
		id: 20230712,
		slug: "demo-markdown-notebook",
		title: "Demo Markdown Notebook",
		createdDate: "2023-07-12",
	},
	{
		id: 20230706,
		slug: "thoughts-on-moonlander-keyboard",
		title: "Thoughts on the Moonlander Keyboard",
		createdDate: "2023-07-06",
	},
];
