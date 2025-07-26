let quizData = {};
let userName = "";
let currentSubject = "";
let currentSubclass = "";
let currentChapter = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let stage = "intro"; // intro → subject → subclass → chapter → quiz → score

// ✅ Load questions.json
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        quizData = await response.json();
        console.log("✅ Questions loaded", quizData);
        botReply("👋 Hello! What is your name?");
    } catch (err) {
        console.error("❌ Failed to load questions.json", err);
        botReply("❌ Could not load quiz data.");
    }
}
loadQuestions();

// ✅ Send bot reply to chat
function botReply(text) {
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<div class='bot'>${text}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ Send user message to chat
function userReply(text) {
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<div class='user'>${text}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ Main user input handler
function handleUserInput() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();
    if (!message) return;
    userReply(message);
    input.value = "";

    if (stage === "intro") {
        userName = message;
        botReply(`Hi ${userName}! 👋 What can I do for you today?`);
        stage = "menu";
        return;
    }

    if (stage === "menu") {
        if (message.toLowerCase().includes("iq")) {
            botReply("Great! Which subject do you want to test? \n👉 Science, Math, Social Science, English");
            stage = "subject";
        } else {
            botReply("You can say: *I want to test my IQ* to start a quiz.");
        }
        return;
    }

    if (stage === "subject") {
        let subj = message.toLowerCase();
        if (subj.includes("science")) {
            currentSubject = "Science";
            botReply("Which subclass do you want? \n👉 Physics, Chemistry, Biology");
            stage = "subclass";
        } else if (subj.includes("math")) {
            currentSubject = "Math";
            botReply("Math has no subclasses. Here are the chapters:\n" + listChapters("Math"));
            stage = "chapter";
        } else if (subj.includes("social")) {
            currentSubject = "Social Science";
            botReply("Choose a subclass:\n👉 History, Civics, Geography");
            stage = "subclass";
        } else if (subj.includes("english")) {
            currentSubject = "English";
            botReply("Choose a subclass:\n👉 Grammar, Literature");
            stage = "subclass";
        } else {
            botReply("Please choose: Science, Math, Social Science, or English.");
        }
        return;
    }

    if (stage === "subclass") {
        currentSubclass = message;
        botReply(`Great! Choose a chapter from:\n${listChapters(currentSubject, currentSubclass)}`);
        stage = "chapter";
        return;
    }

    if (stage === "chapter") {
        currentChapter = message;
        if (quizData[currentChapter]) {
            botReply(`Starting quiz on *${currentChapter}* 📘`);
            startQuiz(currentChapter);
        } else {
            botReply("❌ Chapter not found. Please type the chapter name exactly as listed.");
        }
        return;
    }

    if (stage === "quiz") {
        checkAnswer(message);
        return;
    }

    if (stage === "score") {
        if (message.toLowerCase() === "yes") {
            botReply("✅ Let's go again! Which subject do you want to test? \n👉 Science, Math, Social Science, English");
            stage = "subject";
        } else {
            botReply("🎉 Thank you for playing! Bye 👋");
            stage = "done";
        }
    }
}

// ✅ Helper: List chapters based on subject/subclass
function listChapters(subject, subclass = "") {
    let chapters = Object.keys(quizData);
    let filtered = [];

    // Group chapters logically
    if (subject === "Science") {
        if (subclass.toLowerCase() === "physics") {
            filtered = [
                "Light – Reflection & Refraction",
                "Human Eye & Colourful World",
                "Electricity",
                "Magnetic Effects of Electric Current",
                "Sources of Energy"
            ];
        } else if (subclass.toLowerCase() === "chemistry") {
            filtered = [
                "Chemical Reactions & Equations",
                "Acids, Bases & Salts",
                "Metals & Non‑Metals",
                "Carbon & Its Compounds",
                "Periodic Classification of Elements"
            ];
        } else if (subclass.toLowerCase() === "biology") {
            filtered = [
                "Life Processes",
                "Control & Coordination",
                "How Do Organisms Reproduce?",
                "Heredity & Evolution",
                "Our Environment",
                "Management of Natural Resources"
            ];
        }
    } else if (subject === "Math") {
        filtered = chapters.filter(ch => [
            "Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables",
            "Quadratic Equations", "Arithmetic Progression", "Triangles",
            "Coordinate Geometry", "Introduction to Trigonometry", "Some Applications of Trigonometry",
            "Circles", "Constructions", "Surface Areas & Volumes", "Statistics", "Probability"
        ].includes(ch));
    } else if (subject === "Social Science") {
        if (subclass.toLowerCase() === "history") filtered = ["History"];
        if (subclass.toLowerCase() === "civics") filtered = ["Civics"];
        if (subclass.toLowerCase() === "geography") filtered = ["Geography"];
    } else if (subject === "English") {
        if (subclass.toLowerCase() === "grammar") filtered = ["English Grammar"];
        if (subclass.toLowerCase() === "literature") filtered = ["English Literature"];
    }

    return filtered.join(", ");
}

// ✅ Quiz functions
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
        botReply(`Q${currentQuestionIndex + 1}: ${q.q}\nOptions: ${q.options.join(", ")}`);
    } else {
        botReply(`🎯 Quiz finished! Your score: ${score}/${currentQuestions.length}`);
        botReply("Do you want another quiz? (Yes/No)");
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
