// DOM Elements
const chatbox = document.getElementById('chatbox');
const voiceBtn = document.getElementById('voiceBtn');
const languageSelect = document.getElementById('language');
const botAvatar = document.getElementById('botAvatar');

// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;
let recognition;
let isListening = false;

// Initialize
function init() {
    if (!SpeechRecognition) {
        voiceBtn.disabled = true;
        displaySystemMessage("Your browser doesn't support speech recognition");
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        isListening = true;
        voiceBtn.textContent = "Listening...";
        voiceBtn.classList.add('listening');
        botAvatar.classList.add('talking');
    };

    recognition.onend = () => {
        if (isListening) {
            recognition.start(); // Continue listening
        }
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        processVoiceInput(transcript);
    };

    recognition.onerror = (event) => {
        displaySystemMessage("Error: " + event.error);
        stopListening();
    };
}

// Process voice input
function processVoiceInput(transcript) {
    displayMessage(transcript, 'user');
    
    // Get response based on selected language
    const response = getBotResponse(transcript, languageSelect.value);
    
    setTimeout(() => {
        displayMessage(response, 'bot');
        speakResponse(response);
    }, 500);
}

// Get bot response
function getBotResponse(message, lang) {
    message = message.toLowerCase();
    
    if (lang === 'mni') {
        // Manipuri responses
        if (message.includes('khurumjari') || message.includes('hello')) {
            return "Khurumjari! Einai thokning amukta tambiram?";
        } else if (message.includes('thouri') || message.includes('how are you')) {
            return "Nungshi thouroi, yengbira!";
        } else {
            return "Einai khangdana: " + message;
        }
    } else {
        // English responses
        if (message.includes('hello') || message.includes('hi')) {
            return "Hello! How can I help you today?";
        } else if (message.includes('how are you')) {
            return "I'm doing well, thank you!";
        } else {
            return "I heard you say: " + message;
        }
    }
}

// Speak the response
function speakResponse(text) {
    if (synth.speaking) {
        synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageSelect.value === 'mni' ? 'en-IN' : 'en-US';
    
    botAvatar.classList.add('talking');
    utterance.onend = () => {
        botAvatar.classList.remove('talking');
        recognition.start(); // Continue listening after speaking
    };
    
    synth.speak(utterance);
}

// Display messages
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender + '-message');
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function displaySystemMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('system-message');
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Voice button handler
voiceBtn.addEventListener('click', () => {
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
});

function startListening() {
    recognition.lang = languageSelect.value === 'mni' ? 'en-IN' : 'en-US';
    recognition.start();
}

function stopListening() {
    isListening = false;
    recognition.stop();
    voiceBtn.textContent = "🎤 Start Speaking";
    voiceBtn.classList.remove('listening');
    botAvatar.classList.remove('talking');
}

// Initialize the app
init();
