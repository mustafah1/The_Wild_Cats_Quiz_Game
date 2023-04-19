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

    res.send(questions[1][1]);

        // for (let i = 0; i < questions.length; i++) {
        //    res.send(questions[i])
        // }
            
        })

app.get('/questions/id', (req, res) => {

    const randIdx = () => {
        for (let index = 0; index < questions.length; index++) {
            const element = array[index];
            
        }
    };
    res.send(quotes[randIdx]);
})


module.exports = app;
