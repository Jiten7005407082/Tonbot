let step = 0, subject = "", chapter = "", score = 0, qIndex = 0;
const chatbox = document.getElementById("chatbox");
const input = document.getElementById("input");

const chapters = {
  science: [
    "Periodic Classification of Elements",
    "Chemical Bonding",
    "Acids, Bases and Salts",
    "Types of Chemical Reactions",
    "Metals and Non‑Metals",
    "Carbon and Its Compounds",
    "Materials of Common Use",
    "Electricity",
    "Magnetism",
    "Electromagnetic Induction",
    "Light",
    "Sources of Energy",
    "Life Processes",
    "Control and Coordination in Living Beings",
    "Reproduction",
    "Heredity and Evolution",
    "Our Environment",
    "Natural Resources",
    "The Regional Environment"
  ],
  math: [
    "Number System, Polynomials & Factorization",
    "Pair of Linear Equations, Quadratics & AP",
    "Triangles, Circles & Constructions",
    "Trigonometric Ratios, Height & Distances, Coordinate Geometry",
    "Mensuration",
    "Statistics & Probability",
    "Trading and Demat Account"
  ],
  social: [
    "The Rise of Nationalism in Europe",
    "Nationalism in India",
    "The Second World War in Manipur",
    "India – Resources and Their Development",
    "Mineral Resources",
    "Energy Resources",
    "Agriculture",
    "Manipuri Resources & Land‑use Pattern",
    "Map Work",
    "Working of Democracy",
    "Power Sharing",
    "Competition & Contests in Democracy",
    "Political Parties",
    "The Story of Development",
    "Money & Financial System"
  ],
  english: [
    "A Letter to God",
    "Nelson Mandela",
    "From the Diary of Anne Frank",
    "The Hundred Dresses"
  ]
};

const questions = {
  "Life Processes": [
    { q: "Which organ filters blood in humans?", options: ["Heart", "Lungs", "Kidney", "Liver"], answer: 2 },
    { q: "Photosynthesis occurs in?", options: ["Roots", "Stem", "Leaves", "Fruit"], answer: 2 },
    { q: "Amoeba reproduces by?", options: ["Binary fission", "Budding", "Fragmentation", "None"], answer: 0 },
    { q: "Which gas is released in respiration?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { q: "Which system transports oxygen?", options: ["Nervous", "Digestive", "Circulatory", "Excretory"], answer: 2 }
  ]
};

function botSay(msg) {
  const div = document.createElement("div");
  div.className = "bot";
  div.innerHTML = "🤖 Bot: " + msg;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function userSay(msg) {
  const div = document.createElement("div");
  div.className = "user";
  div.innerHTML = "🧑 You: " + msg;
  chatbox.appendChild(div);
}

function handleKey(e) {
  if (e.key === "Enter") {
    const msg = input.value.trim();
    if (msg === "") return;
    userSay(msg);
    input.value = "";

    if (step === 0 && msg.toLowerCase().includes("iq")) {
      step = 1;
      botSay("Ok. In which subject do you want to test? (Science / Math / Social / English)");
    }
    else if (step === 1) {
      subject = msg.toLowerCase();
      if (!chapters[subject]) {
        botSay("Please choose from: Science, Math, Social, or English.");
        return;
      }
      step = 2;
      const chList = chapters[subject].map((ch, i) => `${i + 1}. ${ch}`).join("<br>");
      botSay(`Choose a chapter number:<br>${chList}`);
    }
    else if (step === 2) {
      const idx = parseInt(msg) - 1;
      if (isNaN(idx) || idx < 0 || idx >= chapters[subject].length) {
        botSay("Please enter a valid chapter number.");
        return;
      }
      chapter = chapters[subject][idx];
      botSay(`Ok! Let us start the quiz on "${chapter}".`);
      step = 3;
      score = 0;
      qIndex = 0;

      if (!questions[chapter]) {
        botSay("Sorry! Quiz questions for this chapter are not added yet.");
        step = 4;
        return;
      }

      setTimeout(() => askQuestion(), 1000);
    }
    else if (step === 3) {
      const q = questions[chapter][qIndex];
      const selected = parseInt(msg) - 1;
      if (selected === q.answer) score++;
      qIndex++;
      if (qIndex < 5) {
        askQuestion();
      } else {
        botSay(`✅ Quiz finished! You scored ${score}/5.`);
        step = 4;
      }
    }
  }
}

function askQuestion() {
  const q = questions[chapter][qIndex];
  let msg = `${qIndex + 1}. ${q.q}<br>`;
  q.options.forEach((opt, i) => {
    msg += `${i + 1}. ${opt}<br>`;
  });
  botSay(msg);
}
