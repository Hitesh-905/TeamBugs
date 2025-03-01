const quizData = [
    {
        question: "What is primary function of mitochondria in a cell ?",
        options: {
            a: "Protein synthesis",
            b: "Cell division",
            c: "Energy production",
            d: "Waste management"
        },
        correct: "c"
    },
    {
        question: "What is chemical formula for water ?",
        options: {
            a: "H20",
            b: "H30",
            c: "O2H",
            d: "2HO"
        },
        correct: "a"
    },
    {
        question: "What is the follwing element is a noble gas ?",
        options: {
            a: "Oxygen",
            b: "Carbon",
            c: "Neon",
            d: "Nitrogen"
        },
        correct: "c"
    },
    {
        question: "What is unit of measurnment for force ?",
        options: {
            a: "Newton",
            b: "Joules",
            c: "Watts",
            d: "Pascal"
        },
        correct: "a"
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        ${Object.keys(currentQuestion.options).map(option => `
            <label>
                <input type="radio" name="answer" value="${option}"> ${currentQuestion.options[option]}
            </label>
        `).join('')}
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return null;
}

submitButton.addEventListener('click', () => {
    const answer = getSelectedAnswer();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            result.innerHTML = `You scored ${score} out of ${quizData.length}`;
            quiz.style.display = 'none';
            submitButton.style.display = 'none';
        }
    } else {
        alert("Please select an answer before submitting.");
    }
});


loadQuestion();
