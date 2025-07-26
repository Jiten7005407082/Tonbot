const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

let userName = "";
let askedName = true;
let waitingForSubject = false;
let waitingForSubClass = false;
let waitingForChapter = false;

let selectedSubject = "";
let selectedSubClass = "";

// ✅ Chapters organized by subject & subclass
const chapters = {
  "Science": {
    "Physics": ["Motion", "Force", "Energy"],
    "Chemistry": ["Atoms", "Reactions", "Periodic Table"],
    "Biology": ["Cells", "Plants", "Human Body"]
  },
  "Math": {
    "": ["Algebra", "Geometry", "Trigonometry"]
  },
  "Social Science": {
    "Civics": ["Democracy", "Rights & Duties", "Government"],
    "History": ["Ancient India", "Medieval India", "Modern India"],
    "Geography": ["Earth Structure", "Climate", "Resources"]
  },
  "English": {
    "Grammar": ["Nouns", "Verbs", "Tenses"],
    "Literature": ["Poetry", "Stories", "Drama"]
  }
};

// ✅ Add message bubble
function addMessage(msg, sender) {
  const div = document.createElement('div');
  div.classList.add(sender === 'bot' ? 'bot-msg' : 'user-msg');
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ Add clickable option buttons
function addOption(text) {
  const btn = document.createElement('div');
  btn.classList.add('bot-option');
  btn.textContent = text;
  btn.addEventListener('click', () => handleOptionClick(text));
  chatBox.appendChild(btn);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ Event listeners
sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserInput();
});

// ✅ Handle user typing
function handleUserInput() {
  const text = userInput.value.trim();
  if (text === "") return;
  
  addMessage(text, 'user');
  userInput.value = "";

  if (askedName) {
    userName = text;
    addMessage(`Nice to meet you, ${userName}! What can I do for you today?`, 'bot');
    askedName = false;
  } else if (waitingForSubject || waitingForSubClass || waitingForChapter) {
    addMessage(`Please click one of the options above, ${userName}.`, 'bot');
  } else {
    botReply(text);
  }
}

// ✅ Bot replies based on keywords
function botReply(text) {
  const lower = text.toLowerCase();

  if (lower.includes("iq")) {
    addMessage(`Great! In which subject do you want to test your IQ?`, 'bot');
    ["Science", "Math", "Social Science", "English"].forEach(addOption);
    waitingForSubject = true;
  } else {
    addMessage(`I’m here to chat or help you test your IQ, ${userName}. Just type: “I want to test my IQ.”`, 'bot');
  }
}

// ✅ Handle clicking on bot options
function handleOptionClick(option) {
  addMessage(option, 'user');

  // --- SUBJECT SELECTED ---
  if (waitingForSubject) {
    selectedSubject = option;
    waitingForSubject = false;

    if (option === "Science") {
      addMessage("Cool! Which science branch do you want to test?", 'bot');
      ["Physics", "Chemistry", "Biology"].forEach(addOption);
      waitingForSubClass = true;

    } else if (option === "Social Science") {
      addMessage("Great! Which social science branch do you want to test?", 'bot');
      ["Civics", "History", "Geography"].forEach(addOption);
      waitingForSubClass = true;

    } else if (option === "English") {
      addMessage("Great! Which part of English do you want to test?", 'bot');
      ["Grammar", "Literature"].forEach(addOption);
      waitingForSubClass = true;

    } else {
      // Math has no subclass
      selectedSubClass = "";
      waitingForChapter = true;
      addMessage(`Awesome! Choose a chapter in Math, ${userName}:`, 'bot');
      chapters["Math"][""].forEach(addOption);
    }

  // --- SUBCLASS SELECTED ---
  } else if (waitingForSubClass) {
    selectedSubClass = option;
    waitingForSubClass = false;

    waitingForChapter = true;
    addMessage(`Perfect! Choose a chapter in ${option}, ${userName}:`, 'bot');
    chapters[selectedSubject][selectedSubClass].forEach(addOption);

  // --- CHAPTER SELECTED ---
  } else if (waitingForChapter) {
    waitingForChapter = false;
    addMessage(`Great! Let's start your IQ test on "${option}" in ${selectedSubClass || selectedSubject}, ${userName}!`, 'bot');
    
    // 🔜 Future: Trigger quiz questions for this chapter here
  }
}
