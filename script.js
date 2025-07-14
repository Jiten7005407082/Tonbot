const chatDisplay = document.getElementById('chatDisplay');
const wakeButton = document.getElementById('clickToWake');
const indicator = document.getElementById('listeningIndicator');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;

let recognition;
let listening = false;
let wakeWord = "ton";
let context = "";
let listenTimeout;

// ✅ Your Google Sheet Web App URL
const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbwgZ3aUIsyxWOqjTxgukEsok3o4xUf6tnxMoHeeBxEFXllI4IGkkjCDeRfd2lko68kOmA/exec';

function initRecognition() {
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
  recognition.interimResults = false;

  recognition.onresult = async (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log("Heard:", transcript);

    if (!listening && transcript.includes(wakeWord)) {
      listening = true;
      showIndicator(true);
      respond("Yes, I'm listening...");

      clearTimeout(listenTimeout);
      listenTimeout = setTimeout(() => {
        listening = false;
        showIndicator(false);
        respond("Timeout. Going back to sleep.");
      }, 10000);
      return;
    }

    if (listening) {
      clearTimeout(listenTimeout);
      listening = false;
      showIndicator(false);
      context = transcript;

      respond("Let me check...", true);
      const reply = await fetchAnswerFromSheet(transcript);
      respond(reply);
    }
  };

  recognition.onerror = (e) => {
    console.error("Speech error:", e);
    showIndicator(false);
  };

  recognition.onend = () => recognition.start();
  recognition.start();
}

function showIndicator(active) {
  indicator.classList.toggle("blink", active);
}

function respond(text, silent = false) {
  chatDisplay.innerHTML = `<p><strong>You:</strong> ${context}</p><p><strong>Ton:</strong> ${text}</p>`;
  if (!silent) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance);
  }
}

// 🔎 Fetch answer from your Google Sheet
async function fetchAnswerFromSheet(message) {
  try {
    const res = await fetch(SHEET_API_URL);
    const data = await res.json();
    const question = message.toLowerCase().trim();

    for (let key in data) {
      if (question.includes(key)) {
        return data[key];
      }
    }

    return "Sorry, I don't know the answer to that.";
  } catch (e) {
    console.error("Fetch error:", e);
    return "Error accessing memory.";
  }
}

// 🖱 Click-to-Wake
wakeButton.onclick = () => {
  listening = true;
  showIndicator(true);
  respond("Yes, I'm listening...");
  clearTimeout(listenTimeout);
  listenTimeout = setTimeout(() => {
    listening = false;
    showIndicator(false);
    respond("Timeout. Going back to sleep.");
  }, 10000);
};

initRecognition();
