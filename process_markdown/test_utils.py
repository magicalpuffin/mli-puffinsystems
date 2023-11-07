from .utils import getBlogTitle, getSlug, getBlogPost


def test_getBlogTitle():
    testFilename = "2023-07-12_demo-markdown-notebook.md"
    assert getBlogTitle(testFilename) == "Demo Markdown Notebook"


def test_getSlug():
    testFilename = "2023-07-12_demo-markdown-notebook.md"
    assert getSlug(testFilename) == "2023-07-12_demo-markdown-notebook"
