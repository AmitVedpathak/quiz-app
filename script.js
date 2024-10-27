const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c",
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Mark Twain",
        b: "William Shakespeare",
        c: "Charles Dickens",
        d: "Leo Tolstoy",
        correct: "b",
    },
    {
        question: "What is 2 + 2?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b",
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c",
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Ag",
        b: "Au",
        c: "Pb",
        d: "Fe",
        correct: "b",
    },
    {
        question: "What is the square root of 64?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "What is the capital of Japan?",
        a: "Tokyo",
        b: "Seoul",
        c: "Beijing",
        d: "Bangkok",
        correct: "a",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent Van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Claude Monet",
        correct: "c",
    },
    {
        question: "Which element has the atomic number 1?",
        a: "Oxygen",
        b: "Hydrogen",
        c: "Carbon",
        d: "Nitrogen",
        correct: "b",
    },
    {
        question: "What is the fastest land animal?",
        a: "Cheetah",
        b: "Lion",
        c: "Tiger",
        d: "Gazelle",
        correct: "a",
    },
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    const currentQuizData = quizData[currentQuiz];
    const scoreDisplay = document.getElementById("score");
    const nextButton = document.getElementById("next");
    const submitButton = document.getElementById("submit");
    const prevButton = document.getElementById("prev");

    // Clear previous options
    quizContainer.innerHTML = '';

    quizContainer.innerHTML = `
        <div class="question">Question ${currentQuiz + 1}: ${currentQuizData.question}</div>
        <div class="options">
            <div class="option" onclick="selectOption('a')">${currentQuizData.a}</div>
            <div class="option" onclick="selectOption('b')">${currentQuizData.b}</div>
            <div class="option" onclick="selectOption('c')">${currentQuizData.c}</div>
            <div class="option" onclick="selectOption('d')">${currentQuizData.d}</div>
        </div>
    `;

    scoreDisplay.innerText = `Score: ${score}`;

    // Show/hide navigation buttons
    prevButton.classList.toggle('hidden', currentQuiz === 0);
    nextButton.classList.toggle('hidden', currentQuiz === quizData.length - 1);
    submitButton.classList.toggle('hidden', currentQuiz < quizData.length - 1);
}

function selectOption(selected) {
    const currentQuizData = quizData[currentQuiz];
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        if (option.innerText === currentQuizData[currentQuizData.correct]) {
            option.classList.add('correct');
        } else {
            option.classList.add('wrong');
        }
    });

    if (selected === currentQuizData.correct) {
        score += 10; // Each question is worth 10 points
    }

    document.getElementById("next").disabled = false; // Enable next button after selection
}

document.getElementById("next").onclick = () => {
    currentQuiz++;
    loadQuiz();
};

document.getElementById("prev").onclick = () => {
    currentQuiz--;
    loadQuiz();
};

document.getElementById("submit").onclick = showScore;
document.getElementById("restart").onclick = restartQuiz;

function showScore() {
    const quizContainer = document.getElementById("quiz");
    const finalScore = document.getElementById("finalScore");
    const result = document.querySelector('.result');

    quizContainer.innerHTML = '';
    finalScore.innerText = `You scored ${score} out of ${quizData.length * 10}`;
    result.classList.remove('hidden');
}

function restartQuiz() {
    currentQuiz = 0;
    score = 0;
    document.querySelector('.result').classList.add('hidden');
    loadQuiz();
}

// Load the first quiz question
loadQuiz();
