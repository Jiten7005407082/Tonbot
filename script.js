// ✅ All quiz data embedded here (no fetch needed)
const questionsData = {
  "Light – Reflection & Refraction": [
    { "q": "What is the speed of light in air approximately?", "options": ["3 × 10⁸ m/s", "1.5 × 10⁸ m/s", "2 × 10⁸ m/s", "3 × 10⁶ m/s"], "answer": "3 × 10⁸ m/s" },
    { "q": "The angle between the incident ray and the normal is called?", "options": ["Angle of Refraction", "Angle of Incidence", "Angle of Deviation", "Angle of Prism"], "answer": "Angle of Incidence" },
    // ✅ (remaining Light & Chemical Reactions questions go here – same as before)
  ],
  "Chemical Reactions & Equations": [
    { "q": "Which of the following is NOT a type of chemical reaction?", "options": ["Combination", "Decomposition", "Reflection", "Displacement"], "answer": "Reflection" },
    { "q": "What type of reaction is: 2Mg + O₂ → 2MgO?", "options": ["Decomposition", "Combination", "Displacement", "Double displacement"], "answer": "Combination" },
    // ✅ (more chemistry questions here – keep the full set you pasted earlier)
  ]
};

let userName = "";
let score = 0;
let currentSubject = "";
let currentChapter = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let waitingFor = "name";

function startChat() {
  addBotMessage("Hi! I'm your quiz bot 🤖. What's your name?");
}

// ✅ Adds a normal message
function addBotMessage(text) {
  const chatBox = document.getElementById("chat");
  chatBox.innerHTML += `<div class='bot'>${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ Adds clickable buttons
function addBotButtons(options, callbackType) {
  const chatBox = document.getElementById("chat");
  const btnContainer = document.createElement("div");
  btnContainer.className = "button-group";

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => handleButtonClick(opt, callbackType);
    btnContainer.appendChild(btn);
  });

  chatBox.appendChild(btnContainer);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMessage(text) {
  const chatBox = document.getElementById("chat");
  chatBox.innerHTML += `<div class='user'>${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;
  handleButtonClick(text, waitingFor);
}

function handleButtonClick(choice, type) {
  addUserMessage(choice);

  if (waitingFor === "name") {
    userName = choice;
    addBotMessage(`Nice to meet you, ${userName}! Which subject do you want to test?`);
    addBotButtons(["Science", "Math", "Social Science", "English"], "subject");
    waitingFor = "subject";
    return;
  }

  if (type === "subject") {
    currentSubject = choice;
    addBotMessage(`Great choice! Which chapter do you want to try?`);
    addBotButtons(Object.keys(questionsData), "chapter");
    waitingFor = "chapter";
    return;
  }

  if (type === "chapter") {
    currentChapter = choice;
    if (!questionsData[currentChapter]) {
      addBotMessage("❌ Sorry, that chapter isn’t in my database.");
      addBotButtons(Object.keys(questionsData), "chapter");
      return;
    }
    currentQuestions = questionsData[currentChapter];
    currentQuestionIndex = 0;
    score = 0;
    addBotMessage(`Starting quiz on <b>${currentChapter}</b>! 🎯`);
    askQuestion();
    return;
  }

  if (type === "answer") {
    checkAnswer(choice);
  }

  if (type === "retry") {
    if (choice === "Yes") {
      addBotMessage("Which subject do you want to test?");
      addBotButtons(["Science", "Math", "Social Science", "English"], "subject");
      waitingFor = "subject";
    } else {
      addBotMessage("Thanks for playing! 👋");
    }
  }
}

function askQuestion() {
  if (currentQuestionIndex < currentQuestions.length) {
    const q = currentQuestions[currentQuestionIndex];
    addBotMessage(`Q${currentQuestionIndex + 1}: ${q.q}`);
    addBotButtons(q.options, "answer");
  } else {
    endQuiz();
  }
}

function checkAnswer(userAnswer) {
  const q = currentQuestions[currentQuestionIndex];
  const correct = q.answer;

  if (userAnswer === correct) {
    score++;
    addBotMessage("✅ Correct!");
  } else {
    addBotMessage(`❌ Wrong! The correct answer was: ${q.answer}`);
  }

  currentQuestionIndex++;
  askQuestion();
}

function endQuiz() {
  addBotMessage(`🎉 Quiz finished! Your score: ${score}/${currentQuestions.length}`);
  addBotMessage("Do you want to try another quiz?");
  addBotButtons(["Yes", "No"], "retry");
}
