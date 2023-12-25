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
    nameWithExtension = re.split("_", filename)[-1]
    name = re.split(r"\.", nameWithExtension)[0]
    titleList = re.split("-", name)
    title = " ".join(titleList).title()

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
    slugUrl = re.split(r"\.", filename)[0]

    return slugUrl


def get_markdown_content(filepath: str) -> dict:
    with open(filepath) as f:
        post = frontmatter.load(f)

    return {
        **post.to_dict(),
        "content": post.content,
    }


def get_blog_post(filepath: str) -> BlogPost:
    filename = re.split("/", filepath)[-1]

    blogPost = BlogPost(
        title=get_title(filename),
        slug_url=get_slug(filename),
        **get_markdown_content(filepath),
    )

    return blogPost


def get_card_content(filepath: str) -> CardContent:
    filename = re.split("/", filepath)[-1]

    with open(filepath) as f:
        post = frontmatter.load(f)
        postContent = post.content
        postImgSrc = post.metadata["img_src"]
        postGithubUrl = post.metadata["github_url"]
        postDetailUrl = post.metadata["detail_url"]
        postCategory = post.metadata["category"]

    title = get_title(filename)

    cardContent: CardContent = {
        "title": title,
        "body": postContent,
        "img_src": postImgSrc,
        "github_url": postGithubUrl,
        "detail_url": postDetailUrl,
        "category": postCategory,
    }

    return cardContent
