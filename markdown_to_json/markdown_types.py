from datetime import date

from pydantic import BaseModel


class BlogPost(BaseModel):
    title: str
    content: str
    slug_url: str
    date_created: date
    date_updated: date


class CardContent(BaseModel):
    title: str
    content: str
    img_src: str | None
    github_url: str | None
    detail_url: str | None
    category: str
