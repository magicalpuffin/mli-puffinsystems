import typing


class BlogPost(typing.TypedDict):
    title: str
    slug_url: str
    markdown_url: str
    date_created: str
    date_updated: str
