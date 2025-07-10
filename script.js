// Simple text-based chatbot logic
function sendTextMessage() {
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');
    
    // Add user message to chat
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput.value}</p>`;
    
    // Simple bot response
    const responses = [
        "I'm a simple chatbot!",
        "Thanks for your message!",
        "How can I help you today?",
        "Interesting point!",
        "I'm still learning!"
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    
    // Add bot response to chat
    setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);
    
    userInput.value = '';
}

// Voice input functionality
function startVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Speech recognition not supported in your browser");
        return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    
    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        document.getElementById('userInput').value = speechResult;
        sendTextMessage();
    };
    
    recognition.start();
    alert("Speak now...");
}

// Optional: Text-to-speech for bot responses
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
