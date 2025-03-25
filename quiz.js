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
const optionButtons = document.querySelectorAll('.options');
const nextButton = document.querySelector('.next');


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];


    const allQuizDivs = document.querySelectorAll('.quiz');
    allQuizDivs.forEach((quizDiv) => {
        quizDiv.style.display = 'none';
    });

  
    const currentQuizDiv = allQuizDivs[currentQuestionIndex];
    currentQuizDiv.style.display = 'block';

    questionElement.textContent = currentQuestion.question;
    
   
    const currentButtons = currentQuizDiv.querySelectorAll('.options');
    currentButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.style.backgroundColor = ''; 
        button.disabled = false; 
    });
}

function handleAnswerSelection(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        event.target.style.backgroundColor = 'green';
    } else {
        event.target.style.backgroundColor = 'red';
        
        optionButtons.forEach((button) => {
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = 'green';
            }
        });
    }

   
    optionButtons.forEach(button => button.disabled = true);
}


function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
        
    }
}


optionButtons.forEach(button => {
    button.addEventListener('click', handleAnswerSelection);
});


nextButton.addEventListener('click', nextQuestion);


loadQuestion();
