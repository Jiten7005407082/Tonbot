// Elements
const voiceBtn = document.getElementById('voiceBtn');
const botAvatar = document.getElementById('botAvatar');
const languageSelect = document.getElementById('language');

// Speech Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;
let recognition;
let isListening = false;

// Initialize
function init() {
    if (!SpeechRecognition) {
        voiceBtn.textContent = "Browser Not Supported";
        voiceBtn.style.background = "#9E9E9E";
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

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        processVoiceInput(transcript);
    };

    recognition.onerror = () => stopListening();
    recognition.onend = () => isListening && recognition.start();
}

// Process Voice Input
function processVoiceInput(transcript) {
    const response = getBotResponse(transcript, languageSelect.value);
    speakResponse(response);
}

// Get Bot Response
function getBotResponse(message, lang) {
    message = message.toLowerCase();
    
    if (lang === 'mni') {
        if (message.includes('khurumjari')) return "Khurumjari! Einai thokning amukta tambiram?";
        if (message.includes('thouri')) return "Nungshi thouroi, yengbira!";
        return "Einai khangdana: " + message;
    } else {
        if (message.includes('hello')) return "Hello! How can I help?";
        if (message.includes('how are you')) return "I'm doing well!";
        return "I heard: " + message;
    }
}

// Speak Response
function speakResponse(text) {
    if (synth.speaking) synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageSelect.value === 'mni' ? 'en-IN' : 'en-US';
    
    utterance.onstart = () => botAvatar.classList.add('talking');
    utterance.onend = () => {
        botAvatar.classList.remove('talking');
        if (isListening) recognition.start();
    };
    
    synth.speak(utterance);
}

// Toggle Listening
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
    voiceBtn.textContent = "Start Talking";
    voiceBtn.classList.remove('listening');
    botAvatar.classList.remove('talking');
}

// Initialize
init();
