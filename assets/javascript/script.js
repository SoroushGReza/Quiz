document.addEventListener("DOMContentLoaded", function (event) {
    // Start quiz button 
    let startQuiz = document.getElementById("start-quiz");
    let questionContainer = document.getElementById("question-container");
    const answers = document.getElementsByClassName('answer-button');
    let currentQuestionIndex = 0;
    let currentQuestion = {};
    let tryAgainButton = document.getElementById("try-again");
    let buttonContainer = document.getElementById("button-container");
    let instructionsButton = document.getElementById("instructions-button");
    let instructionsContent = document.getElementById("instructions-content");

    // Instructions button event listener
    instructionsButton.addEventListener("click", function (e) {
        e.stopPropagation();
        instructionsContent.classList.toggle("hidden");
    });

    // Hide Instructions content when clicking outside of it
    document.addEventListener("click", function (e) {
        if (!instructionsContent.contains(e.target) && e.target !== instructionsButton) {
            instructionsContent.classList.add("hidden");
        }
    });

    // Questions and answers 
    let questions = [{
            question: "What does HTML stand for?",
            answers: ["Hyper Text Markup Language", "Hot Tamale Marmelade Lollipop", "Hail The Mighty Lobster"],
            correctAnswer: 0
        },
        {
            question: "What is purpose of the <head> tag in HTML?",
            answers: ["To display the heading of the page", "To contain metadata about the document", "To add a musical headbang animation to the page"],
            correctAnswer: 1
        },
        {
            question: "How do you create a hyperlink in HTML?",
            answers: ["By using the <a> tag", "By using the <h> tag", "By using the <i> tag"],
            correctAnswer: 0
        },
        {
            question: "What is the difference between an ordered list and an unordered list in HTML?",
            answers: ["Unordered lists have numbers or letters, while ordered lists have bullet points", "There is no difference, they are the same thing in HTML", "Ordered lists have numbers or letters, while unordered lists have bullet points"],
            correctAnswer: 2
        },
        {
            question: "What does the <img> tag do in HTML?",
            answers: ["Adds a music player to the webpage", "Displays an image on the webpage", "Creates a rainbow-colored text effect on the webpage"],
            correctAnswer: 1
        },
        {
            question: "What does CSS stand for? ",
            answers: ["Cute and Snuggly Sloths", "Crispy Spicy Salmon", "Cascading Style Sheets"],
            correctAnswer: 2
        },
        {
            question: "How do you change the font size of an element in CSS?",
            answers: ["By using the font-size property", "By using the text-size property", "By using the word-size property"],
            correctAnswer: 0
        },
        {
            question: "What is the purpose of the box-sizing property in CSS?",
            answers: ["To control how the width and height of an element are calculated", "To add a border to the element", "To change the background color of the element to pink"],
            correctAnswer: 0
        },
        {
            question: "How do you add a background color to an element in CSS?",
            answers: ["By using the color property", "By using the foreground-color property", "By using the background-color property"],
            correctAnswer: 2
        },
        {
            question: "How do you create a class in CSS?",
            answers: ["By using the #classname selector", "By using the .classname selector", "By using the @classname selector"],
            correctAnswer: 1
        },
        {
            question: "What is the purpose of JavaScript?",
            answers: ["To make coffee", "To add interactivity and dynamic effects to web pages", "To teach dogs how to code"],
            correctAnswer: 1
        },
        {
            question: "How do you declare a variable in JavaScript?",
            answers: ["By using the var keyword", "By using the const keyword", "By using the let keyword"],
            correctAnswer: 0
        },
        {
            question: "What is the difference between == and === in JavaScript?",
            answers: ["== always returns true, while === always returns false", "There is no difference, they are the same thing in JavaScript", "== compares values, while === compares values and types"],
            correctAnswer: 2
        },
        {
            question: "How do you create a function in JavaScript?",
            answers: ["By using the function keyword", "By using the method keyword", "By using the class keyword"],
            correctAnswer: 0
        },
        {
            question: "What does the if statement do in JavaScript?",
            answers: ["It makes your code more difficult to read", "It executes code if a specified condition is true", "It sends an email to your grandma"],
            correctAnswer: 1
        },
        {
            question: "What is Python? ",
            answers: ["A type of snake", "A type of fruit", "A high-level programming language"],
            correctAnswer: 2
        },
        {
            question: "How do you print something to the console in Python?",
            answers: ["By using the print() function", "By using the display() function", "By using the shout() function"],
            correctAnswer: 0
        },
        {
            question: "What is the purpose of a for loop in Python?",
            answers: ["To output a random number", "To count how many fingers you have", "To execute a block of code repeatedly for a specified number of times"],
            correctAnswer: 2
        },
        {
            question: "How do you read input from the user in Python?",
            answers: ["By using the read() function", "By using the input() function", "By using the listen() function"],
            correctAnswer: 1
        },
    ];

    // New array to store removed questions 
    let removedQuestions = [];


    // To get a random question 
    function getNextQuestion() {
        if (questions.length === 0) {
            return;
        }

        currentQuestionIndex = Math.floor(Math.random() * (questions.length - 1));
        currentQuestion = questions[currentQuestionIndex];

        // Move current question to removed questions array
        removedQuestions.push(currentQuestion);
        questions.splice(currentQuestionIndex, 1);
    }


    function displayQuestion(questionObject) {
        document.getElementById('question').innerText = questionObject.question;
        document.getElementById('button0').innerText = questionObject.answers[0];
        document.getElementById('button1').innerText = questionObject.answers[1];
        document.getElementById('button2').innerText = questionObject.answers[2];
    }


    // Start quiz click function
    startQuiz.addEventListener("click", function () {
        startQuiz.style.display = "none";
        tryAgainButton.style.display = "none";
        questionContainer.style.display = "block";
        getNextQuestion();
        displayQuestion(currentQuestion);
    });

    // Check the answer and update score
    let score = 0;
    let totalQuestionsAnswered = 0;

    function loadQuestion() {
        const question = questions[currentQuestionIndex];

        document.getElementById("question-num").textContent = currentQuestion + 1;
        document.getElementById("question").textContent = question.question;
        document.getElementById("button0").textContent = question.answers[0];
        document.getElementById("button1").textContent = question.answers[1];
        document.getElementById("button2").textContent = question.answers[2];
    }

    // Check answer function
    function checkAnswer(answer) {
        totalQuestionsAnswered++;

        if (answer === currentQuestion.correctAnswer) {
            score++;
            document.getElementsByClassName("score")[0].textContent = "Right Answers: " + score;
        } else {
            document.getElementsByClassName("score")[1].textContent = "Wrong Answers: " + (totalQuestionsAnswered - score);
        }

        if (totalQuestionsAnswered >= 5) {
            if (score === 5) {
                alert("CONGRATS! You passed the quiz. :)");
            } else {
                alert("Sorry, you did not pass. Feel free to try again!");
            }
            // Hide the questions
            questionContainer.style.display = "none";
            // Show the "Try Again" button
            tryAgainButton.style.display = "inline";
        } else {
            // avoid repeated questions
            getNextQuestion();
            displayQuestion(currentQuestion);
        }
    }
    tryAgainButton.addEventListener("click", function () {

        // Reset current question index
        currentQuestionIndex = 0;

        // Reset the quiz
        score = 0;
        totalQuestionsAnswered = 0;
        document.getElementsByClassName("score")[0].textContent = "Right Answers: " + score;
        document.getElementsByClassName("score")[1].textContent = "Wrong Answers: " + (totalQuestionsAnswered - score);
        getNextQuestion();
        displayQuestion(currentQuestion);

        // Add removed questions back in questions array
        questions = questions.concat(removedQuestions);

        // Reset the array
        removedQuestions = [];

        // Hide the "Try Again" button
        tryAgainButton.style.display = "none";

        startQuiz.style.display = "none";
        questionContainer.style.display = "block";
    });

    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', function () {

            // Store default background color of answers container
            let defaultBackgroundColor = answers[i].style.backgroundColor;

            // To Check the answer and set new background color according to answer
            if (i === currentQuestion.correctAnswer) {
                answers[i].style.backgroundColor = "green";
            } else {
                answers[i].style.backgroundColor = "red";
            }
            // To set the time before background color changes back to defaukt
            setTimeout(function () {
                answers[i].style.backgroundColor = defaultBackgroundColor;
            }, 1000);
            checkAnswer(i);


        });
    }
});