# Book Management API

## Objective:

Create a RESTful API using Express.js and Mongoose to perform basic CRUD operations on a collection of books.

## Requirements:

Implement the following endpoints for the book resource:

- GET: /books: Retrieve all books
- GET: /books/:id: Retrieve a specific book by ID
- POST: /books: Create a new book
- PUT: /books/:id: Update a book by ID
- DELETE: /books/:id: Delete a book by ID

Define a book schema with the following fields:

- Title: Required, string
- Author: Required, string
- Description: Optional, string
- PublishedYear: Optional, number

Connect the API to a MongoDB database using Mongoose.
