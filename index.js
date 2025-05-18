const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load Swagger document
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// In-memory database
let books = [];

// Routes
const apiRouter = express.Router();

// GET all books
apiRouter.get('/books', (req, res) => {
  res.json(books);
});

// POST new book
apiRouter.post('/books', (req, res) => {
  const { title, author, publishedYear, isbn } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const newBook = {
    id: uuidv4(),
    title,
    author,
    publishedYear,
    isbn
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// GET book by ID
apiRouter.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});

// PUT update book
apiRouter.put('/books/:id', (req, res) => {
  const { title, author, publishedYear, isbn } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books[index] = {
    ...books[index],
    title,
    author,
    publishedYear,
    isbn
  };

  res.json(books[index]);
});

// DELETE book
apiRouter.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books.splice(index, 1);
  res.status(204).send();
});

// Mount API router
app.use('/api/v1', apiRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
}); 