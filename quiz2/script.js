const questions = [
    {
        question: "What is the capital of France?",
        options: {
            A: "Berlin",
            B: "Madrid",
            C: "Paris",
            D: "Rome"
        },
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: {
            A: "Venus",
            B: "Mars",
            C: "Jupiter",
            D: "Saturn"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: {
            A: "Atlantic Ocean",
            B: "Indian Ocean",
            C: "Southern Ocean",
            D: "Pacific Ocean"
        },
        correctAnswer: "D"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    const options = document.querySelectorAll('.option');
    
    options[0].textContent = `A. ${question.options.A}`;
    options[1].textContent = `B. ${question.options.B}`;
    options[2].textContent = `C. ${question.options.C}`;
    options[3].textContent = `D. ${question.options.D}`;
    
    document.getElementById("feedback").textContent = '';
    document.getElementById("next-btn").style.display = 'none';
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedback = document.getElementById('feedback');
    
    if (answer === correctAnswer) {
        feedback.textContent = "Correct! 🎉";
        feedback.style.color = 'green';
    } else {
        feedback.textContent = "Incorrect! Try again. 😞";
        feedback.style.color = 'red';
    }
    
    document.getElementById("next-btn").style.display = 'block';  // Show the "Next Question" button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-text").textContent = "Quiz Over! 🎉";
        document.getElementById("feedback").textContent = "";
        document.querySelector(".options").style.display = 'none';
        document.getElementById("next-btn").style.display = 'none';
    }
}

loadQuestion();  // Initial question load
