let startQuiz = document.getElementById("start-quiz");
let questionContainer = document.getElementById("question-container");
const answers = document.getElementsByClassName('answer-button');
let currentQuestionIndex = 0;
let currentQuestion = {};
let questions = [
    {
        question: "What does HTML stand for?", answers: ["A. Hyper Text Markup Language", "Hot Tamale Marmelade Lollipop", "The Hail Mighty Lobster"]
    }, 
    {
        question: "What does HTML stand for? 2", answers: ["A. Hyper Text Markup Language", "Hot Tamale Marmelade Lollipop", "The Hail Mighty Lobster"]
    }, 
    {
        question: "What does HTML stand for? 3", answers: ["A. Hyper Text Markup Language", "Hot Tamale Marmelade Lollipop", "The Hail Mighty Lobster"]
    }, 
    {
        question: "What does HTML stand for? 4", answers: ["A. Hyper Text Markup Language", "Hot Tamale Marmelade Lollipop", "The Hail Mighty Lobster"]
    }, 
    {
        question: "What does HTML stand for? 5", answers: ["A. Hyper Text Markup Language", "Hot Tamale Marmelade Lollipop", "The Hail Mighty Lobster"]
    }
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


