const express = require('express');
const cors = require('cors');

const questions = require('./questions');
const logger = require('./logger');

const app = express();

//Middleware
app.use(cors());
app.use(express.json())
app.use(logger);

app.get('/', (req, res) => {
    res.send(`Welcome to the QUIZ API! There are 4 categories available, each containig 10 questions.`);
})


app.get('/questions', (req, res) => {
    res.send(questions);
})

module.exports = app;

