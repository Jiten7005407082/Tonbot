document.addEventListener('DOMContentLoaded', function() {
    const micButton = document.getElementById('mic-button');
    const sendButton = document.getElementById('send-button');
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');
    const status = document.getElementById('status');

    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        status.innerHTML = '<p style="color:red">Speech recognition not supported in your browser</p>';
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
                status.textContent = 'Assistant is ready';
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
            console.error('Speech recognition error', event.error);
            micButton.classList.remove('listening');
            status.textContent = 'Error: ' + event.error;
            setTimeout(() => {
                status.textContent = 'Assistant is ready';
            }, 3000);
        };

        recognition.onend = () => {
            if (micButton.classList.contains('listening')) {
                micButton.classList.remove('listening');
                status.textContent = 'Assistant is ready';
            }
        };
    }

    // Text input handling
    sendButton.addEventListener('click', () => {
        const text = userInput.value.trim();
        if (text) {
            processInput(text);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const text = userInput.value.trim();
            if (text) {
                processInput(text);
                userInput.value = '';
            }
        }
    });

    function processInput(input) {
        displayMessage(input, 'user');
        status.textContent = 'Thinking...';
        
        // Simulate processing delay
        setTimeout(() => {
            const response = generateResponse(input);
            displayMessage(response, 'bot');
            speakResponse(response);
            status.textContent = 'Assistant is ready';
        }, 800);
    }

    function displayMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(`${sender}-message`);
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.innerHTML = `<p>${text}</p>`;
        
        messageDiv.appendChild(contentDiv);
        chatOutput.appendChild(messageDiv);
        
        // Scroll to bottom
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    function generateResponse(input) {
        input = input.toLowerCase();
        
        // Greetings
        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
            return getRandomResponse([
                "Hello there! How can I help you today?",
                "Hi! What can I do for you?",
                "Hey! Nice to talk to you. What's on your mind?"
            ]);
        }
        
        // Time
        if (input.includes('time')) {
            const now = new Date();
            return `The current time is ${now.toLocaleTimeString()}.`;
        }
        
        // Date
        if (input.includes('date') || input.includes('today')) {
            const now = new Date();
            return `Today is ${now.toLocaleDateString()}.`;
        }
        
        // Weather
        if (input.includes('weather')) {
            return "I'm sorry, I can't check the weather right now. I'm just a simple demo chatbot.";
        }
        
        // Jokes
        if (input.includes('joke') || input.includes('funny')) {
            return getRandomResponse([
                "Why don't scientists trust atoms? Because they make up everything!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "What do you call fake spaghetti? An impasta!"
            ]);
        }
        
        // Goodbye
        if (input.includes('bye') || input.includes('goodbye')) {
            return getRandomResponse([
                "Goodbye! Have a great day!",
                "See you later!",
                "Bye! Come back soon!"
            ]);
        }
        
        // Default responses
        return getRandomResponse([
            "I'm not sure I understand. Can you try asking differently?",
            "Interesting! Tell me more.",
            "I'm still learning. Could you rephrase that?",
            "I didn't catch that. Could you repeat?",
            "That's a good point. What else would you like to know?"
        ]);
    }
    
    function getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    function speakResponse(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        }
    }
});
