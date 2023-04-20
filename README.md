# The_Wild_Cats_Quiz_Game
- A multiple choice quiz to help high school students engage with non-STEM subjects

---

# Description and project context
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

---

# How to use
-answer the questions by selecting the radio button with the correct answer next to it
-when all questions have been answered press the "get results" button
-the question will turn green if correct or red if incorrect
-a score will appear underneath the "get results" button

---

## Technology used
-Javascript
-HTML/CSS
-Express
-Node
-Github

---

## Install
-Node 
-Nodemon `npm i node`
-Express `npm i express`
-CORS `npm i CORS`

---

## How the code works
-HTML and CSS style the pages

-Javascript is used for the core functionality:
    - showQuestions creates the questions, answers and radio boxes to insert into the HTML. A for loop iterates through the questions and a nested for in loop accesses the nested answers and creates a radio buttons for each answer. They are then combined into one HTML string and sent to the HTML
    - showResults takes the selected radio buttons and using conditionals compares them to the API to:
        -turn the answers red or green 
        -show the users score
-Express is used in the backend to interact with the API allowing javascript to access the question

-Nodemon makes the page refresh automatically

-CORS is for security and grants access to the page



