const express = require('express');

const books = require('./books.json');
const PORT = 8000;

const app = express();

app.get('/', (request, response) => {
        response.send('Hello');
});

app.get('/books', (request, response) => {
    response.send(books);
});

app.listen(PORT, () => {
    console.log(`Server is running on Port No. : ${PORT}`);
});