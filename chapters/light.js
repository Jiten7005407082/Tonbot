// Light Chapter Quiz Data
const lightQuiz = {
    chapter: 'Light - Reflection and Refraction',
    questions: [
        {
            question: 'What is the speed of light in a vacuum?',
            options: [
                '299,792,458 m/s',
                '350,000,000 m/s',
                '150,000,000 m/s',
                '450,000,000 m/s'
            ],
            correctAnswer: 0
        },
        {
            question: 'Which of these is NOT part of the electromagnetic spectrum?',
            options: [
                'Sound waves',
                'Radio waves',
                'X-rays',
                'Gamma rays'
            ],
            correctAnswer: 0
        },
        {
            question: 'What is the phenomenon where light changes direction when passing through different media?',
            options: [
                'Reflection',
                'Refraction',
                'Diffraction',
                'Dispersion'
            ],
            correctAnswer: 1
        },
        {
            question: 'Which color of light has the longest wavelength?',
            options: [
                'Violet',
                'Green',
                'Red',
                'Blue'
            ],
            correctAnswer: 2
        },
        {
            question: 'What is the primary purpose of the iris in the human eye?',
            options: [
                'To focus light on the retina',
                'To control the amount of light entering the eye',
                'To detect colors',
                'To transmit signals to the brain'
            ],
            correctAnswer: 1
        },
        {
            question: 'Which type of lens converges light rays?',
            options: [
                'Concave lens',
                'Convex lens',
                'Plano-concave lens',
                'Diverging lens'
            ],
            correctAnswer: 1
        },
        {
            question: 'What causes a rainbow to form?',
            options: [
                'Reflection of sunlight in water droplets',
                'Refraction and dispersion of sunlight in water droplets',
                'Diffraction of sunlight through clouds',
                'Polarization of light in the atmosphere'
            ],
            correctAnswer: 1
        },
        {
            question: 'Which law states that the angle of incidence equals the angle of reflection?',
            options: [
                'Snell\'s Law',
                'Law of Refraction',
                'Law of Reflection',
                'Brewster\'s Law'
            ],
            correctAnswer: 2
        },
        {
            question: 'What is the unit of measurement for luminous intensity?',
            options: [
                'Lumen',
                'Candela',
                'Lux',
                'Watt'
            ],
            correctAnswer: 1
        },
        {
            question: 'Which phenomenon explains why the sky appears blue?',
            options: [
                'Refraction',
                'Reflection',
                'Rayleigh scattering',
                'Dispersion'
            ],
            correctAnswer: 2
        }
    ]
};

// Add to global quiz data map
if (typeof quizDataMap === 'undefined') {
    var quizDataMap = {};
}
quizDataMap.light = lightQuiz;
