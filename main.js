const chatBox = document.getElementById("chat-box");
const buttonContainer = document.getElementById("button-container");

let subject = "";
let branch = "";
let chapter = "";
let currentQuestion = 0;
let questionSet = [];

function addMessage(text, sender = "bot") {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showButtons(options, callback) {
  buttonContainer.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => callback(opt);
    buttonContainer.appendChild(btn);
  });
}

function startQuiz() {
  addMessage("Ok, let us start the quiz on " + chapter + ".");
  questionSet = scienceChapters[branch][chapter];
  currentQuestion = 0;
  showNextQuestion();
}

function showNextQuestion() {
  if (currentQuestion >= questionSet.length) {
    addMessage("Quiz completed! 🎉");
    buttonContainer.innerHTML = "";
    return;
  }

  const q = questionSet[currentQuestion];
  addMessage("Q" + (currentQuestion + 1) + ". " + q.question);
  showButtons(q.options, selected => {
    addMessage(selected, "user");
    const correct = q.answer === selected ? "✅ Correct!" : "❌ Wrong! Answer: " + q.answer;
    addMessage(correct);
    currentQuestion++;
    setTimeout(showNextQuestion, 1000);
  });
}

function startChat() {
  addMessage("Hi! What can I do for you?");
  showButtons(["I want to test my IQ"], response => {
    addMessage(response, "user");
    chooseSubject();
  });
}

function chooseSubject() {
  addMessage("Choose a subject:");
  showButtons(["Science", "Math", "Social Science", "English"], s => {
    subject = s;
    addMessage(subject, "user");
    if (s === "Science") {
      chooseScienceBranch();
    } else {
      addMessage("Only Science is available now.");
    }
  });
}

function chooseScienceBranch() {
  addMessage("Select branch in Science:");
  showButtons(["Physics", "Chemistry", "Biology"], b => {
    branch = b;
    addMessage(branch, "user");
    chooseChapter();
  });
}

function chooseChapter() {
  const chapters = Object.keys(scienceChapters[branch]);
  addMessage("Choose a chapter:");
  showButtons(chapters, c => {
    chapter = c;
    addMessage(chapter, "user");
    startQuiz();
  });
}

startChat();
