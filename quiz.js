const quizData = [
    {
        question: "Who is the strongest human?",
        options: ["Goku", "Krillin", "Vegeta", "Piccolo"],
        correct: "Krillin"
    },
    {
        question: "Who loves aura farming?",
        options: ["Goku", "Gohan", "Vegeta", "Piccolo"],
        correct: "Piccolo"
    },
    {
        question: 'Who said the legendary line "I wanna be a Super Saiyan"?',
        options: ["Goku", "Vegeta", "Cell", "Frieza"],
        correct: "Vegeta"
    }
];

let currentQuestionIndex = 0;
let totalQuestions = quizData.length;

const questionElement = document.querySelector('.question');
const optionButtons = document.querySelectorAll('.option');
const nextButton = document.querySelector('.next');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.querySelectorAll('.quiz').forEach(q => q.style.display = 'none');
    document.querySelectorAll('.quiz')[currentQuestionIndex].style.display = 'block';
    questionElement.textContent = currentQuestion.question;
    document.querySelectorAll('.quiz')[currentQuestionIndex].querySelectorAll('.option').forEach((btn, i) => {
        btn.textContent = currentQuestion.options[i];
        btn.style.backgroundColor = '';
        btn.disabled = false;
    });
}

function handleAnswer(event) {
    let selected = event.target.textContent;
    let correct = quizData[currentQuestionIndex].correct;
    selected === correct ? event.target.style.backgroundColor = 'green' : event.target.style.backgroundColor = 'red';
    document.querySelectorAll('.option').forEach(btn => {
        if (btn.textContent === correct) btn.style.backgroundColor = 'green';
        btn.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    currentQuestionIndex < totalQuestions ? loadQuestion() : alert('Quiz completed!');
}

optionButtons.forEach(btn => btn.addEventListener('click', handleAnswer));
nextButton.addEventListener('click', nextQuestion);
loadQuestion();
