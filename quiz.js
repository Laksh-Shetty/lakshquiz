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
const nextButton = document.querySelector('.next');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.querySelectorAll('.quiz').forEach(q => q.style.display = 'none');
    const activeQuiz = document.querySelectorAll('.quiz')[currentQuestionIndex];
    activeQuiz.style.display = 'block';
    questionElement.textContent = currentQuestion.question;
    activeQuiz.querySelectorAll('.option').forEach((btn, i) => {
        btn.textContent = currentQuestion.options[i];
        btn.style.backgroundColor = ''; 
        btn.disabled = false;
        btn.addEventListener('click', handleAnswer);
    });
}

function handleAnswer(event) {
    let selected = event.target;
    let correctAnswer = quizData[currentQuestionIndex].correct;
    let optionButtons = document.querySelectorAll('.quiz')[currentQuestionIndex].querySelectorAll('.option');
    
    if (selected.textContent === correctAnswer) {
        selected.style.backgroundColor = 'green';
    } else {
        selected.style.backgroundColor = 'red';
        optionButtons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.style.backgroundColor = 'green';
            }
        });
    }
    optionButtons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
    }
}

nextButton.addEventListener('click', nextQuestion);
loadQuestion();
