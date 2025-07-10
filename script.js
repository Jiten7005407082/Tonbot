// QUIZ CHATBOT WITH VOICE CONTROL
document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const voiceBtn = document.getElementById('voiceBtn');
    
    let recognition;
    let quizState = {
        inQuiz: false,
        currentSubject: null,
        currentChapter: null,
        currentQuestion: 0,
        score: 0
    };

    // QUIZ DATABASE - EDIT THIS TO ADD MORE QUESTIONS
    const quizDatabase = {
        "science": {
            "biology": [
                {
                    question: "What is the powerhouse of the cell?",
                    options: ["Nucleus", "Mitochondria", "Ribosome", "Cell membrane"],
                    answer: 1
                },
                {
                    question: "Which gas do plants absorb during photosynthesis?",
                    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                    answer: 1
                }
            ],
            "chemistry": [
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "CO2", "NaCl", "O2"],
                    answer: 0
                }
            ]
        },
        "math": {
            "algebra": [
                {
                    question: "What is the solution for x in: 2x + 5 = 15?",
                    options: ["5", "10", "7.5", "2"],
                    answer: 0
                }
            ],
            "geometry": [
                {
                    question: "How many degrees are in a right angle?",
                    options: ["90", "180", "360", "45"],
                    answer: 0
                }
            ]
        },
        "english": {
            "grammar": [
                {
                    question: "Which of these is a proper noun?",
                    options: ["dog", "London", "run", "beautiful"],
                    answer: 1
                }
            ],
            "vocabulary": [
                {
                    question: "What does 'benevolent' mean?",
                    options: ["Kind", "Angry", "Confused", "Intelligent"],
                    answer: 0
                }
            ]
        }
    };

    // Initialize chatbot
    addBotMessage("Welcome to the Quiz Bot! Say or type 'start quiz' to begin.");
    
    // Event listeners
    sendBtn.addEventListener('click', processInput);
    userInput.addEventListener('keypress', (e) => e.key === 'Enter' && processInput());
    voiceBtn.addEventListener('click', toggleVoiceInput);

    function processInput() {
        const input = userInput.value.trim();
        if (input) {
            addUserMessage(input);
            userInput.value = '';
            handleInput(input.toLowerCase());
        }
    }

    function toggleVoiceInput() {
        if (!('webkitSpeechRecognition' in window)) {
            addBotMessage("Voice input not supported in your browser. Try Chrome or Edge.");
            return;
        }

        if (voiceBtn.classList.contains('listening')) {
            stopVoiceRecognition();
        } else {
            startVoiceRecognition();
        }
    }

    function startVoiceRecognition() {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onstart = () => {
            voiceBtn.classList.add('listening');
            voiceBtn.innerHTML = '🛑 Stop';
            addBotMessage("<i>Listening...</i>");
        };

        recognition.onresult = (e) => {
            const input = e.results[0][0].transcript;
            addUserMessage(input);
            handleInput(input.toLowerCase());
        };

        recognition.onerror = (e) => {
            addBotMessage(`Error: ${e.error}`);
            stopVoiceRecognition();
        };

        recognition.onend = stopVoiceRecognition;
        recognition.start();
    }

    function stopVoiceRecognition() {
        if (recognition) recognition.stop();
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '🎤 Speak';
    }

    function handleInput(input) {
        if (!quizState.inQuiz) {
            if (input.includes('start quiz') || input.includes('begin quiz')) {
                startQuiz();
            } else {
                addBotMessage("Say 'start quiz' to begin a quiz session.");
            }
            return;
        }

        // Quiz state handling
        if (!quizState.currentSubject) {
            selectSubject(input);
        } else if (!quizState.currentChapter) {
            selectChapter(input);
        } else {
            answerQuestion(input);
        }
    }

    function startQuiz() {
        quizState = {
            inQuiz: true,
            currentSubject: null,
            currentChapter: null,
            currentQuestion: 0,
            score: 0
        };
        
        const subjects = Object.keys(quizDatabase).join(", ");
        addBotMessage(`Great! Choose a subject: ${subjects}`);
    }

    function selectSubject(input) {
        const subject = Object.keys(quizDatabase).find(sub => 
            input.includes(sub.toLowerCase())
        );

        if (subject) {
            quizState.currentSubject = subject;
            const chapters = Object.keys(quizDatabase[subject]).join(", ");
            addBotMessage(`You chose ${subject}. Now select a chapter: ${chapters}`);
        } else {
            const subjects = Object.keys(quizDatabase).join(", ");
            addBotMessage(`Please choose one of these subjects: ${subjects}`);
        }
    }

    function selectChapter(input) {
        const chapters = Object.keys(quizDatabase[quizState.currentSubject]);
        const chapter = chapters.find(chap => 
            input.includes(chap.toLowerCase())
        );

        if (chapter) {
            quizState.currentChapter = chapter;
            quizState.currentQuestion = 0;
            quizState.score = 0;
            askQuestion();
        } else {
            addBotMessage(`Please choose one of these chapters: ${chapters.join(", ")}`);
        }
    }

    function askQuestion() {
        const questions = quizDatabase[quizState.currentSubject][quizState.currentChapter];
        
        if (quizState.currentQuestion >= questions.length) {
            endQuiz();
            return;
        }

        const questionObj = questions[quizState.currentQuestion];
        let message = `Question ${quizState.currentQuestion + 1}: ${questionObj.question}\n`;
        
        questionObj.options.forEach((option, index) => {
            message += `\n${index + 1}. ${option}`;
        });

        addBotMessage(message);
    }

    function answerQuestion(input) {
        const questions = quizDatabase[quizState.currentSubject][quizState.currentChapter];
        const currentQ = questions[quizState.currentQuestion];
        
        // Check if input contains a number (option selection)
        const numberMatch = input.match(/\d+/);
        if (numberMatch) {
            const selectedOption = parseInt(numberMatch[0]) - 1;
            
            if (selectedOption >= 0 && selectedOption < currentQ.options.length) {
                if (selectedOption === currentQ.answer) {
                    quizState.score++;
                    addBotMessage(`✅ Correct! ${currentQ.options[currentQ.answer]} is the right answer.`);
                } else {
                    addBotMessage(`❌ Incorrect. The correct answer is: ${currentQ.options[currentQ.answer]}`);
                }
                
                quizState.currentQuestion++;
                setTimeout(askQuestion, 1500);
            } else {
                addBotMessage(`Please choose a number between 1 and ${currentQ.options.length}`);
            }
        } else {
            // Check if they said the answer text
            const optionIndex = currentQ.options.findIndex(opt => 
                input.includes(opt.toLowerCase())
            );
            
            if (optionIndex !== -1) {
                if (optionIndex === currentQ.answer) {
                    quizState.score++;
                    addBotMessage(`✅ Correct! ${currentQ.options[currentQ.answer]} is the right answer.`);
                } else {
                    addBotMessage(`❌ Incorrect. The correct answer is: ${currentQ.options[currentQ.answer]}`);
                }
                
                quizState.currentQuestion++;
                setTimeout(askQuestion, 1500);
            } else {
                addBotMessage(`Please respond with the option number (1-${currentQ.options.length}) or say the answer`);
            }
        }
    }

    function endQuiz() {
        const totalQuestions = quizDatabase[quizState.currentSubject][quizState.currentChapter].length;
        const percentage = Math.round((quizState.score / totalQuestions) * 100);
        
        addBotMessage(
            `Quiz completed! Your score: ${quizState.score}/${totalQuestions} (${percentage}%)\n\n` +
            `Say 'start quiz' to begin a new quiz.`
        );
        
        quizState.inQuiz = false;
    }

    // Helper functions
    function addUserMessage(message) {
        addMessage(message, 'user');
    }

    function addBotMessage(message) {
        addMessage(message, 'bot');
    }

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        
        // Preserve newlines in the message
        messageElement.innerHTML = message.replace(/\n/g, '<br>');
        
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
        
        // Speak bot messages
        if (sender === 'bot' && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(message.replace(/\n/g, ', '));
            window.speechSynthesis.speak(utterance);
        }
    }
});
