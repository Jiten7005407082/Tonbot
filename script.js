const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

let state = {
  step: "initial",
  subject: null,
  chapter: null,
  questionIndex: 0,
  questions: [],
};

const quizData = {
  Science: {
    "Periodic classification of elements": generateDummy("Periodic classification of elements"),
    "Chemical bonding": generateDummy("Chemical bonding"),
    "Acids, bases and salts": generateDummy("Acids, bases and salts"),
    "Types of chemical reactions": generateDummy("Types of chemical reactions"),
    "Metals and non‑metals": generateDummy("Metals and non‑metals"),
    "Carbon and its compounds": generateDummy("Carbon and its compounds"),
    "Materials of common use": generateDummy("Materials of common use"),
    "Electricity bon": generateDummy("Electricity bon"),
    "Magnetism": generateDummy("Magnetism"),
    "Electromagnetic induction": generateDummy("Electromagnetic induction"),
    "Light": generateDummy("Light"),
    "Sources of energy": generateDummy("Sources of energy"),
    "Life processes": generateDummy("Life processes"),
    "Control and co‑ordination in living beings": generateDummy("Control and co‑ordination in living beings"),
    "Reproduction": generateDummy("Reproduction"),
    "Heridity and evolution": generateDummy("Heridity and evolution"),
    "Our environment": generateDummy("Our environment"),
    "Natural resource": generateDummy("Natural resource"),
    "The regional environment": generateDummy("The regional environment")
  }
};

function generateDummy(title) {
  return Array.from({ length: 10 }, (_, i) => ({
    q: `${title} - Question ${i + 1}?`,
    a: `Answer ${i + 1}`
  }));
}

function sendMessage() {
  const userText = input.value.trim();
  if (!userText) return;
  addMessage(userText, "user");
  input.value = "";
  handleUserInput(userText);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function handleUserInput(text) {
  const txt = text.trim();
  switch (state.step) {
    case "initial":
      if (txt.toLowerCase().includes("test my iq")) {
        addMessage("Which subject? (Science)", "bot");
        state.step = "chooseSubject";
      } else {
        addMessage("Say 'Test my IQ' to begin the quiz.", "bot");
      }
      break;

    case "chooseSubject":
      if (txt.toLowerCase() === "science") {
        state.subject = "Science";
        const chapters = Object.keys(quizData.Science).join(", ");
        addMessage(`Which chapter? Choose from:\n${chapters}`, "bot");
        state.step = "chooseChapter";
      } else {
        addMessage("Please choose a valid subject: Science", "bot");
      }
      break;

    case "chooseChapter":
      const available = Object.keys(quizData.Science);
      const match = available.find(c => c.toLowerCase() === txt.toLowerCase());
      if (match) {
        state.chapter = match;
        state.questions = quizData.Science[match];
        state.questionIndex = 0;
        state.step = "inQuiz";
        askQuestion();
      } else {
        addMessage("Invalid chapter name. Please choose from the list.", "bot");
      }
      break;

    case "inQuiz":
      const current = state.questions[state.questionIndex];
      if (txt.toLowerCase() === current.a.toLowerCase()) {
        addMessage("Correct!", "bot");
      } else {
        addMessage(`Incorrect. The correct answer is: ${current.a}`, "bot");
      }
      state.questionIndex++;
      if (state.questionIndex < state.questions.length) {
        askQuestion();
      } else {
        addMessage("Quiz complete! Say 'Test my IQ' to try again.", "bot");
        state.step = "initial";
      }
      break;

    default:
      addMessage("Something went wrong. Let's start over. Say 'Test my IQ'.", "bot");
      state.step = "initial";
  }
}

function askQuestion() {
  const q = state.questions[state.questionIndex].q;
  addMessage(q, "bot");
}

addMessage("Hello! Say 'Test my IQ' to start the Science quiz.", "bot");
