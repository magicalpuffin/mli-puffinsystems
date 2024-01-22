from datetime import date

from pydantic import BaseModel


class BlogPost(BaseModel):
    filename: str
    content: str
    post_id: int
    title: str
    description: str
    date_created: date
    date_updated: date


class CardContent(BaseModel):
    filename: str
    content: str
    title: str
    category: str
    sequence: int
    img_src: str | None
    github_url: str | None
    detail_url: str | None
