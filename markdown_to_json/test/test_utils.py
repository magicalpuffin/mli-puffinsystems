import datetime
import json
import operator

from markdown_to_json.config import TEST_DATA_BLOG, TEST_DATA_CARD, TEST_DATA_JSON
from markdown_to_json.markdown_types import CardContent
from markdown_to_json.utils import (
    read_markdown_dir,
    read_markdown_file,
)


class TestGetMarkdownContent:
    def test_blog_post(self):
        target = {
            "filename": "20240101 Test Blog 1",
            "content": "Test blog 1 content.",
            "post_id": 20240101,
            "title": "Test Blog 1",
            "description": "This is a test blog to check if it gets serialized correctly.",
            "date_created": datetime.date(2023, 1, 1),
            "date_updated": datetime.date(2023, 1, 2),
        }
        assert read_markdown_file(TEST_DATA_BLOG + "20240101 Test Blog 1.md") == target

    def test_basic_card(self):
        target = {
            "filename": "Test Card 1",
            "content": "Test card content",
            "title": "Test Card 1",
            "category": "test_category",
            "sequence": 1,
            "img_src": "/static/images/testimage.png",
            "github_url": "https://github.com/magicalpuffin/",
            "detail_url": "https://puffinsystems.com/",
        }
        assert read_markdown_file(TEST_DATA_CARD + "Test Card 1.md") == target


class TestReadMarkdownFiles:
    def test_cards(self):
        with open(TEST_DATA_JSON + "card_list.json") as f:
            json_data = json.load(f)

        test_card_root = read_markdown_dir(TEST_DATA_CARD, CardContent)

        assert sorted(
            test_card_root.model_dump(), key=operator.itemgetter("title")
        ) == sorted(json_data, key=operator.itemgetter("title"))
