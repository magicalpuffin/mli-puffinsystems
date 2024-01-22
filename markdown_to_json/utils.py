import os
import re

import frontmatter
from pydantic import RootModel
from pydantic._internal._model_construction import ModelMetaclass


def get_markdown_content(filepath: str) -> dict:
    filename = re.split("/", filepath)[-1]
    # Removes extension
    # filename = re.split(r"\.", filename)[0]

    with open(filepath) as f:
        post = frontmatter.load(f)

    return {
        "filename": filename,
        "content": post.content,
        **post.to_dict(),
    }


def read_markdown_files(directory: str, model: ModelMetaclass) -> RootModel:
    class RootListModel(RootModel[list[model]]):
        pass

    # root_list_model = RootModel[list[model]]
    model_list = []

    for file in os.listdir(directory):
        model_list.append(get_markdown_content(directory + file))

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
