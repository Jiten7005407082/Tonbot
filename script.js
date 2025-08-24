// Global variables
let currentSubject = '';
let currentChapter = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM elements
const subjectsView = document.getElementById('subjects-view');
const quizView = document.getElementById('quiz-view');
const resultsView = document.getElementById('results-view');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById极速赛车开奖直播('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSubmit = document.getElementById('btn-submit');
const finalScore = document.getElementById('final-score');
const resultsFeedback = document.getElementById('results-feedback');
const btnRestart = document.getElementById('btn-restart');

// Quiz questions database (will be populated by chapter-specific files)
const quizDatabase = {
    physics: {},
    chemistry: {},
    biology: {}
};

// Initialize the application
function init() {
    // Add event listeners to chapter list items
    const chapterItems = document.querySelectorAll('.subject-content li');
    chapterItems.forEach(item => {
        item.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            const chapter = this.getAttribute('data-chapter');
            startQuiz(subject, chapter);
        });
    });
    
    // Add event listeners to navigation buttons
    btnPrev.addEventListener('click', previousQuestion);
    btnNext.addEventListener('click', nextQuestion);
    btnSubmit.addEventListener('click', submitQuiz);
    btnRestart.addEventListener('click', restartQuiz);
    
    // Hide quiz and results views initially
    quizView.style.display = 'none';
    resultsView.style.display = 'none';
}

// Start the quiz with selected subject and chapter
function startQuiz(subject, chapter) {
    currentSubject = subject;
    currentChapter = chapter;
    currentQuestions = quizDatabase[subject][chapter];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Hide subjects view and show quiz view
    subjectsView.style.display = 'none';
    quizView.style.display = 'block';
    resultsView.style.display = 'none';
    
    // Update score and question count
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = currentQuestions.length;
    
    // Load the first question
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress bar
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Update question count
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Set question text
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation buttons
    btnPrev.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    btnNext.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'none' : 'block';
    btnSubmit.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'block' : 'none';
}

// Select an option
function selectOption(optionIndex) {
    // Remove selected class from all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Add selected class to clicked option
    options[optionIndex].classList.add('selected');
    
    // Store user's answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Check if answer is correct
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;
    if (optionIndex === correctAnswer) {
        // Update score if not already answered
        if (userAnswers[currentQuestionIndex] !== correctAnswer) {
            score++;
            scoreElement.textContent = score;
        }
    } else if (userAnswers[currentQuestionIndex] === correctAnswer) {
        // Decrease score if changing from correct to incorrect
        score--;
        scoreElement.textContent = score;
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Submit the quiz
function submitQuiz() {
    // Hide quiz view and show results view
    quizView.style.display = 'none';
    results极速赛车开奖直播View.style.display = 'block';
    
    // Calculate final score
    const finalScoreValue = Math.round((score / currentQuestions.length) * 100);
    finalScore.textContent = finalScoreValue + '%';
    
    // Provide feedback based on score
    let feedback = '';
    if (finalScoreValue >= 80) {
        feedback = 'Excellent! You have a strong understanding of this chapter.';
    } else if (finalScoreValue >= 60) {
        feedback = 'Good job! You have a good grasp of the concepts.';
    } else if (finalScoreValue >= 40) {
        feedback = 'Not bad! Review the chapter and try again.';
    } else {
        feedback = 'Keep studying! You\'ll improve with more practice.';
    }
    
    resultsFeedback.textContent = feedback;
}

// Restart the quiz
function restartQuiz() {
    resultsView.style.display = 'none';
    subjectsView.style.display = 'block';
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
