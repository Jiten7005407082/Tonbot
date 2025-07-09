const userText = document.getElementById("userText");
const botResponse = document.getElementById("botResponse");
const statusText = document.getElementById("status");
const wakeButton = document.getElementById("wakeButton");

const chatResponses = {
  "hello": "Hi there!",
  "what is your name": "I am TonBot, your smart voice assistant.",
  "how are you": "I'm doing great. How about you?",
  "who created you": "I was created by Jiten!",
  "bye": "Goodbye! See you soon."
};

const quiz = [
  { question: "What is electricity?", answer: "Electricity is the flow of electric charge through a conductor." },
  { question: "What is the unit of electric current?", answer: "The unit of electric current is the ampere." },
  { question: "What is Ohm's Law?", answer: "Ohm's Law states that voltage is equal to current times resistance." }
];

let currentQuestion = 0;
let isQuizMode = false;
let isListening = false;

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function askQuizQuestion() {
  if (currentQuestion < quiz.length) {
    const q = quiz[currentQuestion].question;
    botResponse.innerText = "Bot (Quiz): " + q;
    speak(q);
  } else {
    isQuizMode = false;
    botResponse.innerText = "Bot: Quiz over! You can now chat with me.";
    speak("Quiz over! You can now chat with me.");
  }
}

function checkQuizAnswer(answer) {
  const correct = quiz[currentQuestion].answer.toLowerCase().trim();
  const userAns = answer.toLowerCase().trim();

  if (userAns === correct) {
    speak("Correct!");
    botResponse.innerText = "Bot: Correct!";
    currentQuestion++;
    setTimeout(askQuizQuestion, 1500);
  } else {
    speak("Wrong answer. Try again.");
    botResponse.innerText = "Bot: Wrong. Try again.";
  }
}

function handleChat(input) {
  const cleaned = input.toLowerCase().trim();

  if (cleaned === "start quiz") {
    isQuizMode = true;
    currentQuestion = 0;
    speak("Starting quiz.");
    askQuizQuestion();
    return;
  }

  const reply = chatResponses[cleaned] || "Sorry, I don't understand that yet.";
  botResponse.innerText = "Bot: " + reply;
  speak(reply);
}

function processSpeech(transcript) {
  const spoken = transcript.toLowerCase().trim();
  console.log("Heard:", spoken);
  userText.innerText = "You: " + spoken;

  // Wake trigger
  if (!isListening && spoken.includes("ton")) {
    isListening = true;
    statusText.innerText = "✅ TonBot is awake!";
    speak("Let us chat. Say 'start quiz' to begin.");
    return;
  }

  // If already awake
  if (isListening) {
    if (isQuizMode) {
      checkQuizAnswer(spoken);
    } else {
      handleChat(spoken);
    }
  }
}

function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Speech recognition not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    processSpeech(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Recognition error:", event.error);
    statusText.innerText = "Error: " + event.error;
  };

  recognition.onend = () => {
    setTimeout(startSpeechRecognition, 800);
  };

  recognition.start();
}

wakeButton.addEventListener("click", () => {
  if (!isListening) {
    isListening = true;
    statusText.innerText = "✅ Listening after button click";
    speak("Let us chat. Say 'start quiz' to begin.");
  }
});

window.onload = () => {
  speak("Say Ton to activate me, or click the button.");
  startSpeechRecognition();
};
