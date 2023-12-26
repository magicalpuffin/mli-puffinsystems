import datetime

from markdown_to_json.config import TEST_PATH
from markdown_to_json.markdown_types import BlogPost
from markdown_to_json.utils import get_blog_post, get_slug, get_title


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
            title=get_title(filename),
            slug_url=get_slug(filename),
            content="Test blog 1 content.",
            date_created=datetime.date(2023, 1, 1),
            date_updated=datetime.date(2023, 1, 2),
        )
        assert get_blog_post(TEST_PATH + filename) == target
