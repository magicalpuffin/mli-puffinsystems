import os
import re
from typing import Callable

import frontmatter
from pydantic import RootModel
from pydantic._internal._model_construction import ModelMetaclass

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
    """
    Returns frontmatter and markdown content

    Args:
        filepath (str): Path to file

    Returns:
        dict: Frontmatter data and markdown content
    """
    with open(filepath) as f:
        post = frontmatter.load(f)

    return {
        **post.to_dict(),
        "content": post.content,
    }


def get_blog_post(filepath: str) -> BlogPost:
    """
    Gets blog post from a single markdown file

    Args:
        filepath (str): Path to file

    Returns:
        BlogPost: Object from markdown file
    """
    filename = re.split("/", filepath)[-1]

    blog_post = BlogPost(
        title=get_title(filename),
        slug_url=get_slug(filename),
        **get_markdown_content(filepath),
    )

    return blog_post


def get_card_content(filepath: str) -> CardContent:
    """
    Gets card content from a single markdown file

    Args:
        filepath (str): Path to file

    Returns:
        CardContent: Object from markdown file
    """
    filename = re.split("/", filepath)[-1]

    card_content = CardContent(
        title=get_title(filename),
        **get_markdown_content(filepath),
    )

    return card_content


def read_markdown_files(
    directory: str, model: ModelMetaclass, markdown_serializer: Callable
) -> RootModel:
    """
    Reads all markdown files from directory

    Args:
        directory (str): Directory with markdown files
        model (ModelMetaclass): Pydantic model for RootModel
        markdown_serializer (Callable): Function for serialzing each markdown file

    Returns:
        RootModel: RootModel list of Pydantic model passed in
    """

    class RootListModel(RootModel[list[model]]):
        pass

    # root_list_model = RootModel[list[model]]
    model_list = []

    for file in os.listdir(directory):
        model_list.append(markdown_serializer(directory + file))

    return RootListModel(model_list)


def root_model_to_json(root_model: RootModel, filepath: str):
    """
    Writes root model json, creating directory if needed

    Args:
        root_model (RootModel): Pydantic RootModel
        filepath (str): Filepath to write to
    """
    # BUG when no directory is needed
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w") as outfile:
        outfile.write(root_model.model_dump_json())
