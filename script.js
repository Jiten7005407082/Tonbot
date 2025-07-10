let progressInterval;
function animateProgressBar(duration = 10000) {
  const bar = document.getElementById('progressBar');
  let startTime = Date.now();
  clearInterval(progressInterval);
  progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const percent = Math.min((elapsed / duration) * 100, 100);
    bar.style.width = percent + '%';
    if (percent >= 100) clearInterval(progressInterval);
  }, 100);
}
const userText = document.getElementById("userText");
const botResponse = document.getElementById("botResponse");
const statusText = document.getElementById("status");
const wakeButton = document.getElementById("wakeButton");

const chatResponses = {
  "hello": "Hi there!",
  "what is your name": "I am RobotTon, your smart voice assistant.",
  "how are you": "I'm doing great. How about you?",
  "741 ": "I'm doing great. How about you?",
  "who created you": "I was created by Thongam jiten!",
  "bye": "Goodbye! See you soon."
};

// ✅ 50 electricity quiz questions
const quiz = [
  { question: "What is electricity?", answer: "Electricity is the flow of electric charge through a conductor." },
  { question: "What is the unit of electric current?", answer: "The unit of electric current is the ampere." },
  { question: "What is Ohm's Law?", answer: "Ohm's Law states that voltage is equal to current times resistance." },
  { question: "What is the unit of resistance?", answer: "The unit of resistance is the ohm." },
  { question: "Who discovered electricity?", answer: "Benjamin Franklin is credited with discovering electricity." },
  { question: "What is a conductor?", answer: "A conductor is a material that allows the flow of electric current." },
  { question: "What is an insulator?", answer: "An insulator is a material that resists the flow of electric current." },
  { question: "What is voltage?", answer: "Voltage is the electric potential difference between two points." },
  { question: "What is the SI unit of voltage?", answer: "The SI unit of voltage is the volt." },
  { question: "What is the device used to measure current?", answer: "An ammeter is used to measure current." },
  { question: "What is the device used to measure voltage?", answer: "A voltmeter is used to measure voltage." },
  { question: "What is the device used to measure resistance?", answer: "An ohmmeter is used to measure resistance." },
  { question: "What is a circuit?", answer: "A circuit is a closed loop that allows current to flow." },
  { question: "What is a short circuit?", answer: "A short circuit is an unintended low-resistance path in a circuit." },
  { question: "What is alternating current?", answer: "Alternating current changes direction periodically." },
  { question: "What is direct current?", answer: "Direct current flows in one direction only." },
  { question: "What is a fuse?", answer: "A fuse is a safety device that protects circuits from overcurrent." },
  { question: "What is a capacitor?", answer: "A capacitor stores electrical energy in an electric field." },
  { question: "What is an inductor?", answer: "An inductor stores energy in a magnetic field." },
  { question: "What is electric power?", answer: "Electric power is the rate at which electrical energy is transferred." },
  { question: "What is the unit of electric power?", answer: "The unit of electric power is the watt." },
  { question: "What is an electric motor?", answer: "An electric motor converts electrical energy into mechanical energy." },
  { question: "What is an electric generator?", answer: "An electric generator converts mechanical energy into electrical energy." },
  { question: "What is a transformer?", answer: "A transformer changes the voltage level in an AC circuit." },
  { question: "What is grounding?", answer: "Grounding connects electrical circuits to the earth for safety." },
  { question: "What is a semiconductor?", answer: "A semiconductor conducts electricity under certain conditions." },
  { question: "What is an LED?", answer: "An LED is a light-emitting diode." },
  { question: "What is resistance?", answer: "Resistance is the opposition to the flow of electric current." },
  { question: "What affects resistance in a wire?", answer: "Length, thickness, and material affect resistance in a wire." },
  { question: "What is a diode?", answer: "A diode allows current to flow in only one direction." },
  { question: "What is the function of a switch?", answer: "A switch opens or closes an electric circuit." },
  { question: "What is a battery?", answer: "A battery stores and provides electrical energy." },
  { question: "What is the function of a resistor?", answer: "A resistor reduces current flow and lowers voltage in a circuit." },
  { question: "What is a multimeter?", answer: "A multimeter measures voltage, current, and resistance." },
  { question: "What is a volt?", answer: "A volt is the unit of electric potential difference." },
  { question: "What is an ampere?", answer: "An ampere is the unit of electric current." },
  { question: "What is an ohm?", answer: "An ohm is the unit of electrical resistance." },
  { question: "What is the symbol for resistance?", answer: "The symbol for resistance is omega (Ω)." },
  { question: "What is the formula for electric power?", answer: "Electric power equals voltage times current." },
  { question: "What does a circuit breaker do?", answer: "A circuit breaker protects circuits by interrupting flow during overload." },
  { question: "What is electromagnetism?", answer: "Electromagnetism is the interaction of electric and magnetic fields." },
  { question: "What is static electricity?", answer: "Static electricity is the build-up of electric charge on a surface." },
  { question: "What is a conductor made of?", answer: "A conductor is usually made of copper or aluminum." },
  { question: "Why are insulators important?", answer: "Insulators prevent electric shocks and protect circuits." },
  { question: "What does AC stand for?", answer: "AC stands for alternating current." },
  { question: "What does DC stand for?", answer: "DC stands for direct current." },
  { question: "What is a load in a circuit?", answer: "A load uses electrical energy to do work." },
  { question: "What is energy consumption measured in?", answer: "Energy consumption is measured in kilowatt-hours." },
  { question: "What is an electric field?", answer: "An electric field is the area around a charged particle where force is felt." }
];

let currentQuestion = 0;
let isQuizMode = false;
let isListening = false;
let score = 0;

function speak(text) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    utter.pitch = 1;
    utter.rate = 1;
    utter.volume = 1;

    utter.onerror = (e) => {
      console.error("Speech error:", e.error);
      alert("⚠️ TonBot tried to speak but failed.\nCheck your volume or browser.");
    };

    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    } catch (err) {
      console.error("Speak error:", err);
      alert("⚠️ Speech synthesis failed.");
    }
  } else {
    alert("⚠️ Your browser does not support speech output.");
  }
}

function askQuizQuestion() {
  if (currentQuestion < quiz.length) {
    const q = quiz[currentQuestion].question;
    botResponse.innerText = "Bot (Quiz): " + q;
    speak(q);
  } else {
    isQuizMode = false;
    const message = `Quiz over! Your score is ${score} out of ${quiz.length}.`;
    botResponse.innerText = "Bot: " + message;
    speak(message);
    score = 0;
  }
}

function checkQuizAnswer(answer) {
  const correct = quiz[currentQuestion].answer.toLowerCase().trim();
  const userAns = answer.toLowerCase().trim();

  if (userAns === correct) {
    score++;
    speak("Correct!");
    botResponse.innerText = "Bot: Correct!";
  } else {
    const correctAnswer = quiz[currentQuestion].answer;
    speak("Wrong. The correct answer is: " + correctAnswer);
    botResponse.innerText = "Bot: Wrong. The correct answer is: " + correctAnswer;
  }
  currentQuestion++;
  setTimeout(askQuizQuestion, 4000);
}

function handleChat(input) {
  const cleaned = input.toLowerCase().trim();

  if (cleaned === "start quiz") {
    isQuizMode = true;
    currentQuestion = 0;
    score = 0;
    speak("Starting quiz.");
    askQuizQuestion();
    return;
  }

  const reply = chatResponses[cleaned] || "Sorry, I don't understand that yet.";
  botResponse.innerText = "Bot: " + reply;
  speak(reply);
}

function processSpeech(transcript) {
  const spoken = transcript.toLowerCase().trim();
  console.log("Heard:", spoken);
  userText.innerText = "You: " + spoken;

  if (!isListening && spoken.includes("ton")) {
    isListening = true;
    statusText.innerText = "✅ TonBot is awake!";
    speak("Let us chat. Say 'start quiz' to begin.");
    return;
  }

  if (isListening) {
    if (isQuizMode) {
      checkQuizAnswer(spoken);
    } else {
      handleChat(spoken);
    }
  }
}

function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("⚠️ Speech recognition not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;

  let recognitionTimeout;

  recognition.onstart = () => {
    recognitionTimeout = setTimeout(() => {
      recognition.stop(); // Stop after 10 seconds of silence
    }, 10000);
  };

  recognition.onresult = (event) => {
    clearTimeout(recognitionTimeout);
    const transcript = event.results[0][0].transcript;
    processSpeech(transcript);
  };

  recognition.onerror = (event) => {
    clearTimeout(recognitionTimeout);
    console.error("Recognition error:", event.error);
    statusText.innerText = "Error: " + event.error;
  };

  recognition.onend = () => {
    clearTimeout(recognitionTimeout);
    setTimeout(startSpeechRecognition, 800);
  };

  recognition.start();
}

wakeButton.addEventListener("click", () => {
  if (!isListening) {
    isListening = true;
    statusText.innerText = "✅ Listening after button click";
    speak("Let us chat. Say 'start quiz' to begin.");
  }
});

window.onload = () => {
  speak("Say Ton to activate me, or click the button.");
  startSpeechRecognition();
};
