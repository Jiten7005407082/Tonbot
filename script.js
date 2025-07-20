const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;

function startListening() {
  document.getElementById("userSpeech").textContent = "🎤 Listening...";
  recognition.start();
}

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  document.getElementById("userSpeech").textContent = "You said: " + transcript;
  sendToGoogleSheet(transcript);
};

recognition.onerror = function(event) {
  console.error("Speech recognition error:", event.error);
  document.getElementById("userSpeech").textContent = "❌ Error: " + event.error;
};

recognition.onend = function() {
  console.log("Speech recognition ended");
};

function sendToGoogleSheet(userMessage) {
  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec", {
    method: "POST",
    body: JSON.stringify({ message: userMessage }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => res.json())
  .then(data => {
    showReply(userMessage, data.reply);
    speak(data.reply);
  })
  .catch(err => {
    console.error("Google Sheet fetch error:", err);
    document.getElementById("chatBox").innerHTML += `<p>❌ Error getting reply.</p>`;
  });
}

function showReply(question, reply) {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p><strong>You:</strong> ${question}</p>`;
  chatBox.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
}

function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  synth.speak(utter);
}
