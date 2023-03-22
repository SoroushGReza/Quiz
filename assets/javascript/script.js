let startQuiz = document.getElementById("start-quiz");
let questionContainer = document.getElementById("question-container");
const answers = document.getElementsByClassName('answer-button');
let currentQuestionIndex = 0;
let currentQuestion = {};

/* Questions and answers */
let questions = [
    {
        question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "Hot Tamale Marmelade Lollipop", "Hail The Mighty Lobster"]
    }, 
    {
        question: "What is purpose of the <head> tag in HTML?", answers: ["To contain metadata about the document", "To display the heading of the page", "To add a musical headbang animation to the page"]
    }, 
    {
        question: "How do you create a hyperlink in HTML?", answers: ["By using the <a> tag", "By using the <h> tag", "By using the <i> tag"]
    }, 
    { 
        question: "What is the difference between an ordered list and an unordered list in HTML?", answers: ["Ordered lists have numbers or letters, while unordered lists have bullet points", "Unordered lists have numbers or letters, while ordered lists have bullet points", "There is no difference, they are the same thing in HTML"]
    }, 
    {
        question: "What does the <img> tag do in HTML?", answers: ["Displays an image on the webpage", "Adds a music player to the webpage", "Creates a rainbow-colored text effect on the webpage"]
    }, 
    {
        question: "What does CSS stand for? ", answers: ["Cascading Style Sheets", "Cute and Snuggly Sloths", "Crispy Spicy Salmon"]
    }, 
    { 
        question: "How do you change the font size of an element in CSS?", answers: ["By using the font-size property", "By using the text-size property", "By using the word-size property"]
    }, 
    {     
        question: "What is the purpose of the box-sizing property in CSS?", answers: ["To control how the width and height of an element are calculated", "To add a border to the element", "To change the background color of the element to pink"]
    }, 
    { 
        question: "How do you add a background color to an element in CSS?", answers: ["By using the background-color property", "By using the color property", "By using the foreground-color property"]
    }, 
    { 
        question: "How do you create a class in CSS?", answers: ["By using the .classname selector", "By using the #classname selector", "By using the @classname selector"]
    }, 
    {
        question: "What is the purpose of JavaScript?", answers: ["To add interactivity and dynamic effects to web pages", "To make coffee", "To teach dogs how to code"]
    }, 
    {
        question: "How do you declare a variable in JavaScript?", answers: ["By using the var keyword", "By using the const keyword", "By using the let keyword"]
    }, 
    {
        question: "What is the difference between == and === in JavaScript?", answers: ["== compares values, while === compares values and types", "== always returns true, while === always returns false", "There is no difference, they are the same thing in JavaScript"]
    }, 
    {
        question: "How do you create a function in JavaScript?", answers: ["By using the function keyword", "By using the method keyword", "By using the class keyword"]
    }, 
    {
        question: "What does the if statement do in JavaScript?", answers: ["It executes code if a specified condition is true", "It makes your code more difficult to read", "It sends an email to your grandma"]
    }, 
    {
        question: "What is Python? ", answers: ["A high-level programming language", "A type of snake", "A type of fruit"]
    }, 
    { 
        question: "How do you print something to the console in Python?", answers: ["By using the print() function", "By using the display() function", "By using the shout() function"]
    }, 
    {   
        question: "What is the purpose of a for loop in Python?", answers: ["To execute a block of code repeatedly for a specified number of times", "To output a random number", "To count how many fingers you have"]
    }, 
    {
        question: "How do you read input from the user in Python?", answers: ["By using the input() function", "By using the read() function", "By using the listen() function"]
    }, 
];

function getNextQuestion(){
    currentQuestionIndex = Math.floor(Math.random() * (questions.length - 1)) ;
    currentQuestion = questions[currentQuestionIndex];
}


function displayQuestion(questionObject){
    document.getElementById('question').innerText = questionObject.question;
    document.getElementById('button0').innerText = questionObject.answers[0];
    document.getElementById('button1').innerText = questionObject.answers[1];
    document.getElementById('button2').innerText = questionObject.answers[2];
}



startQuiz.addEventListener("click", function() {
    startQuiz.style.display = "none"; 
    questionContainer.style.display = "block";
    getNextQuestion();
    displayQuestion(currentQuestion);
});

for (var i = 0; i < answers.length; i++) {
    const answer = answers[i];
    answer.addEventListener('click', function(){
        // Check the answer and update score
        // avoid repeated questions
        getNextQuestion();
        displayQuestion(currentQuestion);

    });
}


