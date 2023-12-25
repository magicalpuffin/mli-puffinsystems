from markdown_to_json.utils import get_slug, get_title


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
