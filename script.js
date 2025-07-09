const userText = document.getElementById('userText');
const botResponse = document.getElementById('botResponse');

// Chat responses
const chatResponses = {
  "hello": "Hi there!",
  "what is your name": "I am TonBot, your smart voice assistant.",
  "how are you": "I'm doing great. How about you?",
  "who created you": "I was created by Jiten!",
  "bye": "Goodbye! See you soon."
};

// Quiz questions
const quiz = [
  { question: "What is electricity?", answer: "Electricity is the flow of electric charge through a conductor." },
  { question: "What is the unit of electric current?", answer: "The unit of electric current is the ampere." },
  { question: "What device measures electric current?", answer: "An ammeter measures electric current." },
  { question: "What is the SI unit of resistance?", answer: "The SI unit of resistance is the ohm." },
  { question: "What does a voltmeter measure?", answer: "A voltmeter measures electric potential difference or voltage." },
  { question: "What is a conductor?", answer: "A conductor is a material that allows the flow of electric current." },
  { question: "What is an insulator?", answer: "An insulator is a material that does not allow electric current to flow." },
  { question: "Name a good conductor of electricity.", answer: "Copper is a good conductor of electricity." },
  { question: "Name a good insulator.", answer: "Rubber is a good insulator." },
  { question: "What is Ohm's Law?", answer: "Ohm's Law states that voltage is equal to current times resistance." },
  { question: "What is the symbol for resistance?", answer: "The symbol for resistance is R." },
  { question: "What is the formula for power in an electric circuit?", answer: "The formula for power is voltage times current." },
  { question: "What is the unit of electrical power?", answer: "The unit of electrical power is the watt." },
  { question: "What is a circuit?", answer: "A circuit is a closed path through which electricity flows." },
  { question: "What is a series circuit?", answer: "A series circuit is one where components are connected end to end." },
  { question: "What is a parallel circuit?", answer: "A parallel circuit is one where components are connected across the same voltage source." },
  { question: "What is an electric cell?", answer: "An electric cell is a device that converts chemical energy into electrical energy." },
  { question: "What is a battery?", answer: "A battery is a group of electric cells connected together." },
  { question: "What is electric charge?", answer: "Electric charge is a property of matter that causes it to experience a force in an electric field." },
  { question: "What is the unit of electric charge?", answer: "The unit of electric charge is the coulomb." },
  { question: "What is static electricity?", answer: "Static electricity is the build-up of electric charge on a surface." },
  { question: "What is current electricity?", answer: "Current electricity is the flow of electric charge in a conductor." },
  { question: "What is alternating current?", answer: "Alternating current is a current that reverses direction periodically." },
  { question: "What is direct current?", answer: "Direct current is a current that flows in one direction only." },
  { question: "Who discovered electricity?", answer: "Benjamin Franklin is credited with discovering electricity through his kite experiment." },
  { question: "What is an electric fuse?", answer: "An electric fuse is a safety device that breaks the circuit when current exceeds a safe value." },
  { question: "What is a short circuit?", answer: "A short circuit is a fault where current bypasses the load and flows directly, often causing damage." },
  { question: "What is earthing?", answer: "Earthing is the process of transferring electric charge directly to the ground for safety." },
  { question: "What is a circuit breaker?", answer: "A circuit breaker is a device that automatically stops the flow of current in a circuit." },
  { question: "What is a resistor?", answer: "A resistor is a component that resists the flow of electric current." },
  { question: "What is an electric motor?", answer: "An electric motor is a device that converts electrical energy into mechanical energy." },
  { question: "What is an electric generator?", answer: "An electric generator is a device that converts mechanical energy into electrical energy." },
  { question: "What is a transformer?", answer: "A transformer is a device that increases or decreases AC voltage." },
  { question: "What is the function of a capacitor?", answer: "A capacitor stores electrical energy in an electric field." },
  { question: "What is an electric circuit diagram?", answer: "An electric circuit diagram is a visual representation of an electrical circuit using symbols." },
  { question: "What is the symbol for a battery?", answer: "The symbol for a battery is a series of long and short parallel lines." },
  { question: "What is a diode?", answer: "A diode is a device that allows current to flow in one direction only." },
  { question: "What is a light-emitting diode?", answer: "A light-emitting diode is a diode that emits light when current flows through it." },
  { question: "What is the national unit of electricity consumption?", answer: "The national unit of electricity consumption is kilowatt-hour." },
  { question: "What is the commercial unit of electrical energy?", answer: "The commercial unit of electrical energy is kilowatt-hour." },
  { question: "How is electrical energy calculated?", answer: "Electrical energy is calculated by multiplying power by time." },
  { question: "What is the danger of electric shock?", answer: "Electric shock can cause injury or death due to the passage of current through the body." },
  { question: "What precautions should be taken with electricity?", answer: "We should never touch electrical devices with wet hands and always use insulated tools." },
  { question: "Why do birds not get shocked on electric wires?", answer: "Birds do not get shocked because there is no potential difference across their bodies." },
  { question: "What is a multimeter?", answer: "A multimeter is a tool used to measure voltage, current, and resistance." },
  { question: "What is a rheostat?", answer: "A rheostat is a variable resistor used to control current." },
  { question: "What is the function of a switch in a circuit?", answer: "A switch opens or closes an electrical circuit to control the flow of current." },
  { question: "What is an electromagnet?", answer: "An electromagnet is a coil of wire that acts like a magnet when current flows through it." },
  { question: "What is the role of a fuse in a house?", answer: "A fuse protects household wiring and appliances from overcurrent and short circuits." }
];

let currentQuestion = 0;
let isQuizMode = false;
let isListening = false;

function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  synth.speak(utter);
}

function askQuizQuestion() {
  if (currentQuestion < quiz.length) {
    const q = quiz[currentQuestion].question;
    botResponse.innerText = "Bot (Quiz): " + q;
    speak(q);
  } else {
    isQuizMode = false;
    botResponse.innerText = "Bot: Quiz over! You can now chat with me.";
    speak("Quiz over! You can now chat with me.");
  }
}

function checkQuizAnswer(userAnswer) {
  const correct = quiz[currentQuestion].answer.toLowerCase().trim();
  const response = userAnswer.toLowerCase().trim();

  if (response === correct) {
    botResponse.innerText = "Bot: Correct!";
    speak("Correct!");
    currentQuestion++;
    setTimeout(askQuizQuestion, 1500);
  } else {
    botResponse.innerText = "Bot: Wrong. Try again.";
    speak("Wrong answer. Try again.");
  }
}

function handleChat(input) {
  const cleaned = input.toLowerCase().trim();

  if (cleaned === "start quiz") {
    isQuizMode = true;
    currentQuestion = 0;
    speak("Starting the quiz.");
    askQuizQuestion();
    return;
  }

  const reply = chatResponses[cleaned] || "Sorry, I don't understand that yet.";
  botResponse.innerText = "Bot: " + reply;
  speak(reply);
}

function processSpeech(transcript) {
  const spoken = transcript.toLowerCase().trim();
  userText.innerText = "You: " + spoken;

  if (!isListening && spoken.includes("ton")) {
    isListening = true;
    speak("Let us chat. Say 'start quiz' to begin the quiz.");
  } else if (isListening) {
    if (isQuizMode) {
      checkQuizAnswer(spoken);
    } else {
      handleChat(spoken);
    }
  }
}

function startWakeListener() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    processSpeech(transcript);
  };

  recognition.onerror = (event) => {
    console.log("Error: " + event.error);
  };

  recognition.onend = () => {
    setTimeout(startWakeListener, 500);
  };

  recognition.start();
}

window.onload = () => {
  speak("Say 'Ton' to activate me.");
  startWakeListener();
};
