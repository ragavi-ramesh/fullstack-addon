var quizQuestion1 = {
    question: "What is the capital of India?",
    options: ["London", "Paris", "Berlin", "New Delhi"],
    correctAnswerIndex: 1
};

var quizQuestion2 = {
    question: "Where was India’s first national Museum opened?",
    options:["Delhi", "Hyderabad", "Rajasthan", "Mumbai"],
    correctAnswerIndex: 1
};

function showQuizQuestion(questionObj) {
    console.log(questionObj.question);
    for (var i = 0; i < questionObj.options.length; i++) {
        console.log((i + 1) + ") " + questionObj.options[i]);
    }
    console.log("-----------------------");
}

showQuizQuestion(quizQuestion1);
showQuizQuestion(quizQuestion2);
