const userText = document.getElementById('userText');
const botResponse = document.getElementById('botResponse');

// 🧠 Chat responses
const chatResponses = {
  "hello": "Hi there!",
  "what is your name": "I am TonBot, your smart voice assistant.",
  "how are you": "I'm doing great. How about you?",
  "who created you": "I was created by Jiten!",
  "bye": "Goodbye! See you soon."
};

// 📚 Quiz questions
const quiz = [
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "What is 2 plus 2?", answer: "four" },
  { question: "Which planet is known as the red planet?", answer: "mars" },
  { question: "How many colors are there in a rainbow?", answer: "seven" }
];

let currentQuestion = 0;
let isQuizMode = true;
let isListening = false;

function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  synth.speak(utter);
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

function checkQuizAnswer(userAnswer) {
  const correct = quiz[currentQuestion].answer;
  if (userAnswer.includes(correct)) {
    botResponse.innerText = "Bot: Correct!";
    speak("Correct!");
    currentQuestion++;
    setTimeout(askQuizQuestion, 1500);
  } else {
    botResponse.innerText = "Bot: Wrong. Try again.";
    speak("Wrong answer. Try again.");
  }
}

function handleChat(input) {
  const cleaned = input.toLowerCase().trim();
  const reply = chatResponses[cleaned] || "Sorry, I don't understand that yet.";
  botResponse.innerText = "Bot: " + reply;
  speak(reply);
}

function processSpeech(transcript) {
  const spoken = transcript.toLowerCase().trim();
  userText.innerText = "You: " + spoken;

  if (!isListening && spoken.includes("ton")) {
    isListening = true;
    speak("Hi! I'm listening.");
    if (isQuizMode && currentQuestion === 0) {
      askQuizQuestion();
    }
  } else if (isListening) {
    if (isQuizMode) {
      checkQuizAnswer(spoken);
    } else {
      handleChat(spoken);
    }
  }
}

function startWakeListener() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    processSpeech(transcript);
  };

  recognition.onerror = (event) => {
    console.log("Error: " + event.error);
  };

  recognition.onend = () => {
    setTimeout(startWakeListener, 500); // restart listening
  };

  recognition.start();
}

// 🚀 Start wake-word listener on page load
window.onload = () => {
  speak("Say 'Ton' to wake me up.");
  startWakeListener();
};
