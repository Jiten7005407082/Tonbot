// lightQuiz.js - 50 Multiple Choice Questions on Light Chapter

const lightQuiz = {
    title: "Light Chapter Quiz",
    description: "Test your knowledge about light and optics with these 50 multiple-choice questions.",
    questions: [
        {
            question: "What is the speed of light in a vacuum?",
            options: [
                "299,792,458 m/s",
                "350,000,000 m/s",
                "150,000,000 m/s",
                "450,000,000 m/s"
            ],
            correctAnswer: 0
        },
        {
            question: "Which of these is NOT part of the electromagnetic spectrum?",
            options: [
                "Sound waves",
                "Radio waves",
                "X-rays",
                "Gamma rays"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the phenomenon where light changes direction when passing through different media?",
            options: [
                "Reflection",
                "Refraction",
                "Diffraction",
                "Dispersion"
            ],
            correctAnswer: 1
        },
        {
            question: "Which color of light has the longest wavelength?",
            options: [
                "Violet",
                "Green",
                "Red",
                "Blue"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the primary purpose of the iris in the human eye?",
            options: [
                "To focus light on the retina",
                "To control the amount of light entering the eye",
                "To detect colors",
                "To transmit signals to the brain"
            ],
            correctAnswer: 1
        },
        {
            question: "Which type of lens converges light rays?",
            options: [
                "Concave lens",
                "Convex lens",
                "Plano-concave lens",
                "Diverging lens"
            ],
            correctAnswer: 1
        },
        {
            question: "What causes a rainbow to form?",
            options: [
                "Reflection of sunlight in water droplets",
                "Refraction and dispersion of sunlight in water droplets",
                "Diffraction of sunlight through clouds",
                "Polarization of light in the atmosphere"
            ],
            correctAnswer: 1
        },
        {
            question: "Which law states that the angle of incidence equals the angle of reflection?",
            options: [
                "Snell's Law",
                "Law of Refraction",
                "Law of Reflection",
                "Brewster's Law"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the unit of measurement for luminous intensity?",
            options: [
                "Lumen",
                "Candela",
                "Lux",
                "Watt"
            ],
            correctAnswer: 1
        },
        {
            question: "Which phenomenon explains why the sky appears blue?",
            options: [
                "Refraction",
                "Reflection",
                "Rayleigh scattering",
                "Dispersion"
            ],
            correctAnswer: 2
        },
        {
            question: "What type of mirror is used in a car's side mirror?",
            options: [
                "Plane mirror",
                "Concave mirror",
                "Convex mirror",
                "Spherical mirror"
            ],
            correctAnswer: 2
        },
        {
            question: "Which of these materials is transparent?",
            options: [
                "Wood",
                "Metal",
                "Clear glass",
                "Cardboard"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the point where light rays converge after passing through a lens called?",
            options: [
                "Focal point",
                "Center of curvature",
                "Optical center",
                "Principal focus"
            ],
            correctAnswer: 3
        },
        {
            question: "Which scientist is credited with first measuring the speed of light?",
            options: [
                "Albert Einstein",
                "Isaac Newton",
                "Ole Rømer",
                "Galileo Galilei"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the phenomenon where light separates into its component colors?",
            options: [
                "Refraction",
                "Reflection",
                "Dispersion",
                "Diffraction"
            ],
            correctAnswer: 2
        },
        {
            question: "Which part of the eye contains light-sensitive cells?",
            options: [
                "Cornea",
                "Lens",
                "Retina",
                "Iris"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the minimum distance for clear vision for a normal human eye?",
            options: [
                "10 cm",
                "15 cm",
                "20 cm",
                "25 cm"
            ],
            correctAnswer: 3
        },
        {
            question: "Which type of electromagnetic radiation has the highest frequency?",
            options: [
                "Radio waves",
                "Microwaves",
                "Gamma rays",
                "X-rays"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the SI unit of luminous flux?",
            options: [
                "Candela",
                "Lumen",
                "Lux",
                "Watt"
            ],
            correctAnswer: 1
        },
        {
            question: "Which phenomenon causes a straw to appear bent when placed in a glass of water?",
            options: [
                "Reflection",
                "Refraction",
                "Dispersion",
                "Diffraction"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the defect of vision where a person can see nearby objects clearly but not distant ones?",
            options: [
                "Hypermetropia",
                "Presbyopia",
                "Myopia",
                "Astigmatism"
            ],
            correctAnswer: 2
        },
        {
            question: "Which color of light has the highest energy?",
            options: [
                "Red",
                "Green",
                "Blue",
                "Yellow"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the term for the bending of light around obstacles?",
            options: [
                "Refraction",
                "Reflection",
                "Diffraction",
                "Scattering"
            ],
            correctAnswer: 2
        },
        {
            question: "Which type of lens is used to correct hypermetropia?",
            options: [
                "Concave lens",
                "Convex lens",
                "Cylindrical lens",
                "Bifocal lens"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the phenomenon where light waves vibrate in a single plane?",
            options: [
                "Dispersion",
                "Polarization",
                "Diffraction",
                "Interference"
            ],
            correctAnswer: 1
        },
        {
            question: "Which device uses the principle of total internal reflection to transmit light?",
            options: [
                "Periscope",
                "Microscope",
                "Telescope",
                "Optical fiber"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the angle of incidence when light reflects off a surface at 90 degrees?",
            options: [
                "0 degrees",
                "45 degrees",
                "90 degrees",
                "180 degrees"
            ],
            correctAnswer: 1
        },
        {
            question: "Which law relates the angle of incidence to the angle of refraction?",
            options: [
                "Law of Reflection",
                "Snell's Law",
                "Ohm's Law",
                "Boyle's Law"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the defect of vision where a person cannot see objects at any distance clearly?",
            options: [
                "Myopia",
                "Hypermetropia",
                "Astigmatism",
                "Presbyopia"
            ],
            correctAnswer: 2
        },
        {
            question: "Which type of mirror can form both real and virtual images?",
            options: [
                "Plane mirror",
                "Convex mirror",
                "Concave mirror",
                "All of the above"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the term for the splitting of white light into its constituent colors?",
            options: [
                "Refraction",
                "Reflection",
                "Dispersion",
                "Diffraction"
            ],
            correctAnswer: 2
        },
        {
            question: "Which part of the electromagnetic spectrum is visible to the human eye?",
            options: [
                "Ultraviolet to infrared",
                "X-rays to gamma rays",
                "Radio waves to microwaves",
                "380 nm to 750 nm"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the phenomenon where light energy is converted to other forms of energy?",
            options: [
                "Reflection",
                "Refraction",
                "Absorption",
                "Transmission"
            ],
            correctAnswer: 2
        },
        {
            question: "Which scientist proposed the particle theory of light?",
            options: [
                "Christian Huygens",
                "James Clerk Maxwell",
                "Isaac Newton",
                "Thomas Young"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the term for the apparent change in frequency of light due to relative motion?",
            options: [
                "Doppler effect",
                "Photoelectric effect",
                "Compton effect",
                "Raman effect"
            ],
            correctAnswer: 0
        },
        {
            question: "Which type of lens is thinner at the center than at the edges?",
            options: [
                "Convex lens",
                "Concave lens",
                "Plano-convex lens",
                "Biconvex lens"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the critical angle for total internal reflection?",
            options: [
                "The angle of incidence when angle of refraction is 0°",
                "The angle of incidence when angle of refraction is 45°",
                "The angle of incidence when angle of refraction is 90°",
                "The angle of incidence when angle of refraction is 180°"
            ],
            correctAnswer: 2
        },
        {
            question: "Which phenomenon is responsible for the twinkling of stars?",
            options: [
                "Refraction of light",
                "Reflection of light",
                "Atmospheric refraction",
                "Dispersion of light"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the power of a lens with focal length 0.5 meters?",
            options: [
                "0.5 diopters",
                "1 diopter",
                "2 diopters",
                "4 diopters"
            ],
            correctAnswer: 2
        },
        {
            question: "Which color of light is scattered the most by atmospheric particles?",
            options: [
                "Red",
                "Green",
                "Blue",
                "Yellow"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the phenomenon where two light waves superimpose to form a resultant wave?",
            options: [
                "Reflection",
                "Refraction",
                "Interference",
                "Diffraction"
            ],
            correctAnswer: 2
        },
        {
            question: "Which type of mirror always forms a virtual, erect, and diminished image?",
            options: [
                "Plane mirror",
                "Concave mirror",
                "Convex mirror",
                "Spherical mirror"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the unit of wavelength of light?",
            options: [
                "Hertz",
                "Meter",
                "Nanometer",
                "Candela"
            ],
            correctAnswer: 2
        },
        {
            question: "Which phenomenon explains the formation of mirages?",
            options: [
                "Reflection",
                "Refraction",
                "Total internal reflection",
                "Dispersion"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the defect of vision where a person can see distant objects clearly but not nearby ones?",
            options: [
                "Myopia",
                "Hypermetropia",
                "Astigmatism",
                "Presbyopia"
            ],
            correctAnswer: 1
        },
        {
            question: "Which part of the eye controls the amount of light entering it?",
            options: [
                "Cornea",
                "Lens",
                "Retina",
                "Iris"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the phenomenon where light passes through a substance without being absorbed?",
            options: [
                "Reflection",
                "Refraction",
                "Transmission",
                "Absorption"
            ],
            correctAnswer: 2
        },
        {
            question: "Which scientist is credited with the wave theory of light?",
            options: [
                "Isaac Newton",
                "Albert Einstein",
                "Christian Huygens",
                "Max Planck"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the term for the bouncing back of light from a surface?",
            options: [
                "Refraction",
                "Reflection",
                "Diffraction",
                "Dispersion"
            ],
            correctAnswer: 1
        },
        {
            question: "Which type of lens is used in a magnifying glass?",
            options: [
                "Concave lens",
                "Convex lens",
                "Plano-concave lens",
                "Cylindrical lens"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the speed of light in water compared to vacuum?",
            options: [
                "Faster",
                "Slower",
                "Same",
                "Depends on the color of light"
            ],
            correctAnswer: 1
        },
        {
            question: "Which phenomenon is used in 3D movies?",
            options: [
                "Refraction",
                "Polarization",
                "Dispersion",
                "Diffraction"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the range of vision for a normal human eye?",
            options: [
                "10 cm to infinity",
                "15 cm to infinity",
                "20 cm to infinity",
                "25 cm to infinity"
            ],
            correctAnswer: 3
        }
    ],
    
    // Function to get a specific question
    getQuestion: function(index) {
        if (index >= 0 && index < this.questions.length) {
            return this.questions[index];
        }
        return null;
    },
    
    // Function to check if an answer is correct
    checkAnswer: function(questionIndex, answerIndex) {
        if (questionIndex >= 0 && questionIndex < this.questions.length) {
            return this.questions[questionIndex].correctAnswer === answerIndex;
        }
        return false;
    },
    
    // Function to get the total number of questions
    getTotalQuestions: function() {
        return this.questions.length;
    }
};

// Example usage:
// console.log(lightQuiz.getQuestion(0).question);
// console.log(lightQuiz.checkAnswer(0, 0)); // Returns true if correct

// Export for use in other files (if using Node.js)
// module.exports = lightQuiz;
