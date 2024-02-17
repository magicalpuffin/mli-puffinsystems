export type BlogPostJSON = {
  filename: string;
  content: string;
  post_id: number;
  title: string;
  description: string;
  date_created: string;
  date_updated: string;
};
export type BlogPost = {
  filename: string;
  content: string;
  post_id: number;
  title: string;
  description: string;
  date_created: Date;
  date_updated: Date;
};
