import shutil

from markdown_to_json.config import (
    SITE_CONTENT_PATH,
    SITE_CONTENT_STATIC_CONTENT_PATH,
    SVELTE_SITE_STATIC_CONTENT_PATH,
)
from markdown_to_json.markdown_types import BlogPost, CardContent
from markdown_to_json.utils import (
    get_blog_post,
    get_card_content,
    read_markdown_files,
    root_model_to_json,
)

# pythom -m markdown_to_json.process_content

blog_post_root = read_markdown_files(
    SITE_CONTENT_PATH + "markdown/blog/", BlogPost, get_blog_post
)
root_model_to_json(
    blog_post_root, SVELTE_SITE_STATIC_CONTENT_PATH + "data/blogPostList.json"
)

card_root = read_markdown_files(
    SITE_CONTENT_PATH + "markdown/card/", CardContent, get_card_content
)
root_model_to_json(
    card_root, SVELTE_SITE_STATIC_CONTENT_PATH + "data/cardContentList.json"
)

shutil.copytree(
    SITE_CONTENT_STATIC_CONTENT_PATH,
    SVELTE_SITE_STATIC_CONTENT_PATH,
    dirs_exist_ok=True,
)
