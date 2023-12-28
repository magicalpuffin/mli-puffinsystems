import datetime

from markdown_to_json.config import TEST_PATH
from markdown_to_json.markdown_types import BlogPost, CardContent
from markdown_to_json.utils import get_blog_post, get_card_content, get_slug, get_title


class TestGetTitle:
    def test_basic_filename(self):
        filename = "2023-07-15_demo-manufacturing-kanban.md"
        target = "Demo Manufacturing Kanban"
        assert get_title(filename) == target


class TestGetSlug:
    def test_basic_filename(self):
        filename = "2023-07-15_demo-manufacturing-kanban.md"
        target = "2023-07-15_demo-manufacturing-kanban"
        assert get_slug(filename) == target


class TestGetBlogPost:
    def test_basic_blog(self):
        filename = "2023-01-01_test-blog-1.md"
        target = BlogPost(
            title="Test Blog 1",
            slug_url="2023-01-01_test-blog-1",
            content="Test blog 1 content.",
            date_created=datetime.date(2023, 1, 1),
            date_updated=datetime.date(2023, 1, 2),
        )
        assert get_blog_post(TEST_PATH + filename) == target


class TestGetCardContent:
    def test_basic_card(self):
        filename = "test-card-1.md"
        target = CardContent(
            title="Test Card 1",
            content="Test card content",
            img_src="/static/images/testimage.png",
            github_url="https://github.com/magicalpuffin/",
            detail_url="https://markdown.puffinsystems.com/",
            category="test_category",
        )
        assert get_card_content(TEST_PATH + filename) == target

    def test_missing(self):
        filename = "test-card-2.md"
        target = CardContent(
            title="Test Card 2",
            content="Card content missing values",
            img_src=None,
            github_url=None,
            detail_url=None,
            category="test_category",
        )
        assert get_card_content(TEST_PATH + filename) == target
