// DOM Elements
const screens = document.querySelectorAll('.screen');
const nameInput = document.getElementById('name-input');
const startBtn = document.getElementById('start-btn');
const userName = document.getElementById('user-name');
const subjectBtns = document.querySelectorAll('.subject-btn');
const selectedSubject = document.getElementById('selected-subject');
const chapterList = document.getElementById('chapter-list');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const questionNumber = document.getElementById('question-number');
const totalQuestions = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const resultName = document.getElementById('result-name');
const resultChapter = document.getElementById('result-chapter');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const correctElement = document.getElementById('correct');
const incorrectElement = document.getElementById('incorrect');
const restartBtn = document.getElementById('restart-btn');

// Quiz State
let currentScreen = 0;
let userData = {
    name: '',
    subject: '',
    chapter: ''
};
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let quizData = [];

// Initialize the application
function init() {
    // Event Listeners
    startBtn.addEventListener('click', startQuiz);
    subjectBtns.forEach(btn => {
        btn.addEventListener('click', selectSubject);
    });
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
}

// Start the quiz
function startQuiz() {
    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
        return;
    }
    
    userData.name = nameInput.value.trim();
    userName.textContent = userData.name;
    
    showScreen(1);
}

// Select a subject
function selectSubject(e) {
    userData.subject = e.target.getAttribute('data-subject');
    selectedSubject.textContent = userData.subject.charAt(0).toUpperCase() + userData.subject.slice(1);
    
    // Clear previous chapters
    chapterList.innerHTML = '';
    
    // Add chapters for the selected subject
    chapters[userData.subject].forEach(chapter => {
        const li = document.createElement('li');
        li.className = 'chapter-item';
        li.textContent = chapter.name;
        li.setAttribute('data-chapter', chapter.id);
        li.addEventListener('click', selectChapter);
        chapterList.appendChild(li);
    });
    
    showScreen(2);
}

// Select a chapter
function selectChapter(e) {
    userData.chapter = e.target.getAttribute('data-chapter');
    
    // Load quiz data based on the selected chapter
    if (typeof quizDataMap !== 'undefined' && quizDataMap[userData.chapter]) {
        quizData = quizDataMap[userData.chapter].questions;
        resultChapter.textContent = quizDataMap[userData.chapter].chapter;
    } else {
        // Default to light quiz if chapter not found
        quizData = quizDataMap.light.questions;
        resultChapter.textContent = quizDataMap.light.chapter;
    }
    
    // Initialize quiz
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData.length).fill(null);
    
    totalQuestions.textContent = quizData.length;
    totalElement.textContent = quizData.length;
    
    showQuestion();
    updateProgressBar();
    
    showScreen(3);
}

// Show a question
function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Add options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });
    
    questionNumber.textContent = currentQuestion + 1;
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'Finish' : 'Next';
}

// Select an option
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    
    // Update UI
    const options = optionsElement.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
}

// Show next question
function showNextQuestion() {
    if (userAnswers[currentQuestion] === null) {
        alert('Please select an answer');
        return;
    }
    
    // Check if answer is correct
    if (userAnswers[currentQuestion] === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        showQuestion();
        updateProgressBar();
    } else {
        showResults();
    }
}

// Show previous question
function showPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateProgressBar();
    }
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Show results
function showResults() {
    resultName.textContent = userData.name;
    scoreElement.textContent = score;
    correctElement.textContent = score;
    incorrectElement.textContent = quizData.length - score;
    
    showScreen(4);
}

// Restart the quiz
function restartQuiz() {
    userData.subject = '';
    userData.chapter = '';
    showScreen(1);
}

// Show a specific screen
function showScreen(index) {
    screens.forEach(screen => screen.classList.remove('active'));
    screens[index].classList.add('active');
    currentScreen = index;
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
