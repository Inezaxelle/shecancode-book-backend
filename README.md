# Books API

A RESTful API for managing books with Swagger documentation.

## Features

- CRUD operations for books
- Swagger documentation
- Input validation
- CORS enabled
- UUID generation for book IDs

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## API Documentation

Once the server is running, you can access the Swagger documentation at:
```
http://localhost:3000/api-docs
```

## API Endpoints

- `GET /api/v1/books` - Get all books
- `POST /api/v1/books` - Create a new book
- `GET /api/v1/books/{id}` - Get a book by ID
- `PUT /api/v1/books/{id}` - Update a book
- `DELETE /api/v1/books/{id}` - Delete a book

## Data Structure

Book object:
```json
{
  "id": "uuid",
  "title": "string",
  "author": "string",
  "publishedYear": "number",
  "isbn": "string"
}
```

Required fields for creation/update:
- title
- author "# shecancode-book-backend" 
