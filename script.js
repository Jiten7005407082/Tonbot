js
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
            },
            {
                question: "What is the angle of incidence when a ray of light falls normally on a surface?",
                options: ["0°", "45°", "90°", "180°"],
                answer: 0,
                explanation: "When light falls normally (perpendicularly) on a surface, the angle of incidence is 0°."
            },
            {
                question: "Which lens is used to correct myopia?",
                options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
                answer: 1,
                explanation: "Myopia (nearsightedness) is corrected using a concave lens which diverges light rays before they enter the eye."
            },
            {
                question: "What is the speed of light in vacuum?",
                options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
                answer: 1,
                explanation: "The speed of light in vacuum is approximately 3 × 10⁸ meters per second."
            },
            {
                question: "Which color of light has the longest wavelength?",
                options: ["Violet", "Green", "Red", "Blue"],
                answer: 2,
                explanation: "Red light has the longest wavelength in the visible spectrum, while violet has the shortest."
            },
            {
                question: "What is the phenomenon of splitting of white light into its constituent colors called?",
                options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
                answer: 2,
                explanation: "Dispersion is the phenomenon where white light splits into its constituent colors when passing through a prism."
            },
            {
                question: "Which lens is thicker at the center than at the edges?",
                options: ["Concave lens", "Convex lens", "Plano-concave lens", "Cylindrical lens"],
                answer: 1,
                explanation: "A convex lens is thicker at the center than at the edges and converges light rays."
            },
            {
                question: "What is the unit of wavelength of light?",
                options: ["Hertz", "Dioptre", "Nanometer", "Joule"],
                answer: 2,
                explanation: "The wavelength of light is typically measured in nanometers (nm)."
            },
            {
                question: "Which mirror is used as a rear-view mirror in vehicles?",
                options: ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
                answer: 2,
                explanation: "Convex mirrors are used as rear-view mirrors in vehicles because they provide a wider field of view."
            },
            {
                question: "What is the ratio of sine of angle of incidence to sine of angle of refraction called?",
                options: ["Power of lens", "Refractive index", "Focal length", "Magnification"],
                answer: 1,
                explanation: "Snell's law states that the ratio of sine of angle of incidence to sine of angle of refraction is constant and is called refractive index."
            },
            {
                question: "Which phenomenon causes the blue color of the sky?",
                options: ["Dispersion", "Refraction", "Scattering", "Reflection"],
                answer: 2,
                explanation: "The blue color of the sky is due to scattering of light by air molecules, with blue light being scattered more than other colors."
            },
            {
                question: "What is the focal length of a lens with power +2.0 D?",
                options: ["0.5 m", "0.5 cm", "2.0 m", "2.0 cm"],
                answer: 0,
                explanation: "Power (P) = 1/f, so f = 1/P = 1/2 = 0.5 m."
            },
            {
                question: "Which type of mirror can form a real and inverted image?",
                options: ["Plane mirror", "Convex mirror", "Concave mirror", "All of these"],
                answer: 2,
                explanation: "A concave mirror can form a real and inverted image when the object is placed beyond the center of curvature."
            },
            {
                question: "What is the magnification produced by a plane mirror?",
                options: ["+1", "-1", "0", "Depends on the object distance"],
                answer: 0,
                explanation: "A plane mirror always produces an image of the same size as the object, so magnification is +1."
            },
            {
                question: "Which color of light deviates the most when passing through a prism?",
                options: ["Red", "Green", "Yellow", "Violet"],
                answer: 3,
                explanation: "Violet light has the shortest wavelength and thus deviates the most when passing through a prism."
            },
            {
                question: "What is the refractive index of diamond?",
                options: ["1.33", "1.50", "2.42", "3.00"],
                answer: 2,
                explanation: "Diamond has a high refractive index of approximately 2.42, which contributes to its brilliance."
            },
            {
                question: "Which lens is used in a magnifying glass?",
                options: ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
                answer: 1,
                explanation: "A magnifying glass uses a convex lens to produce a magnified virtual image when the object is placed within the focal length."
            },
            {
                question: "What is the phenomenon of light returning back when it strikes a surface called?",
                options: ["Refraction", "Dispersion", "Reflection", "Scattering"],
                answer: 2,
                explanation: "Reflection is the phenomenon where light returns back after striking a surface."
            },
            {
                question: "Which mirror has a positive focal length?",
                options: ["Concave mirror", "Convex mirror", "Both", "Neither"],
                answer: 0,
                explanation: "A concave mirror has a positive focal length, while a convex mirror has a negative focal length."
            },
            {
                question: "What is the power of a lens with focal length 25 cm?",
                options: ["+4 D", "-4 D", "+0.25 D", "-0.25 D"],
                answer: 0,
                explanation: "Power (P) = 1/f (in meters) = 1/0.25 = +4 D."
            },
            {
                question: "Which phenomenon is responsible for the formation of a rainbow?",
                options: ["Reflection and refraction", "Dispersion and refraction", "Scattering and reflection", "Refraction and dispersion"],
                answer: 3,
                explanation: "A rainbow is formed due to refraction, dispersion, and internal reflection of sunlight in water droplets."
            },
            {
                question: "What is the angle between the incident ray and the normal called?",
                options: ["Angle of reflection", "Angle of refraction", "Angle of incidence", "Critical angle"],
                answer: 2,
                explanation: "The angle between the incident ray and the normal is called the angle of incidence."
            },
            {
                question: "Which lens is used to correct hypermetropia?",
                options: ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
                answer: 1,
                explanation: "Hypermetropia (farsightedness) is corrected using a convex lens which converges light rays before they enter the eye."
            },
            {
                question: "What is the relationship between object distance (u), image distance (v), and focal length (f) for a mirror?",
                options: ["1/f = 1/v - 1/u", "1/f = 1/v + 1/u", "1/f = 1/u - 1/v", "f = uv/(u+v)"],
                answer: 1,
                explanation: "The mirror formula is 1/f = 1/v + 1/u, where u is negative for objects in front of the mirror."
            },
            {
                question: "Which color of light has the highest frequency?",
                options: ["Red", "Green", "Blue", "Violet"],
                answer: 3,
                explanation: "Violet light has the highest frequency in the visible spectrum, while red has the lowest."
            },
            {
                question: "What is the critical angle for glass with refractive index 1.5?",
                options: ["30°", "42°", "45°", "60°"],
                answer: 1,
                explanation: "Critical angle = sin⁻¹(1/n) = sin⁻¹(1/1.5) ≈ 42°."
            },
            {
                question: "Which mirror is used in searchlights?",
                options: ["Plane mirror", "Convex mirror", "Concave mirror", "Spherical mirror"],
                answer: 2,
                explanation: "Concave mirrors are used in searchlights as they can produce a powerful parallel beam of light."
            },
            {
                question: "What is the magnification when the image is virtual and erect?",
                options: ["Positive", "Negative", "Zero", "Infinite"],
                answer: 0,
                explanation: "For virtual and erect images, the magnification is positive."
            },
            {
                question: "Which phenomenon causes the reddish appearance of the sun during sunrise and sunset?",
                options: ["Dispersion", "Refraction", "Scattering", "Reflection"],
                answer: 2,
                explanation: "During sunrise and sunset, sunlight passes through a thicker layer of atmosphere, scattering blue light more and making the sun appear reddish."
            },
            {
                question: "What is the power of a concave lens?",
                options: ["Positive", "Negative", "Zero", "Depends on focal length"],
                answer: 1,
                explanation: "A concave lens has negative power as it diverges light rays."
            },
            {
                question: "Which lens is used in a camera?",
                options: ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
                answer: 1,
                explanation: "Cameras use convex lenses to focus light and form real images on the film or sensor."
            },
            {
                question: "What is the SI unit of luminous intensity?",
                options: ["Lumen", "Lux", "Candela", "Watt"],
                answer: 2,
                explanation: "The SI unit of luminous intensity is candela (cd)."
            },
            {
                question: "Which mirror can form an image that is virtual, erect, and larger than the object?",
                options: ["Plane mirror", "Convex mirror", "Concave mirror", "All of these"],
                answer: 2,
                explanation: "A concave mirror can form a virtual, erect, and magnified image when the object is placed between the pole and the focus."
            },
            {
                question: "What is the phenomenon of light bending when it passes from one medium to another called?",
                options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
                answer: 1,
                explanation: "Refraction is the bending of light when it passes from one medium to another with a different optical density."
            },
            {
                question: "Which lens is used to correct astigmatism?",
                options: ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
                answer: 2,
                explanation: "Astigmatism is corrected using cylindrical lenses that have different curvatures in different meridians."
            },
            {
                question: "What is the relationship between the radius of curvature (R) and focal length (f) of a spherical mirror?",
                options: ["R = f", "R = 2f", "f = 2R", "R = f/2"],
                answer: 1,
                explanation: "For a spherical mirror, the radius of curvature is twice the focal length: R = 2f."
            },
            {
                question: "Which color of light is least deviated when passing through a prism?",
                options: ["Red", "Green", "Yellow", "Violet"],
                answer: 0,
                explanation: "Red light has the longest wavelength and thus is least deviated when passing through a prism."
            },
            {
                question: "What is the phenomenon of light waves adding together called?",
                options: ["Interference", "Diffraction", "Polarization", "Dispersion"],
                answer: 0,
                explanation: "Interference is the phenomenon where two or more light waves superimpose to form a resultant wave."
            },
            {
                question: "Which mirror has a virtual focus?",
                options: ["Concave mirror", "Convex mirror", "Both", "Neither"],
                answer: 1,
                explanation: "A convex mirror has a virtual focus behind the mirror, while a concave mirror has a real focus in front of the mirror."
            },
            {
                question: "What is the power of a combination of two lenses with powers P₁ and P₂ in contact?",
                options: ["P₁ + P₂", "P₁ - P₂", "P₁ × P₂", "P₁ / P₂"],
                answer: 0,
                explanation: "When two lenses are in contact, the combined power is the sum of their individual powers: P = P₁ + P₂."
            },
            {
                question: "Which phenomenon causes the glittering of diamond?",
                options: ["Total internal reflection", "Refraction", "Dispersion", "All of these"],
                answer: 3,
                explanation: "The glittering of diamond is due to total internal reflection, refraction, and dispersion of light within the diamond."
            },
            {
                question: "What is the focal length of a convex lens if it forms a real image at 20 cm when the object is at 30 cm?",
                options: ["10 cm", "12 cm", "15 cm", "20 cm"],
                answer: 1,
                explanation: "Using lens formula: 1/f = 1/v - 1/u = 1/20 - 1/(-30) = 1/20 + 1/30 = 5/60 = 1/12, so f = 12 cm."
            },
            {
                question: "Which mirror is used by dentists to see an enlarged image of teeth?",
                options: ["Plane mirror", "Convex mirror", "Concave mirror", "Spherical mirror"],
                answer: 2,
                explanation: "Dentists use concave mirrors to get an enlarged image of teeth by placing the tooth between the pole and focus of the mirror."
            },
            {
                question: "What is the phenomenon of light spreading around corners called?",
                options: ["Interference", "Diffraction", "Polarization", "Dispersion"],
                answer: 1,
                explanation: "Diffraction is the phenomenon where light waves spread out when passing through small openings or around obstacles."
            },
            {
                question: "Which lens has a negative focal length?",
                options: ["Convex lens", "Concave lens", "Both", "Neither"],
                answer: 1,
                explanation: "A concave lens has a negative focal length as it diverges light rays."
            },
            {
                question: "What is the angle of reflection if the angle of incidence is 30°?",
                options: ["30°", "45°", "60°", "90°"],
                answer: 0,
                explanation: "According to the law of reflection, the angle of reflection equals the angle of incidence, so it is also 30°."
            },
            {
                question: "Which phenomenon is used in optical fibers?",
                options: ["Refraction", "Total internal reflection", "Dispersion", "Scattering"],
                answer: 1,
                explanation: "Optical fibers work on the principle of total internal reflection, where light is trapped inside the fiber and transmitted with minimal loss."
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
            }
        ],
        "Acids": [
            {
                question: "What is the pH range of acidic solutions?",
                options: ["0-7", "7-14", "Exactly 7", "1-10"],
                answer: 0,
                explanation: "Acidic solutions have pH values less than 7, with 0 being the most acidic."
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
            }
        ],
        "Control": [
            {
                question: "Which part of the brain is responsible for balance and coordination?",
                options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
                answer: 1,
                explanation: "The cerebellum is responsible for maintaining balance, posture, and coordination of voluntary movements."
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
function
New chat
