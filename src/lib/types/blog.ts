export interface BlogPostBase {
  filename: string;
  content: string;
  post_id: number;
  title: string;
  description: string;
  date_created: Date | string;
  date_updated: Date | string;
}

export interface BlogPost extends BlogPostBase {
  filename: string;
  content: string;
  post_id: number;
  title: string;
  description: string;
  date_created: Date;
  date_updated: Date;
}
