// ✅ All quiz data embedded here (no fetch needed)
const questionsData = {
  "Light – Reflection & Refraction": [
    { "q": "What is the speed of light in air approximately?", "options": ["3 × 10⁸ m/s", "1.5 × 10⁸ m/s", "2 × 10⁸ m/s", "3 × 10⁶ m/s"], "answer": "3 × 10⁸ m/s" },
    { "q": "The angle between the incident ray and the normal is called?", "options": ["Angle of Refraction", "Angle of Incidence", "Angle of Deviation", "Angle of Prism"], "answer": "Angle of Incidence" },
    { "q": "The bouncing back of light after hitting a polished surface is called?", "options": ["Refraction", "Dispersion", "Reflection", "Scattering"], "answer": "Reflection" },
    { "q": "Which of the following obeys the laws of reflection?", "options": ["Plane mirror", "Spherical mirror", "Both A and B", "None of these"], "answer": "Both A and B" },
    { "q": "What is the SI unit of refractive index?", "options": ["No unit", "m/s", "meter", "candela"], "answer": "No unit" },
    { "q": "The phenomenon of bending of light when it passes from one medium to another is called?", "options": ["Reflection", "Refraction", "Dispersion", "Diffraction"], "answer": "Refraction" },
    { "q": "Which law states that the incident ray, refracted ray and normal all lie in the same plane?", "options": ["Snell’s Law", "Law of Reflection", "Law of Refraction", "Law of Incidence"], "answer": "Law of Refraction" },
    { "q": "The ratio of speed of light in vacuum to speed of light in medium is called?", "options": ["Refractive index", "Reflection ratio", "Speed index", "Light coefficient"], "answer": "Refractive index" },
    { "q": "What is the focal length of a plane mirror?", "options": ["Infinite", "Zero", "10 cm", "Depends on object distance"], "answer": "Infinite" },
    { "q": "A real image is always?", "options": ["Inverted", "Erect", "Virtual", "Same size as object"], "answer": "Inverted" },
    { "q": "If the refractive index of water is 1.33, this means:", "options": ["Light travels 1.33 times faster in water", "Light slows down by 1.33 times in water", "Water has density 1.33 g/cm³", "None of these"], "answer": "Light slows down by 1.33 times in water" },
    { "q": "Which type of lens is used to correct myopia?", "options": ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], "answer": "Concave lens" },
    { "q": "Which type of mirror is used in vehicles as rear-view mirrors?", "options": ["Concave", "Convex", "Plane", "Parabolic"], "answer": "Convex" },
    { "q": "In a plane mirror, the image formed is always?", "options": ["Real & inverted", "Virtual & erect", "Virtual & inverted", "Real & erect"], "answer": "Virtual & erect" },
    { "q": "If angle of incidence is 30°, what will be angle of reflection?", "options": ["60°", "30°", "15°", "45°"], "answer": "30°" },
    { "q": "The power of a lens is measured in?", "options": ["Diopter", "Candela", "Lumen", "Meter"], "answer": "Diopter" },
    { "q": "Which color of light deviates the least when passed through a prism?", "options": ["Violet", "Red", "Green", "Blue"], "answer": "Red" },
    { "q": "What type of image does a concave mirror form when object is placed between focus and mirror?", "options": ["Real & inverted", "Virtual & erect", "Enlarged & real", "Diminished & real"], "answer": "Virtual & erect" },
    { "q": "In refraction, when light passes from a denser to a rarer medium, it bends?", "options": ["Towards normal", "Away from normal", "Does not bend", "Depends on color"], "answer": "Away from normal" },
    { "q": "Which phenomenon makes a straw appear bent in water?", "options": ["Reflection", "Refraction", "Dispersion", "Scattering"], "answer": "Refraction" },
    { "q": "A concave mirror is also known as?", "options": ["Diverging mirror", "Converging mirror", "Plane mirror", "Neutral mirror"], "answer": "Converging mirror" },
    { "q": "A convex mirror is also known as?", "options": ["Diverging mirror", "Converging mirror", "Plane mirror", "Neutral mirror"], "answer": "Diverging mirror" },
    { "q": "When light travels from air into glass, its speed?", "options": ["Increases", "Decreases", "Remains same", "First increases then decreases"], "answer": "Decreases" },
    { "q": "The mirror used by dentists is?", "options": ["Plane mirror", "Concave mirror", "Convex mirror", "None"], "answer": "Concave mirror" },
    { "q": "The image formed by convex mirror is always?", "options": ["Real & inverted", "Virtual & erect", "Varies with object distance", "None of these"], "answer": "Virtual & erect" },
    { "q": "Snell’s law relates which quantities?", "options": ["Angles of incidence & reflection", "Angles of incidence & refraction", "Speed & wavelength", "Frequency & wavelength"], "answer": "Angles of incidence & refraction" },
    { "q": "What is the focal length of a convex mirror?", "options": ["Positive", "Negative", "Zero", "Infinite"], "answer": "Positive" },
    { "q": "What is the focal length of a concave mirror?", "options": ["Positive", "Negative", "Zero", "Infinite"], "answer": "Negative" },
    { "q": "Which lens is used in magnifying glasses?", "options": ["Concave lens", "Convex lens", "Cylindrical lens", "Plano lens"], "answer": "Convex lens" },
    { "q": "Which of the following is NOT a law of reflection?", "options": ["Angle of incidence = angle of reflection", "Incident ray, reflected ray, and normal are in same plane", "Reflected ray is always perpendicular to surface", "None of these"], "answer": "Reflected ray is always perpendicular to surface" }
  ],

  "Chemical Reactions & Equations": [
    { "q": "Which of the following is NOT a type of chemical reaction?", "options": ["Combination", "Decomposition", "Reflection", "Displacement"], "answer": "Reflection" },
    { "q": "What type of reaction is: 2Mg + O₂ → 2MgO?", "options": ["Decomposition", "Combination", "Displacement", "Double displacement"], "answer": "Combination" },
    { "q": "In the reaction CaCO₃ → CaO + CO₂, what type of reaction is this?", "options": ["Decomposition", "Combination", "Neutralization", "Redox"], "answer": "Decomposition" },
    { "q": "Which of the following is a displacement reaction?", "options": ["Zn + CuSO₄ → ZnSO₄ + Cu", "H₂ + Cl₂ → 2HCl", "2KClO₃ → 2KCl + 3O₂", "CaO + H₂O → Ca(OH)₂"], "answer": "Zn + CuSO₄ → ZnSO₄ + Cu" },
    { "q": "What is the color change when copper powder is heated?", "options": ["Red to black", "Blue to green", "Brown to black", "Black to red"], "answer": "Brown to black" },
    { "q": "What is the reaction called when heat is absorbed from surroundings?", "options": ["Exothermic", "Endothermic", "Displacement", "Neutralization"], "answer": "Endothermic" },
    { "q": "What type of chemical reaction is photosynthesis?", "options": ["Exothermic", "Endothermic", "Displacement", "Combustion"], "answer": "Endothermic" },
    { "q": "Which gas is evolved when zinc reacts with hydrochloric acid?", "options": ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], "answer": "Hydrogen" },
    { "q": "Which is the oxidizing agent in the reaction: Zn + CuSO₄ → ZnSO₄ + Cu?", "options": ["Zn", "Cu²⁺", "SO₄²⁻", "Cu"], "answer": "Cu²⁺" },
    { "q": "What is observed when iron nails are dipped into copper sulphate solution?", "options": ["Solution turns blue", "Iron nails turn brownish", "Gas bubbles form", "Nothing happens"], "answer": "Iron nails turn brownish" },
    { "q": "Which of the following is a redox reaction?", "options": ["2H₂ + O₂ → 2H₂O", "AgNO₃ + NaCl → AgCl + NaNO₃", "BaCl₂ + H₂SO₄ → BaSO₄ + 2HCl", "CaO + H₂O → Ca(OH)₂"], "answer": "2H₂ + O₂ → 2H₂O" },
    { "q": "What is the process of depositing a thin layer of zinc on iron called?", "options": ["Rusting", "Alloying", "Galvanization", "Electroplating"], "answer": "Galvanization" },
    { "q": "What type of reaction is: AgNO₃ + NaCl → AgCl + NaNO₃?", "options": ["Displacement", "Double displacement", "Decomposition", "Combination"], "answer": "Double displacement" },
    { "q": "What is the brown gas produced when lead nitrate is heated?", "options": ["NO₂", "CO₂", "SO₂", "O₂"], "answer": "NO₂" },
    { "q": "Which of the following is an example of a combination reaction?", "options": ["H₂ + Cl₂ → 2HCl", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu", "AgNO₃ + NaCl → AgCl + NaNO₃"], "answer": "H₂ + Cl₂ → 2HCl" },
    { "q": "Which type of reaction is: Fe + CuSO₄ → FeSO₄ + Cu?", "options": ["Combination", "Double displacement", "Displacement", "Decomposition"], "answer": "Displacement" },
    { "q": "Which chemical is used to test for the evolution of CO₂ gas?", "options": ["Blue litmus paper", "Lime water", "Red litmus paper", "Phenolphthalein"], "answer": "Lime water" },
    { "q": "Which element is oxidized in the reaction Zn + H₂SO₄ → ZnSO₄ + H₂?", "options": ["Zn", "H", "S", "O"], "answer": "Zn" },
    { "q": "What type of reaction occurs when electricity is passed through water to give hydrogen and oxygen?", "options": ["Decomposition", "Displacement", "Neutralization", "Combination"], "answer": "Decomposition" },
    { "q": "Which reaction produces a precipitate?", "options": ["AgNO₃ + NaCl → AgCl + NaNO₃", "2Mg + O₂ → 2MgO", "Zn + HCl → ZnCl₂ + H₂", "C + O₂ → CO₂"], "answer": "AgNO₃ + NaCl → AgCl + NaNO₃" },
    { "q": "What type of reaction is neutralization?", "options": ["Combination", "Decomposition", "Double displacement", "Displacement"], "answer": "Double displacement" },
    { "q": "Which metal does NOT displace hydrogen from acids?", "options": ["Copper", "Zinc", "Magnesium", "Iron"], "answer": "Copper" },
    { "q": "Which of the following reactions is endothermic?", "options": ["Photosynthesis", "Combustion of fuels", "Respiration", "Neutralization"], "answer": "Photosynthesis" },
    { "q": "Which of these changes indicates a chemical reaction?", "options": ["Color change", "Gas formation", "Temperature change", "All of these"], "answer": "All of these" },
    { "q": "What type of reaction is rusting of iron?", "options": ["Redox", "Displacement", "Combination", "Neutralization"], "answer": "Redox" },
    { "q": "Which gas turns lime water milky?", "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Sulphur dioxide"], "answer": "Carbon dioxide" },
    { "q": "When ammonium chloride is heated it breaks into NH₃ and HCl. This is an example of?", "options": ["Combination", "Decomposition", "Neutralization", "Displacement"], "answer": "Decomposition" },
    { "q": "What is observed when a magnesium ribbon burns in air?", "options": ["Red flame and black residue", "White dazzling flame and white powder", "Blue flame and green powder", "No visible change"], "answer": "White dazzling flame and white powder" },
    { "q": "Which of the following is an oxidation reaction?", "options": ["2Cu + O₂ → 2CuO", "2MgO → 2Mg + O₂", "Zn + H₂ → ZnH₂", "C + 2Cl₂ → CCl₄"], "answer": "2Cu + O₂ → 2CuO" },
    { "q": "In a balanced chemical equation:", "options": ["Mass is created", "Mass is destroyed", "Mass is conserved", "Atoms are destroyed"], "answer": "Mass is conserved" }
  ]
};

// ✅ Chatbot Logic
let userName = "";
let score = 0;
let currentSubject = "";
let currentChapter = "";
let currentQuestions = [];
let currentQuestionIndex = 0;

function startChat() {
  addBotMessage("Hi! I'm your quiz bot 🤖. What's your name?");
}

function addBotMessage(text) {
  const chatBox = document.getElementById("chat");
  chatBox.innerHTML += `<div class='bot'>${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMessage(text) {
  const chatBox = document.getElementById("chat");
  chatBox.innerHTML += `<div class='user'>${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;
  
  addUserMessage(text);
  input.value = "";

  if (!userName) {
    userName = text;
    addBotMessage(`Nice to meet you, ${userName}! What subject do you want to test? (Science, Math, Social Science, English)`);
    return;
  }

  if (!currentSubject) {
    currentSubject = text;
    addBotMessage(`Great choice! Which chapter do you want to try? Here are options:`);
    
    // ✅ Show chapters dynamically
    Object.keys(questionsData).forEach(chapter => {
      addBotMessage(`📘 ${chapter}`);
    });

    return;
  }

  if (!currentChapter) {
    currentChapter = text;

    if (!questionsData[currentChapter]) {
      addBotMessage("❌ Sorry, that chapter isn’t in my database. Please type a valid chapter name.");
      return;
    }

    currentQuestions = questionsData[currentChapter];
    currentQuestionIndex = 0;
    score = 0;

    addBotMessage(`Starting quiz on <b>${currentChapter}</b>! 🎯`);
    askQuestion();
    return;
  }

  // ✅ Process answers
  checkAnswer(text);
}

function askQuestion() {
  if (currentQuestionIndex < currentQuestions.length) {
    const q = currentQuestions[currentQuestionIndex];
    addBotMessage(`Q${currentQuestionIndex + 1}: ${q.q}`);
    q.options.forEach((opt, i) => {
      addBotMessage(`${i + 1}. ${opt}`);
    });
  } else {
    endQuiz();
  }
}

function checkAnswer(userAnswer) {
  const q = currentQuestions[currentQuestionIndex];
  const correct = q.answer.toLowerCase().trim();
  
  if (userAnswer.toLowerCase().trim() === correct.toLowerCase()) {
    score++;
    addBotMessage("✅ Correct!");
  } else {
    addBotMessage(`❌ Wrong! The correct answer was: ${q.answer}`);
  }
  
  currentQuestionIndex++;
  askQuestion();
}

function endQuiz() {
  addBotMessage(`🎉 Quiz finished! Your score: ${score}/${currentQuestions.length}`);
  addBotMessage("Do you want to try another quiz? (Yes/No)");

  currentSubject = "";
  currentChapter = "";
}
