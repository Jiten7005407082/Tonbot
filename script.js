const userText = document.getElementById("userText");
const botResponse = document.getElementById("botResponse");

// Chat answers
const chatResponses = {
  "hello": "Hi there!",
  "what is your name": "I am TonBot, your smart voice assistant.",
  "how are you": "I'm doing great. How about you?",
  "who created you": "I was created by Jiten!",
  "bye": "Goodbye! See you soon."
};

// Quiz questions (shortened for demo – you can add all 50 later)
const quiz = [
  { question: "What is electricity?", answer: "Electricity is the flow of electric charge through a conductor." },
  { question: "What is the unit of electric current?", answer: "The unit of electric current is the ampere." },
  { question: "What is Ohm's Law?", answer: "Ohm's Law states that voltage is equal to current times resistance." }
];

let currentQuestion = 0;
let isQuizMode = false;
let isListening = false;

function speak(text) {
  if ("speechSynthesis" in window) {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.pitch = 1;
    utter.rate = 1;
    utter.volume = 1;
    synth.cancel(); // stop previous
    synth.speak(utter);
  } else {
    console.log("Speech Synthesis not supported.");
  }
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
  const correct = quiz[currentQuestion].answer.toLowerCase().trim();
  const response = userAnswer.toLowerCase().trim();

  if (response === correct) {
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

  if (cleaned === "start quiz") {
    isQuizMode = true;
    currentQuestion = 0;
    speak("Starting the quiz.");
    askQuizQuestion();
    return;
  }

  const reply = chatResponses[cleaned] || "Sorry, I don't understand that yet.";
  botResponse.innerText = "Bot: " + reply;
  speak(reply);
}

function processSpeech(transcript) {
  const spoken = transcript.toLowerCase().trim();
  userText.innerText = "You: " + spoken;

  if (!isListening && spoken.includes("ton")) {
    isListening = true;
    speak("Let us chat. Say 'start quiz' to begin the quiz.");
  } else if (isListening) {
    if (isQuizMode) {
      checkQuizAnswer(spoken);
    } else {
      handleChat(spoken);
    }
  }
}

function startWakeListener() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Speech recognition not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    processSpeech(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Recognition error:", event.error);
  };

  recognition.onend = () => {
    setTimeout(startWakeListener, 500);
  };

  recognition.start();
}

window.onload = () => {
  setTimeout(() => {
    speak("Say 'Ton' to activate me.");
  }, 1000);
  startWakeListener();
};
