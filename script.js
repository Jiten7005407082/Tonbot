// Quiz questions database
const quizDatabase = {
    physics: {
        "Light": [
            {
                question: "What is the SI unit of power of a lens?",
                options: ["Dioptre", "Volt", "Watt", "Newton"],
                answer: 0,
                explanation: "The SI unit of power of a lens is dioptre, which is equal to the reciprocal of focal length in meters."
            },
            {
                question: "Which mirror always produces a virtual, erect and diminished image?",
                options: ["Concave mirror", "Convex mirror", "Plane mirror", "Spherical mirror"],
                answer: 1,
                explanation: "A convex mirror always produces a virtual, erect and diminished image regardless of the position of the object."
            },
            {
                question: "The refractive index of water is 1.33. What does this mean?",
                options: [
                    "Light travels 1.33 times faster in water than in vacuum",
                    "Light travels 1.33 times slower in water than in vacuum",
                    "Water is 1.33 times denser than air",
                    "Light bends 1.33 degrees when entering water"
                ],
                answer: 1,
                explanation: "Refractive index indicates how much light slows down in a medium compared to vacuum. A refractive index of 1.33 means light travels 1.33 times slower in water than in vacuum."
            },
            {
                question: "What is the focal length of a plane mirror?",
                options: ["Zero", "Infinity", "Equal to the object distance", "Equal to the image distance"],
                answer: 1,
                explanation: "A plane mirror can be considered as a spherical mirror with an infinite radius of curvature, hence its focal length is infinity."
            },
            {
                question: "Which phenomenon is responsible for the twinkling of stars?",
                options: ["Reflection", "Refraction", "Atmospheric refraction", "Dispersion"],
                answer: 2,
                explanation: "The twinkling of stars is due to atmospheric refraction, where starlight undergoes continuous refraction as it passes through layers of air with varying densities."
            }
        ],
        "Electricity": [
            {
                question: "What is the SI unit of electric current?",
                options: ["Volt", "Ampere", "Ohm", "Coulomb"],
                answer: 1,
                explanation: "The SI unit of electric current is ampere, named after the French physicist André-Marie Ampère."
            },
            {
                question: "Which law states that the current through a conductor is directly proportional to the voltage?",
                options: ["Coulomb's Law", "Ohm's Law", "Faraday's Law", "Joule's Law"],
                answer: 1,
                explanation: "Ohm's Law states that the current through a conductor between two points is directly proportional to the voltage across the two points, provided the temperature remains constant."
            },
            {
                question: "What is the resistance of a conductor if the current flowing through it is 0.5 A and the voltage is 10 V?",
                options: ["5 Ω", "20 Ω", "0.05 Ω", "50 Ω"],
                answer: 1,
                explanation: "Using Ohm's Law: R = V/I = 10/0.5 = 20 Ω."
            },
            {
                question: "Which of the following is a good conductor of electricity?",
                options: ["Rubber", "Glass", "Copper", "Plastic"],
                answer: 2,
                explanation: "Copper is a metal and has free electrons that can move easily, making it a good conductor of electricity."
            },
            {
                question: "What is the commercial unit of electrical energy?",
                options: ["Joule", "Watt", "Kilowatt-hour", "Volt"],
                answer: 2,
                explanation: "The commercial unit of electrical energy is kilowatt-hour (kWh), which is the energy consumed by a 1 kW device in one hour."
            }
        ],
        "Magnetism": [
            {
                question: "Which rule is used to determine the direction of magnetic field around a straight current-carrying conductor?",
                options: ["Fleming's left-hand rule", "Fleming's right-hand rule", "Right-hand thumb rule", "Maxwell's cork screw rule"],
                answer: 2,
                explanation: "The right-hand thumb rule is used to determine the direction of magnetic field around a straight current-carrying conductor."
            },
            {
                question: "What is the SI unit of magnetic field strength?",
                options: ["Weber", "Tesla", "Henry", "Gauss"],
                answer: 1,
                explanation: "The SI unit of magnetic field strength is Tesla, named after the inventor Nikola Tesla."
            }
        ],
        "Energy": [
            {
                question: "Which of the following is a renewable source of energy?",
                options: ["Coal", "Natural gas", "Solar energy", "Nuclear energy"],
                answer: 2,
                explanation: "Solar energy is a renewable source of energy as it is replenished naturally and continuously."
            },
            {
                question: "What is the main component of biogas?",
                options: ["Ethane", "Methane", "Propane", "Butane"],
                answer: 1,
                explanation: "The main component of biogas is methane, which makes up about 50-75% of its composition."
            }
        ]
    },
    chemistry: {
        "Reactions": [
            {
                question: "What is the chemical formula of rust?",
                options: ["FeO", "Fe₂O₃", "Fe₃O₄", "Fe₂O₃·xH₂O"],
                answer: 3,
                explanation: "Rust is hydrated ferric oxide with the chemical formula Fe₂O₃·xH₂O."
            },
            {
                question: "Which of the following is a decomposition reaction?",
                options: [
                    "2H₂ + O₂ → 2H₂O",
                    "CaO + H₂O → Ca(OH)₂",
                    "2FeSO₄ → Fe₂O₃ + SO₂ + SO₃",
                    "Zn + CuSO₄ → ZnSO₄ + Cu"
                ],
                answer: 2,
                explanation: "Decomposition reactions involve breaking down a compound into two or more simpler substances. 2FeSO₄ → Fe₂O₃ + SO₂ + SO₃ is a decomposition reaction."
            },
            {
                question: "What type of reaction is represented by: NaOH + HCl → NaCl + H₂O",
                options: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Double displacement reaction"],
                answer: 3,
                explanation: "This is a double displacement reaction where the ions of the two compounds exchange places."
            }
        ],
        "Acids": [
            {
                question: "What is the pH range of acidic solutions?",
                options: ["0-7", "7-14", "Exactly 7", "1-10"],
                answer: 0,
                explanation: "Acidic solutions have pH values less than 7, with 0 being the most acidic."
            },
            {
                question: "Which of the following is a strong acid?",
                options: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Carbonic acid"],
                answer: 2,
                explanation: "Hydrochloric acid (HCl) is a strong acid as it completely dissociates in water."
            },
            {
                question: "What is the chemical name of baking soda?",
                options: ["Sodium carbonate", "Sodium bicarbonate", "Calcium carbonate", "Sodium hydroxide"],
                answer: 1,
                explanation: "The chemical name of baking soda is sodium bicarbonate (NaHCO₃)."
            }
        ],
        "Metals": [
            {
                question: "Which metal is liquid at room temperature?",
                options: ["Sodium", "Mercury", "Aluminum", "Copper"],
                answer: 1,
                explanation: "Mercury is the only metal that is liquid at room temperature."
            },
            {
                question: "Which of the following is the most reactive metal?",
                options: ["Gold", "Silver", "Potassium", "Copper"],
                answer: 2,
                explanation: "Potassium is the most reactive metal among the options given. It reacts vigorously with water and air."
            }
        ],
        "Carbon": [
            {
                question: "How many covalent bonds can a carbon atom form?",
                options: ["1", "2", "3", "4"],
                answer: 3,
                explanation: "A carbon atom has 4 valence electrons, so it can form 4 covalent bonds to achieve a stable octet."
            },
            {
                question: "Which of the following is not an allotrope of carbon?",
                options: ["Graphite", "Diamond", "Ozone", "Fullerene"],
                answer: 2,
                explanation: "Ozone is an allotrope of oxygen, not carbon. Graphite, diamond, and fullerene are all allotropes of carbon."
            }
        ]
    },
    biology: {
        "Life": [
            {
                question: "Which organelle is known as the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Chloroplast", "Golgi apparatus"],
                answer: 1,
                explanation: "Mitochondria are known as the powerhouse of the cell because they produce ATP through cellular respiration."
            },
            {
                question: "What is the primary function of white blood cells?",
                options: [
                    "Oxygen transport",
                    "Blood clotting",
                    "Immune defense",
                    "Nutrient transport"
                ],
                answer: 2,
                explanation: "White blood cells (leukocytes) are part of the immune system and help fight infections and foreign substances."
            },
            {
                question: "Which process in plants converts light energy into chemical energy?",
                options: ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
                answer: 2,
                explanation: "Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose."
            }
        ],
        "Control": [
            {
                question: "Which part of the brain is responsible for balance and coordination?",
                options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
                answer: 1,
                explanation: "The cerebellum is responsible for maintaining balance, posture, and coordination of voluntary movements."
            },
            {
                question: "What is the functional unit of the nervous system?",
                options: ["Brain", "Spinal cord", "Neuron", "Nephron"],
                answer: 2,
                explanation: "The neuron is the fundamental unit of the nervous system that transmits nerve impulses."
            },
            {
                question: "Which hormone regulates blood sugar levels?",
                options: ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"],
                answer: 1,
                explanation: "Insulin, produced by the pancreas, regulates blood sugar levels by facilitating the uptake of glucose by cells."
            }
        ],
        "Reproduction": [
            {
                question: "What is the male gamete in plants?",
                options: ["Ovule", "Pollen", "Stigma", "Style"],
                answer: 1,
                explanation: "Pollen is the male gamete in plants that fertilizes the ovule (female gamete)."
            },
            {
                question: "Which method of reproduction produces genetically identical offspring?",
                options: ["Sexual reproduction", "Asexual reproduction", "Binary fission", "Both 2 and 3"],
                answer: 3,
                explanation: "Both asexual reproduction and binary fission produce genetically identical offspring as there is no genetic recombination."
            }
        ],
        "Heredity": [
            {
                question: "Who is known as the father of genetics?",
                options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"],
                answer: 1,
                explanation: "Gregor Mendel is known as the father of genetics for his pioneering work on inheritance in pea plants."
            },
            {
                question: "What is the genetic makeup of an organism called?",
                options: ["Phenotype", "Genotype", "Allele", "Chromosome"],
                answer: 1,
                explanation: "The genetic makeup of an organism is called its genotype, while its physical appearance is called its phenotype."
            }
        ]
    }
};

// Global variables
let currentSubject = '';
let currentChapter = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM elements
const subjectsView = document.getElementById('subjects-view');
const quizView = document.getElementById('quiz-view');
const resultsView = document.getElementById('results-view');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSubmit = document.getElementById('btn-submit');
const finalScore = document.getElementById('final-score');
const resultsFeedback = document.getElementById('results-feedback');
const btnRestart = document.getElementById('btn-restart');

// Initialize the application
function init() {
    // Add event listeners to chapter list items
    const chapterItems = document.querySelectorAll('.subject-content li');
    chapterItems.forEach(item => {
        item.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            const chapter = this.getAttribute('data-chapter');
            startQuiz(subject, chapter);
        });
    });
    
    // Add event listeners to navigation buttons
    btnPrev.addEventListener('click', previousQuestion);
    btnNext.addEventListener('click', nextQuestion);
    btnSubmit.addEventListener('click', submitQuiz);
    btnRestart.addEventListener('click', restartQuiz);
    
    // Hide quiz and results views initially
    quizView.style.display = 'none';
    resultsView.style.display = 'none';
}

// Start the quiz with selected subject and chapter
function startQuiz(subject, chapter) {
    currentSubject = subject;
    currentChapter = chapter;
    currentQuestions = quizDatabase[subject][chapter];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Hide subjects view and show quiz view
    subjectsView.style.display = 'none';
    quizView.style.display = 'block';
    resultsView.style.display = 'none';
    
    // Update score and question count
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = currentQuestions.length;
    
    // Load the first question
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress bar
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Update question count
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Set question text
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation buttons
    btnPrev.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    btnNext.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'none' : 'block';
    btnSubmit.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'block' : 'none';
}

// Select an option
function selectOption(optionIndex) {
    // Remove selected class from all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Add selected class to clicked option
    options[optionIndex].classList.add('selected');
    
    // Store user's answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Check if answer is correct
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;
    if (optionIndex === correctAnswer) {
        // Update score if not already answered
        if (userAnswers[currentQuestionIndex] !== correctAnswer) {
            score++;
            scoreElement.textContent = score;
        }
    } else if (userAnswers[currentQuestionIndex] === correctAnswer) {
        // Decrease score if changing from correct to incorrect
        score--;
        scoreElement.textContent = score;
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Submit the quiz
function submitQuiz() {
    // Hide quiz view and show results view
    quizView.style.display = 'none';
    resultsView.style.display = 'block';
    
    // Calculate final score
    const finalScoreValue = Math.round((score / currentQuestions.length) * 100);
    finalScore.textContent = finalScoreValue + '%';
    
    // Provide feedback based on score
    let feedback = '';
    if (finalScoreValue >= 80) {
        feedback = 'Excellent! You have a strong understanding of this chapter.';
    } else if (finalScoreValue >= 60) {
        feedback = 'Good job! You have a good grasp of the concepts.';
    } else if (finalScoreValue >= 40) {
        feedback = 'Not bad! Review the chapter and try again.';
    } else {
        feedback = 'Keep studying! You\'ll improve with more practice.';
    }
    
    resultsFeedback.textContent = feedback;
}

// Restart the quiz
function restartQuiz() {
    resultsView.style.display = 'none';
    subjectsView.style.display = 'block';
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
