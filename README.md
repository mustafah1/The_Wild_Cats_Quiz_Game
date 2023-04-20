# The_Wild_Cats_Quiz_Game
- A multiple choice quiz to help high school students engage with non-STEM subjects

# Description
Stakeholders in high school education (teachers, parents and students) face issues in student engagement in non-STEM subjects. They faced a number of issues:

- students need a well-rounded holistic approach to help skills like critical thinking
- students don’t like relying on textbooks. They love learning lots of different topics but it feels like there’s too many topics to cover. Lessons can feel repetitive using same techniques.
- parents find it hard to know what to focus on, their kids are overwhelmed with information and it leads to lack of enjoyment. Concerned that lots of fun is missing.
- the focus on STEM means teachers can’t focus on non-STEM subjects (less time available). Knowledge gained is superficial back lacks depth. Also students are struggling to retain information.

The aim of this quiz is to make a fun way for students to engage in non-STEM subjects for a holistic education. The quiz:

- focuses on non-STEM subjects
- doesn't rely on textbooks and focuses learning into bitesize chunks 
- frees up teachers time by not requiring their input
- allows to student to gain in-depth knowledge of a particular topic

## Technology used
-Javascript
-HTML/CSS
-Express
-Node
-Github


## Install
-Node
-Nodemon
-Express
-CORS


## How to use


## Project context

The software project you're working with has two parts:

1. A back-end server which provides quotes on request and creates new quotes
2. A simple front-end webpage which displays random quotes from the API when a button is clicked and allows users to create additional quotes via a form

## Instructions

Get the project working without any error messages and with full functionality as described below.

### Server

The server should be runnable with a single command. When the server is running, it should listen for requests on port 3000.

The server should have the following routes and functionalities:

| Route | Method | Response |
| --- | --- | --- |
| `/` | `GET` | Returns a string stating the number of quotes available. |
| `/quotes` | `GET` | Returns a JSON object containing all the quotes. |
| `/quotes` | `POST` | Accepts a JSON object and uses it to create and store a new quote. |
| `/quotes/random` | `GET` | Returns a random quote from the collection as a JSON object. |
| `/quotes/:id` | `GET` | Returns a JSON object representing a single quote from the collection, selected by `:id`. If the id is invalid (non-numeric or out-of-bounds), returns a JSON object explaining the problem, with `404` as the status code. |

### Client

The client consists of a single webpage.

When the page is opened, it should look like this:

![Example front-end webpage](./client-example.png)

- When the "Be Inspired" button is clicked, the page should display a random quote.

- No quote should be visible until the button is clicked.

- When a user submits a new quote via the form, a new quote should be created and stored in the data. 

- If the submission is successful, the input should clear up and an alert should appear stating "Quote added.". 

- When clicking on the "Be Inspired" button, the newly created quote should be displayed at some point.

Watch this [**video recording**](https://www.loom.com/share/b292735f96534977af85b3d6a1adeae3) to see the expected functionality.

### README

The project README should contain clear information on the following:

1. How to install the required libraries
2. How to run the server
3. Any remaining bugs in the project

---

[Back](../README.md)

---
