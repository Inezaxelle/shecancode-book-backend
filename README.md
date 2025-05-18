# Books API

A RESTful API for managing books with Swagger documentation.

## Features

- CRUD operations for books
- Swagger documentation
- Input validation
- CORS enabled
- MongoDB integration for data persistence
- Swagger UI for testing endpoints

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account (for database)

## MongoDB Setup

1. Create a MongoDB Atlas account:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for a free account
   - Create a new project

2. Create a database:
   - Click "Build a Database"
   - Choose "FREE" shared cluster option
   - Select your preferred cloud provider and region
   - Click "Create"

3. Set up database access:
   - In the security menu, click "Database Access"
   - Add a new database user
   - Create a username and password (save these!)
   - Set user privileges to "Read and write to any database"

4. Set up network access:
   - In the security menu, click "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (or add your specific IP)
   - Confirm

5. Get your connection string:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace <password> with your database user's password
   - Replace myFirstDatabase with your preferred database name

## Environment Setup

1. Create a `.env` file in the root directory:
```bash
touch .env
```

2. Add the following variables to your `.env` file:
```
DATABASE_URL="your_mongodb_connection_string"
PORT=3000
```

Replace "your_mongodb_connection_string" with the connection string from MongoDB Atlas.

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd books-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
- Development mode with auto-reload:
```bash
npm run dev
```
- Production mode:
```bash
npm start
```

The server will start on port 3000 (or the port specified in your .env file).

## API Documentation

The API documentation is available in two environments:

1. Local Development:
```
http://localhost:3000/api-docs
```

2. Production:
```
https://shecancode-book-backend.onrender.com/api-docs
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
- author

## Deployment

This API is configured for deployment on Render. To deploy:

1. Fork/clone this repository to your GitHub account

2. Create a new Web Service on Render:
   - Connect your GitHub repository
   - Choose the branch to deploy
   - Select "Node" as the runtime
   - Add the following environment variables:
     - `DATABASE_URL`: Your MongoDB connection string
     - `PORT`: 3000

3. Deploy the service

The API will be available at your Render service URL.

## Security Notes

- Never commit your `.env` file
- Keep your MongoDB credentials secure
- Update your MongoDB network access settings as needed
- Consider adding authentication for production use

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 
