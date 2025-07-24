const chat = document.getElementById('chat');
const options = document.getElementById('options');

let currentSubject = '';
let currentChapter = '';
let currentQuestion = 0;
let quizData = [];

const syllabus = {
  Science: ["Life Processes", "Electricity", "Our Environment"],
  Math: ["Quadratic Equations", "Mensuration", "Statistics"],
  "Social Science": ["Nationalism in India", "Agriculture", "Political Parties"],
  English: ["A Letter to God", "Diary of Anne Frank", "Hundred Dresses"]
};

const questionsDB = {
  Science: {
    "Life Processes": [
      { q: "Which organ filters blood?", options: ["Liver","Kidney","Heart","Lungs"], answer: "Kidney" },
      { q: "Photosynthesis occurs in?", options: ["Stem","Leaves","Roots","Fruit"], answer: "Leaves" },
      { q: "Amoeba reproduces by?", options: ["Fission","Budding","Fusion","Cloning"], answer: "Fission" }
    ],
    "Electricity": [
      { q: "Unit of current is?", options: ["Volt","Ohm","Ampere","Watt"], answer: "Ampere" },
      { q: "Circuit that allows multiple paths is called?", options: ["Series","Parallel","Open","Short"], answer: "Parallel" },
      { q: "Which metal is used in wires due to conductivity?", options: ["Copper","Iron","Lead","Aluminium"], answer: "Copper" }
    ],
    "Our Environment": [
      { q: "The layer protecting Earth from UV radiation is?", options: ["Troposphere","Stratosphere","Mesosphere","Thermosphere"], answer: "Stratosphere" },
      { q: "Which is a renewable resource?", options: ["Coal","Petroleum","Solar energy","Natural gas"], answer: "Solar energy" },
      { q: "Biodegradable means?", options: ["Non-polluting","Breakable by organisms","Non-renewable","Synthetic"], answer: "Breakable by organisms" }
    ]
  },
  Math: {
    "Quadratic Equations": [
      { q: "Solve: x² - 5x + 6 = 0, root x= ?", options: ["2 and 3","-2 and -3","1 and 6","3 and 6"], answer: "2 and 3" },
      { q: "Discriminant Δ = b² – 4ac, Δ < 0 implies?", options: ["Two real roots","No real roots","One root","Infinite roots"], answer: "No real roots" },
      { q: "Equation 2x² = 8, x = ?", options: ["±2","±4","±√2","±$\u221A4"], answer: "±2" }
    ],
    Mensuration: [
      { q: "Area of a circle formula?", options: ["2πr","πr²","πd","π/2 r²"], answer: "πr²" },
      { q: "Volume of cube side a is?", options: ["a²","a³","6a²","3a"], answer: "a³" },
      { q: "Perimeter of square side s?", options: ["2s","4s","s²","s/2"], answer: "4s" }
    ],
    Statistics: [
      { q: "Mean of 2,4,6 is?", options: ["3","4","5","6"], answer: "4" },
      { q: "Median of 1,2,9 is?", options: ["1","2","9","(1+2)/2"], answer: "2" },
      { q: "Mode of 2,2,3,4 is?", options: ["2","3","4","No mode"], answer: "2" }
    ]
  },
  "Social Science": {
    "Nationalism in India": [
      { q: "Who led the Salt March?", options: ["Nehru","Gandhi","Bose","Azad"], answer: "Gandhi" },
      { q: "Partition year of India?", options: ["1945","1946","1947","1948"], answer: "1947" },
      { q: "First Prime Minister of India?", options: ["Nehru","Patel","Gandhi","Azad"], answer: "Nehru" }
    ],
    Agriculture: [
      { q: "Green Revolution started in?", options: ["1960s","1970s","1980s","1990s"], answer: "1960s" },
      { q: "Main cereal crop of India?", options: ["Wheat","Rice","Corn","Barley"], answer: "Rice" },
      { q: "Irrigation method is?", options: ["Monsoon","Rainfed","Canals","All"], answer: "Canals" }
    ],
    "Political Parties": [
      { q: "Main opposing parties are called?", options: ["Ruling party","Opposition","Coalition","Minor"], answer: "Opposition" },
      { q: "One Party system means?", options: ["Multiple parties","Single party","Two parties","No party"], answer: "Single party" },
      { q: "India is a?", options: ["Monarchy","Democracy","Dictatorship","Oligarchy"], answer: "Democracy" }
    ]
  },
  English: {
    "A Letter to God": [
      { q: "Who wrote the story?", options: ["G.L. Fuentes","Tagore","Ruskin Bond","Malcolm X"], answer: "G.L. Fuentes" },
      { q: "What does Lencho believe in?", options: ["Devil","God","Nature","Man"], answer: "God" },
      { q: "What destroyed Lencho’s crop?", options: ["Storm","Hail","Flood","Fire"], answer: "Hail" }
    ],
    "Diary of Anne Frank": [
      { q: "Anne was hiding in?", options: ["France","Netherlands","Germany","Italy"], answer: "Netherlands" },
      { q: "Diary entries began in?", options: ["1942","1940","1939","1945"], answer: "1942" },
      { q: "Anne hid with her family in?", options: ["Barn","Attic","Garage","Basement"], answer: "Attic" }
    ],
    "Hundred Dresses": [
      { q: "Main girl is?", options: ["Wanda","Peggy","Madeline","Susie"], answer: "Wanda" },
      { q: "Wanda imagined dresses color?", options: ["Red","Blue","Green","Yellow"], answer: "Blue" },
      { q: "School portrait theme is?", options: ["100 Dresses","100 Shoes","100 Hats","100 Dreams"], answer: "100 Dresses" }
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
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utter);
  }
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

function startBot() {
  addMessage("What can I do for you?");
  showOptions(["I want to test my IQ"], handleMainOption);
}

function handleMainOption(choice) {
  addMessage(choice, 'user');
  addMessage("Okay! Choose a subject:");
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
  addMessage("Ok, let us start the quiz");
  quizData = questionsDB[currentSubject][currentChapter] || [];
  if (quizData.length === 0) {
    addMessage("No questions added for this chapter yet.");
    return;
  }
  currentQuestion = 0;
  setTimeout(askQuestion, 500);
}

function askQuestion() {
  if (currentQuestion < quizData.length) {
    const qObj = quizData[currentQuestion];
    addMessage(`Q${currentQuestion + 1}: ${qObj.q}`);
    showOptions(qObj.options, handleAnswer);
  } else {
    addMessage(`✅ Quiz complete! You answered ${quizData.length} questions.`);
    clearOptions();
  }
}

function handleAnswer(selected) {
  addMessage(selected, 'user');
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    addMessage("✅ Correct!");
  } else {
    addMessage(`❌ Wrong – correct answer: ${correct}`);
  }
  currentQuestion++;
  setTimeout(askQuestion, 700);
}

startBot();
