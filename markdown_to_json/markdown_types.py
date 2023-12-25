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
    body: str
    img_src: str
    github_url: str
    detail_url: str
    category: str
