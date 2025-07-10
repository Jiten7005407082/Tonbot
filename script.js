// ======================
// CUSTOM Q&A AUDIO CHATBOT
// ======================

// 1. KNOWLEDGE BASE - EDIT THIS SECTION
const knowledgeBase = {
    // Basic greetings
    "hello": ["Hi there!", "Hello!", "Greetings!"],
    "hi": ["Hey!", "Hi!", "Hello there!"],
    "hey": ["What's up?", "Hey there!", "Hi!"],

    // About the bot
    "what is your name": [
        "I'm your custom audio chatbot!", 
        "Call me ChatBot 3000",
        "I'm your personal assistant bot"
    ],
    "who created you": [
        "I was created by you using JavaScript!", 
        "You built me with the Web Speech API",
        "A brilliant developer (you!) made me"
    ],

    // Fun responses
    "tell me a joke": [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call fake spaghetti? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!"
    ],
    "sing a song": [
        "I'm a chatbot, not a singer! But here's a rhyme: Roses are red, violets are blue, I'm a chatbot, and I'm talking to you!",
        "Beep boop bop - that's my song!"
    ],

    // Custom knowledge - ADD YOUR OWN HERE
    "what can you do": [
        "I can answer questions, tell jokes, and have simple conversations",
        "I respond to voice and text input with my knowledge base"
    ],
    "how does this work": [
        "I use speech recognition to hear you and speech synthesis to respond",
        "It's magic! Just kidding - it's the Web Speech API in your browser"
    ]
    // Add more custom Q&A pairs below...
};

// 2. CHATBOT CORE FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const voiceBtn = document.getElementById('voiceBtn');
    
    // Speech recognition object
    let recognition;
    
    // Initial greeting
    addBotMessage("Hello! I'm your custom audio chatbot. Ask me anything or click the microphone to speak.");
    
    // Event listeners
    sendBtn.addEventListener('click', processTextInput);
    userInput.addEventListener('keypress', (e) => e.key === 'Enter' && processTextInput());
    voiceBtn.addEventListener('click', toggleVoiceInput);

    // ======================
    // CORE FUNCTIONS
    // ======================

    function processTextInput() {
        const question = userInput.value.trim();
        if (question) {
            addUserMessage(question);
            userInput.value = '';
            processQuestion(question.toLowerCase());
        }
    }

    function toggleVoiceInput() {
        if (!('webkitSpeechRecognition' in window)) {
            addBotMessage("Sorry, voice input isn't supported in your browser. Try Chrome or Edge.");
            return;
        }

        if (voiceBtn.classList.contains('listening')) {
            stopVoiceRecognition();
        } else {
            startVoiceRecognition();
        }
    }

    function startVoiceRecognition() {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            voiceBtn.classList.add('listening');
            voiceBtn.innerHTML = '🛑 Stop';
            addBotMessage("<i>Listening... Speak now</i>");
        };

        recognition.onresult = (e) => {
            const question = e.results[0][0].transcript;
            addUserMessage(question);
            processQuestion(question.toLowerCase());
        };

        recognition.onerror = (e) => {
            let errorMsg = "Error: ";
            switch(e.error) {
                case 'no-speech': errorMsg += "No speech detected"; break;
                case 'audio-capture': errorMsg += "No microphone found"; break;
                case 'not-allowed': errorMsg += "Microphone access denied"; break;
                default: errorMsg += e.error;
            }
            addBotMessage(errorMsg);
            stopVoiceRecognition();
        };

        recognition.onend = stopVoiceRecognition;

        recognition.start();
    }

    function stopVoiceRecognition() {
        if (recognition) {
            recognition.stop();
        }
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '🎤 Speak';
    }

    function processQuestion(question) {
        // Find the best matching response
        let response = findBestResponse(question);
        
        // Simulate thinking delay
        setTimeout(() => {
            addBotMessage(response);
            speak(response);
        }, 800);
    }

    function findBestResponse(question) {
        // 1. Check for exact match
        if (knowledgeBase[question]) {
            return getRandomResponse(knowledgeBase[question]);
        }
        
        // 2. Check for partial matches (question contains a key phrase)
        for (const key in knowledgeBase) {
            if (question.includes(key)) {
                return getRandomResponse(knowledgeBase[key]);
            }
        }
        
        // 3. Default response if no matches found
        return "I'm not sure how to answer that. Try asking something else!";
    }

    // ======================
    // HELPER FUNCTIONS
    // ======================

    function getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    function addUserMessage(message) {
        addMessage(message, 'user');
    }

    function addBotMessage(message) {
        addMessage(message, 'bot');
    }

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            // Configure voice
            const voices = window.speechSynthesis.getVoices();
            utterance.voice = voices.find(v => v.lang.includes('en')) || voices[0];
            utterance.rate = 0.9;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        }
    }

    // Initialize speech synthesis voices
    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => {
            // Voices are now loaded
        };
    }
});
