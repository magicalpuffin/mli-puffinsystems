---
post_id: 20240117
title: Converting Pandas Dataframes to Pydantic Models
description: Blog post about how I created pandas-to-pydantic, and how it could be used for restructuring data.
date_created: 2024-01-17
date_updated: 2024-01-17
---
## Overview

In Python, Pandas Dataframes are effectively the standard for tabular data used in data analysis. However, data in a table format can't be easily represented as objects, especially if not every object corresponds with a single row. This makes the existing object and JSON serialization with Pandas extremely limiting.

This is where Pydantic comes in. Pydantic is a library used for data validation and serialization which treats all data as objects. Every object has its types annotated through custom Pydantic Models, providing an existing object structure.

This is why I created `pandas-to-pydantic`, a easy to use Python library for converting Pandas Dataframes into Pydantic Models. Allowing you to easily convert tabular data into hierarchical data.

### Links
- https://github.com/magicalpuffin/pandas-to-pydantic
- https://pypi.org/project/pandas-to-pydantic/

## Basic Example

[Example Book Data](https://github.com/magicalpuffin/pandas-to-pydantic/blob/main/tests/data/bookData.csv)

|BookID|Title|AuthorName|Genre|PublishedYear|
|---|---|---|---|---|
|1|Harry Potter and the Philosopher's Stone|J.K. Rowling|Fantasy|1997|
|2|Harry Potter and the Chamber of Secrets|J.K. Rowling|Fantasy|1998|
|3|1984|George Orwell|Dystopian Fiction|1949|
|4|Animal Farm|George Orwell|Political Satire|1945|
|5|Pride and Prejudice|Jane Austen|Romance|1813|
|7|Murder on the Orient Express|Agatha Christie|Mystery|1934|
|9|Adventures of Huckleberry Finn|Mark Twain|Adventure|1884|
|10|The Adventures of Tom Sawyer|Mark Twain|Adventure|1876|
|11|The Hobbit|J.R.R. Tolkien|Fantasy|1937|
|12|The Lord of the Rings|J.R.R. Tolkien|Fantasy|1954|

```python
import pandas as pd
from pydantic import BaseModel
from pandas_to_pydantic import dataframe_to_pydantic

# Declare pydantic models
class Book(BaseModel):
    BookID: int
    Title: str
    PublishedYear: int

class Author(BaseModel):
    AuthorName: str
    BookList: list[Book]

class Genre(BaseModel):
    Genre: str
    AuthorList: list[Author]

# Update this to your your file path
book_data = pd.read_csv(FILE_PATH)

# Convert pandas dataframe to a pydantic root model and access data as a list of dict
dataframe_to_pydantic(
    data=bookData,
    model=Genre,
    id_column_map={"Genre": "Genre", "AuthorList": "AuthorName"},
).model_dump()
```

Returns (output shortened):

```
[{'Genre': 'Fantasy',
  'AuthorList': [{'AuthorName': 'J.K. Rowling',
    'BookList': [{'BookID': 1,
      'Title': "Harry Potter and the Philosopher's Stone",
      'PublishedYear': 1997},
     {'BookID': 2,
      'Title': 'Harry Potter and the Chamber of Secrets',
      'PublishedYear': 1998}]},
   {'AuthorName': 'J.R.R. Tolkien',
    'BookList': [{'BookID': 11, 'Title': 'The Hobbit', 'PublishedYear': 1937},
     {'BookID': 12,
      'Title': 'The Lord of the Rings',
      'PublishedYear': 1954}]}]},
 {'Genre': 'Dystopian Fiction',
  'AuthorList': [{'AuthorName': 'George Orwell',
    'BookList': [{'BookID': 3, 'Title': '1984', 'PublishedYear': 1949}]}]},
...]
```


In this example, we want to convert the Datframe into a hierarchical data structure, `Genre` -> `Author` -> `Book`. 

The `dataframe_to_pydantic()` accepts a Pandas Dataframe, Pydantic Model, and a dictionary to map field names with unique ids. These inputs allow you to quickly transform the same Dataframe into multiple different structures.

In the backend, the Pydantic Model is deconstructed into different types of fields. Any model that has a field with a child model will need an associated unique id column. As the Dataframe is processed, it is sliced using the id

## Advanced Example

[Example Library Data](https://github.com/magicalpuffin/pandas-to-pydantic/blob/main/tests/data/library_data/library_data.csv)

```python
import pandas as pd
from pydantic import BaseModel
from pandas_to_pydantic import dataframe_to_pydantic

# Declare pydantic models
class LibaryDetail(BaseModel):
    LibraryName: str
    Location: str
    EstablishedYear: int
    BookCollectionSize: int

class Author(BaseModel):
    AuthorID: int
    AuthorName: str
    AuthorBirthdate: str

class Book(BaseModel):
    BookID: int
    Title: str
    Genre: str
    PublishedYear: int

class Library(BaseModel):
    LibraryID: int
    Detail: LibaryDetail
    AuthorList: list[Author]
    BookList: list[Book]

# Input data is a pandas dataframe
data = pd.read_csv(FILE_PATH)

# Convert pandas dataframe to a pydantic root model
library_list_root = dataframe_to_pydantic(
    data,
    Library,
    {
        "Library": "LibraryID",
        "BookList": "BookID",
        "AuthorList": "AuthorID",
    },
)
```
