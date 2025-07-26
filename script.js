document.addEventListener("DOMContentLoaded", function () {

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

let userName = "";
let askedName = true;
let waitingForSubject = false;
let waitingForSubClass = false;
let waitingForChapter = false;
let inQuiz = false;
let waitingForReplay = false;

let selectedSubject = "";
let selectedSubClass = "";
let selectedChapter = "";

let quizData = {};    // ✅ will hold questions from questions.json
let currentQuestionIndex = 0;
let score = 0;

// ✅ Load questions.json on startup
fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    quizData = data;
    console.log("✅ Questions loaded", quizData);
  })
  .catch(error => console.error("❌ Error loading questions.json", error));

// ✅ Chapter list remains in JS
const chapters = {
  "Science": {
    "Physics": ["Light – Reflection & Refraction", "Human Eye & Colourful World", "Electricity", "Magnetic Effects of Electric Current", "Source of Energy"],
    "Chemistry": ["Chemical Reactions & Equations", "Acids, Bases & Salts", "Metals & Non‑Metals", "Carbon & Its Compounds", "Periodic Classification of Elements"],
    "Biology": ["Life Processes", "Control & Coordination", "How Do Organisms Reproduce?", "Heredity & Evolution", "Our Environment"]
  },
  "Math": {
    "": ["Real Number", "Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry", "Circles", "Constructions", "Areas Related to Circles", "Surface Area & Volume", "Statistics", "Probability"]
  },
  "Social Science": {
    "History": ["Partition of Bengal & Swadeshi Movement", "Rise of Gandhi & Freedom Movement", "Anti‑British Uprisings in Assam", "National Awakening in Assam", "Cultural Heritage of India & North‑East"],
    "Geography": ["Economic Geography", "Environment & Environmental Problems", "World Geography", "Geography of Assam"],
    "Civics": ["Indian Democracy & Rights/Duties", "International Organisations"],
    "Economics": ["Money & Banking", "Economic Development"]
  },
  "English": {
    "Grammar": ["Determiners", "Tenses", "Voice & Narration", "Verb & Prepositions", "Vocabulary & Sentence Correction"],
    "Literature": ["Prose", "Poetry", "Supplementary Reader"]
  }
};

function addMessage(msg, sender) {
  const div = document.createElement('div');
  div.classList.add(sender === 'bot' ? 'bot-msg' : 'user-msg');
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addOption(text) {
  const btn = document.createElement('div');
  btn.classList.add('bot-option');
  btn.textContent = text;
  btn.addEventListener('click', () => handleOptionClick(text));
  chatBox.appendChild(btn);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserInput();
});

function handleUserInput() {
  const text = userInput.value.trim();
  if (text === "") return;
  
  addMessage(text, 'user');
  userInput.value = "";

  if (askedName) {
    userName = text;
    addMessage(`Nice to meet you, ${userName}! What can I do for you today?`, 'bot');
    askedName = false;
  } else if (waitingForSubject || waitingForSubClass || waitingForChapter || inQuiz || waitingForReplay) {
    addMessage(`Please click one of the options above, ${userName}.`, 'bot');
  } else {
    botReply(text);
  }
}

function botReply(text) {
  const lower = text.toLowerCase();

  if (lower.includes("iq")) {
    askSubject();
  } else {
    addMessage(`I’m here to chat or help you test your IQ, ${userName}. Just type: “I want to test my IQ.”`, 'bot');
  }
}

function handleOptionClick(option) {
  addMessage(option, 'user');

  if (waitingForSubject) {
    selectedSubject = option;
    waitingForSubject = false;

    if (option === "Science") {
      addMessage("Cool! Which science branch do you want to test?", 'bot');
      ["Physics", "Chemistry", "Biology"].forEach(addOption);
      waitingForSubClass = true;

    } else if (option === "Social Science") {
      addMessage("Great! Which social science branch do you want to test?", 'bot');
      ["History", "Geography", "Civics", "Economics"].forEach(addOption);
      waitingForSubClass = true;

    } else if (option === "English") {
      addMessage("Great! Which part of English do you want to test?", 'bot');
      ["Grammar", "Literature"].forEach(addOption);
      waitingForSubClass = true;

    } else {
      selectedSubClass = "";
      waitingForChapter = true;
      addMessage(`Awesome! Choose a chapter in Math, ${userName}:`, 'bot');
      chapters["Math"][""].forEach(addOption);
    }

  } else if (waitingForSubClass) {
    selectedSubClass = option;
    waitingForSubClass = false;
    waitingForChapter = true;
    addMessage(`Perfect! Choose a chapter in ${option}, ${userName}:`, 'bot');
    chapters[selectedSubject][selectedSubClass].forEach(addOption);

  } else if (waitingForChapter) {
    waitingForChapter = false;
    selectedChapter = option;
    addMessage(`Great! Let's start your IQ test on "${option}", ${userName}!`, 'bot');
    startQuiz(option);

  } else if (inQuiz) {
    checkAnswer(option);

  } else if (waitingForReplay) {
    waitingForReplay = false;
    if (option === "Yes") {
      addMessage("Awesome! Let's start a new quiz.", 'bot');
      askSubject();
    } else {
      addMessage("Thanks for playing! 👋 Have a great day.", 'bot');
    }
  }
}

function askSubject() {
  addMessage(`Great! In which subject do you want to test your IQ?`, 'bot');
  ["Science", "Math", "Social Science", "English"].forEach(addOption);
  waitingForSubject = true;
}

function startQuiz(chapter) {
  inQuiz = true;
  score = 0;
  currentQuestionIndex = 0;
  askQuestion();
}

function askQuestion() {
  const questionSet = quizData[selectedChapter];   // ✅ fetch from JSON
  
  if (!questionSet) {
    addMessage(`Sorry, quiz questions for "${selectedChapter}" are not ready yet.`, 'bot');
    inQuiz = false;
    return;
  }

  if (currentQuestionIndex < questionSet.length) {
    const q = questionSet[currentQuestionIndex];
    addMessage(`Q${currentQuestionIndex+1}: ${q.q}`, 'bot');
    q.options.forEach(addOption);
  } else {
    addMessage(`🎉 Quiz finished! You scored ${score}/${questionSet.length}, ${userName}.`, 'bot');
    inQuiz = false;
    addMessage("Would you like to take another quiz?", 'bot');
    addOption("Yes");
    addOption("No");
    waitingForReplay = true;
  }
}

function checkAnswer(selectedOption) {
  const q = quizData[selectedChapter][currentQuestionIndex];

  if (selectedOption === q.answer) {
    addMessage("✅ Correct!", 'bot');
    score++;
  } else {
    addMessage(`❌ Wrong! Correct answer: ${q.answer}`, 'bot');
  }

  currentQuestionIndex++;
  askQuestion();
}

}); // DOMContentLoaded end
