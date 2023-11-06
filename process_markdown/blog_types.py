import typing


class BlogPost(typing.TypedDict):
    title: str
    slug_url: str
    markdown_url: str
    date_created: str
    date_updated: str


class CardContent(typing.TypedDict):
    title: str
    body: str
    img_src: str
    github_url: str
    detail_url: str
