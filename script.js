const chat = document.getElementById('chat');
const options = document.getElementById('options');

let currentSubject = '';
let currentChapter = '';
let currentQuestion = 0;
let quizData = [];

const syllabus = {
  Science: ["Chemical Reactions", "Life Processes", "Light", "Electricity", "Our Environment"],
  Math: ["Real Numbers", "Polynomials", "Triangles", "Statistics", "Probability"],
  "Social Science": ["Nationalism in India", "Agriculture", "Resources & Development", "Democracy", "Consumer Rights"],
  English: ["Prose", "Poetry", "Grammar", "Reading", "Writing"]
};

const questionsDB = {
  Science: {
    "Life Processes": [
      {
        q: "Which process in plants uses sunlight to make food?",
        options: ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
        answer: "Photosynthesis"
      },
      {
        q: "The basic unit of life is:",
        options: ["Heart", "Neuron", "Cell", "Blood"],
        answer: "Cell"
      },
      {
        q: "Human lungs are part of which system?",
        options: ["Circulatory", "Respiratory", "Digestive", "Excretory"],
        answer: "Respiratory"
      },
      {
        q: "Which organ filters blood in humans?",
        options: ["Lungs", "Heart", "Kidneys", "Liver"],
        answer: "Kidneys"
      },
      {
        q: "Which is not a mode of nutrition in plants?",
        options: ["Autotrophic", "Heterotrophic", "Parasitic", "Carnivorous"],
        answer: "Carnivorous"
      }
    ]
  }
};

function addMessage(text, sender = 'bot') {
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;

  if (sender === 'bot') speak(text);
}

function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  synth.speak(utter);
}

function clearOptions() {
  options.innerHTML = '';
}

function showOptions(optionList, callback) {
  clearOptions();
  optionList.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => callback(opt);
    options.appendChild(btn);
  });
}

// Initialize chat
function startBot() {
  addMessage("What can I do for you?");
  showOptions(["I want to test my IQ"], handleMainOption);
}

function handleMainOption(choice) {
  addMessage(choice, 'user');
  addMessage("Okay, in which subject do you want to test?");
  showOptions(Object.keys(syllabus), handleSubjectSelect);
}

function handleSubjectSelect(subject) {
  addMessage(subject, 'user');
  currentSubject = subject;
  addMessage(`Choose a chapter in ${subject}:`);
  showOptions(syllabus[subject], handleChapterSelect);
}

function handleChapterSelect(chapter) {
  addMessage(chapter, 'user');
  currentChapter = chapter;
  addMessage("Okay, let us start the quiz.");
  quizData = questionsDB[currentSubject]?.[currentChapter] || [];
  currentQuestion = 0;
  askQuestion();
}

function askQuestion() {
  if (currentQuestion < quizData.length) {
    const qObj = quizData[currentQuestion];
    addMessage(`Q${currentQuestion + 1}: ${qObj.q}`);
    showOptions(qObj.options, handleAnswer);
  } else {
    addMessage("Quiz completed. Great job!");
    clearOptions();
  }
}

function handleAnswer(selected) {
  addMessage(selected, 'user');
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    addMessage("✅ Correct!");
  } else {
    addMessage(`❌ Wrong! Correct answer: ${correct}`);
  }
  currentQuestion++;
  setTimeout(askQuestion, 1000);
}

// Start the bot
startBot();
