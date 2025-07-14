const chatDisplay = document.getElementById('chatDisplay');
const wakeButton = document.getElementById('clickToWake');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;

let recognition;
let listening = false;
let wakeWord = "ton";
let context = "";

function initRecognition() {
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log("Heard:", transcript);

    if (!listening && transcript.includes(wakeWord)) {
      listening = true;
      respond("Yes, I'm listening.");
      return;
    }

    if (listening) {
      handleCommand(transcript);
      listening = false;
    }
  };

  recognition.onend = () => recognition.start();
  recognition.onerror = (e) => console.error("Speech error:", e);

  recognition.start();
}

function handleCommand(message) {
  context = message;
  let response = "";

  // ✅ 10 Basic Commands
  if (message.includes("your name")) {
    response = "I am Ton, your voice assistant.";
  } else if (message.includes("time")) {
    response = "The time is " + new Date().toLocaleTimeString();
  } else if (message.includes("date")) {
    response = "Today is " + new Date().toLocaleDateString();
  } else if (message.includes("how are you")) {
    response = "I'm doing great! Thanks for asking.";
  } else if (message.includes("who made you")) {
    response = "I was created by Jiten.";
  } else if (message.includes("open google")) {
    response = "Opening Google.";
    window.open("https://www.google.com", "_blank");
  } else if (message.includes("joke")) {
    response = "Why don't robots panic? Because they always keep their circuits together!";
  } else if (message.includes("weather")) {
    response = "Sorry, I cannot fetch live weather yet.";
  } else if (message.includes("bye") || message.includes("goodbye")) {
    response = "Goodbye! Have a great day.";
  } else if (message.includes("repeat")) {
    response = "You said: " + context;
  } else {
    response = "You said: " + message;
  }

  respond(response);
}

function respond(text) {
  chatDisplay.innerHTML = `<p><strong>You:</strong> ${context}</p><p><strong>Ton:</strong> ${text}</p>`;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  synth.speak(utterance);
}

// Manual wake button
wakeButton.onclick = () => {
  listening = true;
  respond("Yes, I'm listening.");
};

initRecognition();
