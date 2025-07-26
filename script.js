let quizData = {};
let userName = "";
let currentSubject = "";
let currentSubclass = "";
let currentChapter = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let stage = "loading";

// ✅ Load questions.json first
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        quizData = await response.json();
        console.log("✅ Questions loaded");
        botReply("👋 Hello! What is your name?");
        stage = "intro";
    } catch (err) {
        console.error("❌ Failed to load questions.json", err);
        botReply("❌ Could not load quiz data.");
    }
}
loadQuestions();

// ✅ Helper: Bot reply text only
function botReply(text) {
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<div class='bot'>${text}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ Helper: Bot reply with clickable buttons
function botReplyOptions(text, options) {
    let chatBox = document.getElementById("chatBox");
    let buttons = options.map(opt => `<button class="option-btn" onclick="selectOption('${opt}')">${opt}</button>`).join(" ");
    chatBox.innerHTML += `<div class='bot'>${text}<br>${buttons}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ When user clicks a button option
function selectOption(choice) {
    userReply(choice);
    processMessage(choice);
}

// ✅ Helper: User reply
function userReply(text) {
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<div class='user'>${text}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ Manual send (for name or free text)
function handleUserInput() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();
    if (!message) return;
    userReply(message);
    input.value = "";
    processMessage(message);
}

// ✅ Core logic
function processMessage(message) {
    if (stage === "loading") {
        botReply("⏳ Please wait, loading quiz data...");
        return;
    }

    if (stage === "intro") {
        userName = message;
        botReply(`Hi ${userName}! 👋 What can I do for you today?`);
        botReplyOptions("👉 Choose:", ["I want to test my IQ"]);
        stage = "menu";
        return;
    }

    if (stage === "menu") {
        if (message.toLowerCase().includes("iq")) {
            botReplyOptions("Great! Which subject do you want to test?", ["Science", "Math", "Social Science", "English"]);
            stage = "subject";
        } else {
            botReply("You can tap: *I want to test my IQ* to start.");
        }
        return;
    }

    if (stage === "subject") {
        let subj = message.toLowerCase();
        if (subj.includes("science")) {
            currentSubject = "Science";
            botReplyOptions("Which subclass do you want?", ["Physics", "Chemistry", "Biology"]);
            stage = "subclass";
        } else if (subj.includes("math")) {
            currentSubject = "Math";
            botReplyOptions("Math has no subclasses. Choose a chapter:", listChapterArray("Math"));
            stage = "chapter";
        } else if (subj.includes("social")) {
            currentSubject = "Social Science";
            botReplyOptions("Choose a subclass:", ["History", "Civics", "Geography"]);
            stage = "subclass";
        } else if (subj.includes("english")) {
            currentSubject = "English";
            botReplyOptions("Choose a subclass:", ["Grammar", "Literature"]);
            stage = "subclass";
        }
        return;
    }

    if (stage === "subclass") {
        currentSubclass = message;
        botReplyOptions(`Great! Choose a chapter:`, listChapterArray(currentSubject, currentSubclass));
        stage = "chapter";
        return;
    }

    if (stage === "chapter") {
        currentChapter = message;
        if (quizData[currentChapter]) {
            botReply(`🎯 Starting quiz on *${currentChapter}*`);
            startQuiz(currentChapter);
        } else {
            botReply("❌ Chapter not found.");
        }
        return;
    }

    if (stage === "quiz") {
        checkAnswer(message);
        return;
    }

    if (stage === "score") {
        if (message.toLowerCase() === "yes") {
            botReplyOptions("✅ Let's go again! Which subject do you want?", ["Science", "Math", "Social Science", "English"]);
            stage = "subject";
        } else {
            botReply("🎉 Thank you for playing! Bye 👋");
            stage = "done";
        }
    }
}

// ✅ Make chapter list into array for buttons
function listChapterArray(subject, subclass = "") {
    if (subject === "Science") {
        if (subclass && subclass.toLowerCase() === "physics") {
            return ["Light – Reflection & Refraction", "Human Eye & Colourful World", "Electricity", "Magnetic Effects of Electric Current", "Sources of Energy"];
        } else if (subclass && subclass.toLowerCase() === "chemistry") {
            return ["Chemical Reactions & Equations", "Acids, Bases & Salts", "Metals & Non‑Metals", "Carbon & Its Compounds", "Periodic Classification of Elements"];
        } else if (subclass && subclass.toLowerCase() === "biology") {
            return ["Life Processes", "Control & Coordination", "How Do Organisms Reproduce?", "Heredity & Evolution", "Our Environment", "Management of Natural Resources"];
        }
    } else if (subject === "Math") {
        return ["Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations", "Arithmetic Progression", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry", "Some Applications of Trigonometry", "Circles", "Constructions", "Surface Areas & Volumes", "Statistics", "Probability"];
    } else if (subject === "Social Science") {
        if (subclass.toLowerCase() === "history") return ["History"];
        if (subclass.toLowerCase() === "civics") return ["Civics"];
        if (subclass.toLowerCase() === "geography") return ["Geography"];
    } else if (subject === "English") {
        if (subclass.toLowerCase() === "grammar") return ["English Grammar"];
        if (subclass.toLowerCase() === "literature") return ["English Literature"];
    }
    return [];
}

// ✅ Quiz
function startQuiz(chapter) {
    currentQuestions = quizData[chapter];
    currentQuestionIndex = 0;
    score = 0;
    stage = "quiz";
    askQuestion();
}

function askQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        let q = currentQuestions[currentQuestionIndex];
        botReplyOptions(`Q${currentQuestionIndex + 1}: ${q.q}`, q.options);
    } else {
        botReply(`🎯 Quiz finished! Your score: ${score}/${currentQuestions.length}`);
        botReplyOptions("Do you want another quiz?", ["Yes", "No"]);
        stage = "score";
    }
}

function checkAnswer(userAnswer) {
    let correct = currentQuestions[currentQuestionIndex].answer;
    if (userAnswer.toLowerCase() === correct.toLowerCase()) {
        score++;
        botReply("✅ Correct!");
    } else {
        botReply(`❌ Wrong! Correct answer: ${correct}`);
    }
    currentQuestionIndex++;
    askQuestion();
}
