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
const OPENAI_API_KEY = 'your-openai-api-key-here';  // ⛔ Replace with your real key

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
      respond("Yes, I'm listening.");

      // Timeout after 10 seconds
      clearTimeout(listenTimeout);
      listenTimeout = setTimeout(() => {
        if (listening) {
          listening = false;
          showIndicator(false);
          respond("Timeout. Going back to sleep.");
        }
      }, 10000); // 10 seconds
      return;
    }

    if (listening) {
      clearTimeout(listenTimeout);
      listening = false;
      showIndicator(false);
      context = transcript;

      respond("Let me think...", true);
      const gptReply = await fetchGPTResponse(transcript);
      respond(gptReply);
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

// GPT-4 API Call
async function fetchGPTResponse(prompt) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // or "gpt-4" if you have access
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Sorry, I couldn't understand that.";
  } catch (err) {
    console.error(err);
    return "Error reaching GPT service.";
  }
}

// Manual wake
wakeButton.onclick = () => {
  listening = true;
  showIndicator(true);
  respond("Yes, I'm listening.");
  clearTimeout(listenTimeout);
  listenTimeout = setTimeout(() => {
    if (listening) {
      listening = false;
      showIndicator(false);
      respond("Timeout. Going back to sleep.");
    }
  }, 10000);
};

initRecognition();
