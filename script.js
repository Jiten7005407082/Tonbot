let quizData = {};
let currentChapter = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        quizData = await response.json();
        console.log("✅ Questions loaded:", quizData);
    } catch (error) {
        console.error("❌ Error loading questions:", error);
    }
}

loadQuestions();
