const chatContainer = document.getElementById("chatContainer");
let subject = "";
let stream = "";
let chapter = "";
let currentQuestions = [];
let questionIndex = 0;

function showMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  chatContainer.appendChild(msg);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showOptions(options, callback) {
  const container = document.createElement("div");
  container.className = "options";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      showMessage(opt, "user");
      container.remove();
      callback(opt);
    };
    container.appendChild(btn);
  });
  chatContainer.appendChild(container);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function startChat() {
  showMessage("What can I do for you?");
  showOptions(["I want to test my IQ"], handleIntent);
}

function handleIntent(intent) {
  if (intent === "I want to test my IQ") {
    showMessage("Okay, in which subject do you want to test?");
    showOptions(["Science", "Math", "Social Science", "English"], handleSubject);
  }
}

function handleSubject(selectedSubject) {
  subject = selectedSubject;
  if (subject === "Science") {
    showMessage("Choose the stream:");
    showOptions(["Physics", "Chemistry", "Biology"], handleStream);
  } else {
    showMessage("Sorry, only Science is supported currently.");
  }
}

function handleStream(selectedStream) {
  stream = selectedStream;
  const chaps = Object.keys(questions[subject][stream]);
  showMessage(`Choose a chapter in ${stream}:`);
  showOptions(chaps, handleChapter);
}

function handleChapter(selectedChapter) {
  chapter = selectedChapter;
  currentQuestions = questions[subject][stream][chapter];
  questionIndex = 0;
  showMessage("Okay! Let us start the quiz.");
  setTimeout(() => showQuestion(), 1000);
}

function showQuestion() {
  if (questionIndex < currentQuestions.length) {
    const q = currentQuestions[questionIndex];
    showMessage(q.question);
    showOptions(q.options, selected => {
      if (selected === q.answer) {
        showMessage("✅ Correct!");
      } else {
        showMessage(`❌ Incorrect. Correct answer is: ${q.answer}`);
      }
      questionIndex++;
      setTimeout(showQuestion, 1000);
    });
  } else {
    showMessage("🎉 Quiz completed! Well done.");
  }
}

startChat();
