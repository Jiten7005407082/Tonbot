const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

let userName = "";
let stage = "start"; // stages: start, askName, ready, chapter, lesson, quiz
let currentChapter = "";

// Lesson content (English + Manipuri) + quiz
const lessons = {
  "Parts of Speech": {
    en: "Parts of speech are the basic categories of words based on their function, such as noun, pronoun, verb, adjective, etc.",
    mm: "ꯄꯔꯠꯁ ꯑꯣꯐ ꯁꯄꯤꯆ ꯑꯣꯏꯔꯤ ꯋꯥꯔꯗ ꯑꯗꯨ ꯑꯃꯨꯛ ꯋꯥꯔꯗꯁꯤꯡ ꯑꯃꯥ ꯍꯟꯅ ꯃꯇꯝꯁꯤꯡ ꯑꯣꯏꯔꯤ.",
    quiz: [
      { q: "How many parts of speech are there in English?", a: "8" },
      { q: "Which part of speech is 'quickly'?", a: "Adverb" }
    ]
  },
  "Noun": {
    en: "A noun is the name of a person, place, thing, or idea.",
    mm: "ꯅꯧꯟ ꯑꯃ ꯄꯔꯁꯟ, ꯄ꯭ꯂꯦꯁ, ꯊꯤꯡ ꯅꯍꯥꯔꯒꯤ ꯃꯁꯤꯡ ꯑꯗꯨ ꯂꯣꯟ ꯇꯧꯕ ꯋꯥꯔꯗ ꯑꯗꯨ.",
    quiz: [
      { q: "What is the definition of a noun?", a: "Name of a person, place, thing or idea" },
      { q: "Is 'love' a noun?", a: "Yes" }
    ]
  }
  // You can add more chapters here
};

function addMessage(text, sender="bot") {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerHTML = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage(text, "user");

  if (stage === "askName") {
    userName = text;
    addMessage(`Hello ${userName}! Ok, now let us start learning English. Are you ready? <br>
    <span class="option-btn" onclick="readyAnswer('yes')">Yes</span>
    <span class="option-btn" onclick="readyAnswer('no')">No</span>`);
    stage = "ready";
  }

  userInput.value = "";
}

function readyAnswer(ans) {
  if (ans === "yes") {
    showChapters();
  } else {
    addMessage("Ok, come back when you are ready!");
  }
}

function showChapters() {
  stage = "chapter";
  let options = "";
  Object.keys(lessons).forEach(ch => {
    options += `<div class="option-btn" onclick="selectChapter('${ch}')">${ch}</div>`;
  });
  addMessage("Select a chapter: <br>" + options);
}

function selectChapter(chapter) {
  currentChapter = chapter;
  stage = "lesson";
  let lesson = lessons[chapter];
  addMessage(`<b>${chapter}</b><br><br>
  English: ${lesson.en}<br><br>
  Meitei Mayek: ${lesson.mm}<br><br>
  <button onclick="startQuiz()">Test Knowledge</button>`);
}

function startQuiz() {
  stage = "quiz";
  let lesson = lessons[currentChapter];
  lesson.quiz.forEach((item, i) => {
    addMessage(`Q${i+1}: ${item.q}<br>
      <input type="text" id="quiz-${i}" placeholder="Your answer..." />`);
  });
  addMessage(`<button onclick="submitQuiz()">Submit Quiz</button>`);
}

function submitQuiz() {
  let lesson = lessons[currentChapter];
  let score = 0;
  lesson.quiz.forEach((item, i) => {
    let ans = document.getElementById(`quiz-${i}`).value.trim();
    if (ans.toLowerCase() === item.a.toLowerCase()) {
      score++;
    }
  });
  addMessage(`You scored ${score}/${lesson.quiz.length} in ${currentChapter} quiz! 🎉`);
}

window.onload = () => {
  addMessage("Hi! I am your English Grammar ChatBot. What is your name?");
  stage = "askName";
};
