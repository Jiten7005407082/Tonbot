// === Default Question Bank ===
const DEFAULT_QUESTIONS = [
  {
    id: 1,
    topic: "Parts of Speech",
    question: "Which part of speech is the word 'quickly'?",
    options: ["Noun", "Adverb", "Adjective", "Verb"],
    answer: "Adverb",
    explanation: "‘Quickly’ describes how an action is performed, so it’s an adverb."
  },
  {
    id: 2,
    topic: "Kinds of Sentences",
    question: "Identify the kind of sentence: 'Please sit down.'",
    options: ["Declarative", "Imperative", "Exclamatory", "Interrogative"],
    answer: "Imperative",
    explanation: "It expresses a command or request, so it’s imperative."
  },
  {
    id: 3,
    topic: "Transformation",
    question: "Change into passive: 'She writes a letter.'",
    options: ["A letter was written by her.", "A letter is written by her.", "A letter has been written by her.", "A letter is being written by her."],
    answer: "A letter is written by her.",
    explanation: "In present simple passive, the structure is: object + is/are + past participle."
  },
  {
    id: 4,
    topic: "Tense",
    question: "Which tense is this: 'They will be playing football.'",
    options: ["Future Continuous", "Future Perfect", "Present Continuous", "Future Simple"],
    answer: "Future Continuous",
    explanation: "‘Will be playing’ shows an action continuing in the future."
  },
  {
    id: 5,
    topic: "Voice",
    question: "Convert to active voice: 'The work was finished by John.'",
    options: ["John has finished the work.", "John finished the work.", "John is finishing the work.", "John will finish the work."],
    answer: "John finished the work.",
    explanation: "The correct active form is simple past tense."
  },
  {
    id: 6,
    topic: "Narration",
    question: "Change to indirect speech: He said, 'I am happy.'",
    options: ["He said that he was happy.", "He said that he is happy.", "He said that he had been happy.", "He said that he will be happy."],
    answer: "He said that he was happy.",
    explanation: "The reporting verb is past tense, so present simple becomes past simple."
  },
  {
    id: 7,
    topic: "Determiners",
    question: "Choose the correct determiner: 'There are ___ books on the table.'",
    options: ["much", "many", "little", "a"],
    answer: "many",
    explanation: "‘Books’ is countable plural, so we use ‘many’."
  },
  {
    id: 8,
    topic: "Parts of Speech",
    question: "Which part of speech is the word 'beauty'?",
    options: ["Verb", "Adjective", "Noun", "Adverb"],
    answer: "Noun",
    explanation: "‘Beauty’ is a thing or quality, so it’s a noun."
  },
  {
    id: 9,
    topic: "Kinds of Sentences",
    question: "Identify the sentence: 'What a beautiful day!'",
    options: ["Imperative", "Declarative", "Exclamatory", "Interrogative"],
    answer: "Exclamatory",
    explanation: "It expresses strong feeling, so it’s exclamatory."
  },
  {
    id: 10,
    topic: "Tense",
    question: "Find the tense: 'She had left before I arrived.'",
    options: ["Past Continuous", "Past Perfect", "Present Perfect", "Future Perfect"],
    answer: "Past Perfect",
    explanation: "‘Had left’ shows an action completed before another past action."
  }
];

// === App State ===
let questions = JSON.parse(localStorage.getItem("questions")) || DEFAULT_QUESTIONS;
let currentIndex = 0;
let score = 0;

// === DOM Elements ===
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const topicFilter = document.getElementById("topicFilter");
const editorModal = document.getElementById("editorModal");
const jsonEditor = document.getElementById("jsonEditor");

// === Initialize ===
function initTopics() {
  const topics = [...new Set(questions.map(q => q.topic))];
  topics.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    topicFilter.appendChild(opt);
  });
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  quizEl.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const filtered = getFilteredQuestions();
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= filtered.length) currentIndex = filtered.length - 1;

  const q = filtered[currentIndex];
  questionEl.textContent = `${currentIndex + 1}. ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(q, opt);
    optionsEl.appendChild(btn);
  });

  scoreEl.textContent = `Score: ${score} / ${filtered.length}`;
}

function checkAnswer(question, selected) {
  if (selected === question.answer) {
    alert("✅ Correct! " + question.explanation);
    score++;
  } else {
    alert("❌ Wrong! Correct: " + question.answer + "\n" + question.explanation);
  }
  currentIndex++;
  renderQuestion();
}

function getFilteredQuestions() {
  const t = topicFilter.value;
  if (t === "all") return questions;
  return questions.filter(q => q.topic === t);
}

// === Event Listeners ===
document.getElementById("startQuiz").addEventListener("click", startQuiz);
document.getElementById("prevBtn").addEventListener("click", () => { currentIndex--; renderQuestion(); });
document.getElementById("nextBtn").addEventListener("click", () => { currentIndex++; renderQuestion(); });

// Editor
document.getElementById("editQuestions").addEventListener("click", () => {
  jsonEditor.value = JSON.stringify(questions, null, 2);
  editorModal.classList.remove("hidden");
});

document.getElementById("saveQuestions").addEventListener("click", () => {
  try {
    questions = JSON.parse(jsonEditor.value);
    localStorage.setItem("questions", JSON.stringify(questions));
    editorModal.classList.add("hidden");
    alert("✅ Questions updated!");
    location.reload();
  } catch (e) {
    alert("Invalid JSON: " + e.message);
  }
});

document.getElementById("closeEditor").addEventListener("click", () => {
  editorModal.classList.add("hidden");
});

document.getElementById("downloadJson").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(questions, null, 2)], {type: "application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "questions.json";
  a.click();
  URL.revokeObjectURL(url);
});

// === Run ===
initTopics();
