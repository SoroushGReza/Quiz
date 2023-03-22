let startQuiz = document.getElementById("startQuiz");
let question = document.getElementById("question");

startQuiz.addEventListener("click", function() {
    startQuiz.style.display = "none"; 
    question.style.display = "block";
});