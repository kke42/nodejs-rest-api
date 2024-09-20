// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Hello World route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// RESTful API: Handle GET request
app.get('/api', (req, res) => {
    res.send('Received GET');
});

// RESTful API: Handle POST request
app.post('/api', (req, res) => {
    res.send('Received POST');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
