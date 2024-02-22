import datetime
import json
import operator

import pytest
from pydantic import RootModel

from markdown_to_json.test.config import TEST_DATA_PATH
from markdown_to_json.test.test_types import TestMarkdown
from markdown_to_json.utils import (
    read_markdown_dir,
    read_markdown_file,
)

markdown_file_data = [
    (
        "Test Markdown 1.md",
        TestMarkdown(
            filename="Test Markdown 1",
            content="Test markdown 1 content.",
            test_int=20240101,
            test_str="test string",
            test_date=datetime.date(2024, 1, 1),
            test_str_optional=None,
        ),
    ),
    (
        "Test Markdown 2.md",
        TestMarkdown(
            filename="Test Markdown 2",
            content="Test markdown 2 content.",
            test_int=20240102,
            test_str="test string",
            test_date=datetime.date(2024, 1, 2),
            test_str_optional="Value present",
        ),
    ),
]


class TestReadMarkdownFile:
    @pytest.mark.parametrize("markdown_file, output_model", markdown_file_data)
    def test_markdown(self, markdown_file, output_model):
        assert (
            read_markdown_file(
                TEST_DATA_PATH + "markdown/" + markdown_file, TestMarkdown
            )
            == output_model
        )


class TestReadMarkdownDir:
    def test_cards(self):
        test_markdown_list = RootModel[list[TestMarkdown]]
        with open(TEST_DATA_PATH + "json/" + "markdown_list.json") as f:
            json_data = json.load(f)
        test_json_root = test_markdown_list(json_data)

        test_card_root = read_markdown_dir(TEST_DATA_PATH + "markdown/", TestMarkdown)

        assert sorted(
            test_card_root.model_dump(), key=operator.itemgetter("filename")
        ) == sorted(test_json_root.model_dump(), key=operator.itemgetter("filename"))
