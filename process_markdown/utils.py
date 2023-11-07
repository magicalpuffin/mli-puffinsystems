import frontmatter
import re

from .blog_types import BlogPost, CardContent


def getTitle(filename: str) -> str:
    nameWithExtension = re.split("_", filename)[-1]
    name = re.split(r"\.", nameWithExtension)[0]
    titleList = re.split("-", name)
    title = " ".join(titleList).title()

    return title


def getSlug(filename: str) -> str:
    slugUrl = re.split(r"\.", filename)[0]

    return slugUrl


def getBlogPost(filepath: str) -> BlogPost:
    filename = re.split("/", filepath)[-1]

    with open(filepath) as f:
        post = frontmatter.load(f)
        postDateCreate = str(post.metadata["date_created"])
        postDateUpdate = str(post.metadata["date_updated"])

    contentUrl = "/blog/" + filename
    slugUrl = getSlug(filename)
    title = getTitle(filename)

    blogPost: BlogPost = {
        "title": title,
        "slug_url": slugUrl,
        "markdown_url": contentUrl,
        "date_created": postDateCreate,
        "date_updated": postDateUpdate,
    }

    return blogPost


def getCardContent(filepath: str) -> CardContent:
    filename = re.split("/", filepath)[-1]

    with open(filepath) as f:
        post = frontmatter.load(f)
        postContent = post.content
        postImgSrc = post.metadata["img_src"]
        postGithubUrl = post.metadata["github_url"]
        postDetailUrl = post.metadata["detail_url"]
        postCategory = post.metadata["category"]

    title = getTitle(filename)

    cardContent: CardContent = {
        "title": title,
        "body": postContent,
        "img_src": postImgSrc,
        "github_url": postGithubUrl,
        "detail_url": postDetailUrl,
        "category": postCategory,
    }

    return cardContent
