// ✅ Your deployed Google Apps Script URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzVm0fUi13qXTD28zK4eBT4dUnqYjr6J1RUhinEZNpMP0SScEOdgtjM1oIeL-ja6iAM/exec";
const userId = "user1";  // You can customize this per user if needed

// Voice Recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

// On Voice Result
recognition.onresult = async function(event) {
  const userText = event.results[0][0].transcript;
  document.getElementById("userSpeech").textContent = userText;

  let reply = "";

  if (userText.toLowerCase().includes("my name is")) {
    const name = userText.split("my name is")[1].trim();
    await saveMemory("name", name);
    reply = `Got it! I will remember your name is ${name}.`;
  }
  else if (userText.toLowerCase().includes("what is my name")) {
    const name = await loadMemory("name");
    reply = (name === "NOT_FOUND") ? "I don't know your name yet." : `Your name is ${name}.`;
  }
  else {
    reply = "Sorry, I can only remember your name right now. Say 'my name is...' or ask 'what is my name?'.";
  }

  document.getElementById("botReply").textContent = reply;
  speak(reply);
};

// Start listening
function startListening() {
  recognition.start();
}

// Speak output
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
}

// Save memory to Google Sheets
async function saveMemory(key, value) {
  await fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({ user: userId, key, value }),
    headers: { "Content-Type": "application/json" }
  });
}

// Load memory from Google Sheets
async function loadMemory(key) {
  const res = await fetch(`${scriptURL}?user=${userId}&key=${key}`);
  return await res.text();
}
