const talkBtn = document.getElementById('talkBtn');
const userText = document.getElementById('userText');
const botResponse = document.getElementById('botResponse');

// Define your custom Q&A
const responses = {
  "hello": "Hi there!",
  "what is your name": "I am your custom voice bot.",
  "how are you": "I'm doing great. How about you?",
  "who created you": "I was created by Jiten!",
  "bye": "Goodbye! Talk to you soon."
};

function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  synth.speak(utter);
}

function process(input) {
  const cleaned = input.toLowerCase().trim();
  const reply = responses[cleaned] || "Sorry, I don't understand that yet.";
  botResponse.innerText = "Bot: " + reply;
  speak(reply);
}

function startRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    userText.innerText = "You: " + transcript;
    process(transcript);
  };

  recognition.onerror = (event) => {
    botResponse.innerText = "Error: " + event.error;
  };
}

talkBtn.addEventListener('click', startRecognition);