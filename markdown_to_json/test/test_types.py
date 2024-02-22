from datetime import date

from pydantic import BaseModel


class TestMarkdown(BaseModel):
    filename: str
    content: str
    test_int: int
    test_str: str
    test_date: date
    test_str_optional: str | None
