import os

import frontmatter
from pydantic import RootModel
from pydantic._internal._model_construction import ModelMetaclass


def read_markdown_file(filepath: str) -> dict:
    basename = os.path.basename(filepath)
    filename, extension = os.path.splitext(basename)

    if extension != ".md":
        ValueError("Not a markdown file")

    with open(filepath) as f:
        post = frontmatter.load(f)

    return {
        "filename": filename,
        "content": post.content,
        **post.to_dict(),
    }


def read_markdown_dir(directory: str, model: ModelMetaclass) -> RootModel:
    class RootListModel(RootModel[list[model]]):
        pass

    # root_list_model = RootModel[list[model]]
    model_list = []

    for file in os.listdir(directory):
        filename, extension = os.path.splitext(file)
        if extension == ".md":
            model_list.append(read_markdown_file(os.path.join(directory, file)))

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
