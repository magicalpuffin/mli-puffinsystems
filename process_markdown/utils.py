import frontmatter
import re

from .blog_types import BlogPost


def getBlogTitle(filename: str) -> str:
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
    title = getBlogTitle(filename)

    blogPost: BlogPost = {
        "title": title,
        "slug_url": slugUrl,
        "markdown_url": contentUrl,
        "date_created": postDateCreate,
        "date_updated": postDateUpdate,
    }

    return blogPost
