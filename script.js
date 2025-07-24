let stage = "greeting";
let selectedSubject = "";
let selectedBranch = "";
let selectedChapter = "";
let currentQuestions = [];
let currentQIndex = 0;
let score = 0;

const chatbox = document.getElementById("chatbox");
const input = document.getElementById("input");

function addBotMessage(msg) {
  const div = document.createElement("div");
  div.className = "bot";
  div.innerHTML = msg;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function addUserMessage(msg) {
  const div = document.createElement("div");
  div.className = "user";
  div.textContent = msg;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function handleUserInput() {
  const text = input.value.trim();
  if (!text) return;

  addUserMessage(text);
  input.value = "";

  if (stage === "greeting") {
    if (/iq/i.test(text)) {
      stage = "subject";
      showOptions(["Science", "Math", "Social Science", "English"]);
      addBotMessage("Ok! In which subject do you want to test your IQ?");
    } else {
      addBotMessage("I can help you test your IQ. Say 'I want to test my IQ'.");
    }
  }
}

function showOptions(options) {
  options.forEach((opt) => {
    const btn = document.createElement("div");
    btn.className = "button-option";
    btn.textContent = opt;
    btn.onclick = () => handleOptionClick(opt);
    chatbox.appendChild(btn);
  });
  chatbox.scrollTop = chatbox.scrollHeight;
}

function handleOptionClick(option) {
  addUserMessage(option);

  if (stage === "subject") {
    selectedSubject = option;
    if (option === "Science") {
      stage = "branch";
      addBotMessage("Choose a branch:");
      showOptions(["Physics", "Chemistry", "Biology"]);
    } else {
      stage = "chapter";
      addBotMessage(`Choose a chapter from ${selectedSubject}:`);
      showOptions(Object.keys(questionsDB[selectedSubject] || {}));
    }
  } else if (stage === "branch") {
    selectedBranch = option;
    stage = "chapter";
    addBotMessage(`Choose a chapter from ${selectedBranch}:`);
    showOptions(Object.keys(questionsDB.Science[selectedBranch] || {}));
  } else if (stage === "chapter") {
    selectedChapter = option;
    addBotMessage("OK, let us start the quiz!");
    stage = "quiz";
    if (selectedSubject === "Science") {
      currentQuestions = questionsDB.Science[selectedBranch][selectedChapter] || [];
    } else {
      currentQuestions = questionsDB[selectedSubject][selectedChapter] || [];
    }
    currentQIndex = 0;
    score = 0;
    askQuestion();
  } else if (stage === "quiz") {
    const correct = currentQuestions[currentQIndex - 1].answer;
    if (option === correct) score++;
    askQuestion();
  }
}

function askQuestion() {
  if (currentQIndex >= currentQuestions.length || currentQIndex >= 3) {
    addBotMessage(`Quiz completed! Your score is ${score}/3.`);
    stage = "greeting";
    return;
  }

  const q = currentQuestions[currentQIndex];
  currentQIndex++;
  addBotMessage(`Q${currentQIndex}: ${q.q}`);
  showOptions(q.options);
}
