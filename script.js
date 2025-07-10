document.addEventListener('DOMContentLoaded', function() {
    const micButton = document.getElementById('mic-button');
    const sendButton = document.getElementById('send-button');
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');
    const status = document.getElementById('status');

    // Speech Recognition Setup
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        status.innerHTML = '<p style="color:red">Speech recognition not supported</p>';
        micButton.disabled = true;
    } else {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        micButton.addEventListener('click', () => {
            if (micButton.classList.contains('listening')) {
                recognition.stop();
                micButton.classList.remove('listening');
                status.textContent = 'Ready';
            } else {
                recognition.start();
                micButton.classList.add('listening');
                status.textContent = 'Listening...';
            }
        });

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript;
            userInput.value = speechResult;
            processInput(speechResult);
            micButton.classList.remove('listening');
            status.textContent = 'Processing...';
        };

        recognition.onerror = (event) => {
            console.error('Speech error:', event.error);
            status.textContent = 'Error: ' + event.error;
            micButton.classList.remove('listening');
            setTimeout(() => status.textContent = 'Ready', 2000);
        };

        recognition.onend = () => {
            if (micButton.classList.contains('listening')) {
                micButton.classList.remove('listening');
                status.textContent = 'Ready';
            }
        };
    }

    // Text Input Handling
    sendButton.addEventListener('click', () => processUserInput());
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processUserInput();
    });

    function processUserInput() {
        const text = userInput.value.trim();
        if (text) {
            processInput(text);
            userInput.value = '';
        }
    }

    function processInput(input) {
        console.log("Processing input:", input); // Debug log
        displayMessage(input, 'user');
        status.textContent = 'Thinking...';
        
        setTimeout(() => {
            const response = generateResponse(input);
            displayMessage(response, 'bot');
            speakResponse(response);
            status.textContent = 'Ready';
        }, 800);
    }

    function displayMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `${sender}-message`;
        messageDiv.innerHTML = `<div class="message-content"><p>${text}</p></div>`;
        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    // ================= IMPROVED RESPONSE GENERATOR =================
    function generateResponse(input) {
        const lowerInput = input.toLowerCase().trim();

        // 1. NAME QUESTION (Priority 1)
        if (/(what('s| is)? your name|who are you|your name(\?|$))/i.test(input)) {
            return "My name is Thongam Lamnganba (but you can call me Ton).";
        }

        // 2. FATHER QUESTION (Priority 2)
        if (/(who('s| is)? your (father|dad)|father('s| is)? name|your (father|dad)(\?|$))/i.test(input)) {
            return "Thongam Jiten is my father.";
        }
        // 2. FATHER QUESTION (Priority 2)
        if (/(who('s| is)? your (mother|mom)|mother('s| is)? name|your (mother|mom)(\?|$))/i.test(input)) {
            return "Thongam Rabita is my mother.";

        // 3. GREETINGS
        if (/^(hello|hi|hey|greetings)/i.test(input)) {
            return getRandomResponse([
                "Hello! How can I help?",
                "Hi there! What's on your mind?",
                "Hey! Nice to see you."
            ]);
        }

        // 4. TIME/DATE
        if (/(current )?time|what time/i.test(input)) {
            return `It's ${new Date().toLocaleTimeString()}.`;
        }
        if (/(today'?s? date|current date)/i.test(input)) {
            return `Today is ${new Date().toLocaleDateString()}.`;
        }

        // 5. DEFAULT FALLBACKS
        return getRandomResponse([
            "I'm not sure I understand. Could you rephrase?",
            "Interesting! Tell me more about that.",
            "I'm still learning. Could you ask differently?",
            "Let me think about that... Can you elaborate?"
        ]);
    }

    function getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    function speakResponse(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9; // Slightly slower for clarity
            window.speechSynthesis.speak(utterance);
        }
    }
});
