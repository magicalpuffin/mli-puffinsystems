import re

import frontmatter

from .markdown_types import BlogPost, CardContent


def get_title(filename: str) -> str:
    """
    Generates a title based file name

    Args:
        filename (str): Name of file

    Returns:
        str: Title name
    """
    name_with_extension = re.split("_", filename)[-1]
    name = re.split(r"\.", name_with_extension)[0]
    title_list = re.split("-", name)
    title = " ".join(title_list).title()

    return title


def get_slug(filename: str) -> str:
    """
    Cleans up URL path to generate slug from filename

    Args:
        filename (str): Name of file

    Returns:
        str: Slug name
    """
    # Removes file extention
    slug_url = re.split(r"\.", filename)[0]

    return slug_url


def get_markdown_content(filepath: str) -> dict:
    with open(filepath) as f:
        post = frontmatter.load(f)

    return {
        **post.to_dict(),
        "content": post.content,
    }


def get_blog_post(filepath: str) -> BlogPost:
    filename = re.split("/", filepath)[-1]

    blog_post = BlogPost(
        title=get_title(filename),
        slug_url=get_slug(filename),
        **get_markdown_content(filepath),
    )

    return blog_post


def get_card_content(filepath: str) -> CardContent:
    filename = re.split("/", filepath)[-1]

    with open(filepath) as f:
        post = frontmatter.load(f)
        post_content = post.content
        post_img_src = post.metadata["img_src"]
        post_github_url = post.metadata["github_url"]
        post_detail_url = post.metadata["detail_url"]
        post_category = post.metadata["category"]

    title = get_title(filename)

    card_content: CardContent = {
        "title": title,
        "body": post_content,
        "img_src": post_img_src,
        "github_url": post_github_url,
        "detail_url": post_detail_url,
        "category": post_category,
    }

    return card_content
