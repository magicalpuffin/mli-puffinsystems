from datetime import date

from pydantic import BaseModel


class BaseMarkdownFile(BaseModel):
    filename: str
    content: str


class BlogPost(BaseMarkdownFile):
    post_id: int
    title: str
    description: str
    date_created: date
    date_updated: date


class CardContent(BaseMarkdownFile):
    title: str
    category: str
    sequence: int
    img_src: str | None
    github_url: str | None
    detail_url: str | None
