const electricityQuestions = [
  {
    question: "What is the SI unit of electric current?",
    options: ["Ampere", "Volt", "Ohm", "Coulomb"],
    answer: "Ampere"
  },
  {
    question: "Which particle is responsible for electric current in metals?",
    options: ["Protons", "Neutrons", "Electrons", "Ions"],
    answer: "Electrons"
  },
  {
    question: "What is the SI unit of electric charge?",
    options: ["Ampere", "Volt", "Coulomb", "Ohm"],
    answer: "Coulomb"
  },
  {
    question: "Ohm’s law relates voltage, current, and what?",
    options: ["Charge", "Resistance", "Power", "Energy"],
    answer: "Resistance"
  },
  {
    question: "Which instrument is used to measure electric current?",
    options: ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
    answer: "Ammeter"
  },
  {
    question: "The SI unit of resistance is?",
    options: ["Coulomb", "Ohm", "Farad", "Henry"],
    answer: "Ohm"
  },
  {
    question: "1 kilowatt-hour is equal to how many joules?",
    options: ["3.6 × 10^6 J", "360 J", "36 × 10^6 J", "3.6 × 10^3 J"],
    answer: "3.6 × 10^6 J"
  },
  {
    question: "Which of the following is a good conductor of electricity?",
    options: ["Rubber", "Glass", "Copper", "Wood"],
    answer: "Copper"
  },
  {
    question: "The resistance of a conductor depends on which factor?",
    options: ["Length", "Area of cross-section", "Material", "All of these"],
    answer: "All of these"
  },
  {
    question: "Which law states that current is directly proportional to voltage?",
    options: ["Faraday’s Law", "Ohm’s Law", "Lenz’s Law", "Kirchhoff’s Law"],
    answer: "Ohm’s Law"
  },
  // --- More questions continue ---
];

// Generate remaining questions up to 50
const moreQuestions = [
  { question: "The SI unit of electric potential difference is?", options: ["Ohm", "Volt", "Watt", "Coulomb"], answer: "Volt" },
  { question: "What type of current is supplied to homes?", options: ["AC", "DC", "Both AC and DC", "None"], answer: "AC" },
  { question: "A device that converts chemical energy into electrical energy is?", options: ["Generator", "Battery", "Transformer", "Capacitor"], answer: "Battery" },
  { question: "Which material is used for filament in electric bulbs?", options: ["Copper", "Tungsten", "Aluminium", "Iron"], answer: "Tungsten" },
  { question: "Which of the following has the highest resistance?", options: ["Short wire", "Thick wire", "Long thin wire", "None"], answer: "Long thin wire" },
  { question: "Which instrument is used to measure potential difference?", options: ["Ammeter", "Voltmeter", "Galvanometer", "Multimeter"], answer: "Voltmeter" },
  { question: "Electric power is given by?", options: ["V × I", "I/R", "V/R", "R × I"], answer: "V × I" },
  { question: "Which gas is filled in fluorescent lamps?", options: ["Argon", "Oxygen", "Hydrogen", "Nitrogen"], answer: "Argon" },
  { question: "Which device is used to prevent excessive current in circuits?", options: ["Battery", "Fuse", "Switch", "Transformer"], answer: "Fuse" },
  { question: "The resistance of an ideal conductor at absolute zero is?", options: ["Zero", "Infinite", "Very High", "Constant"], answer: "Zero" },
  { question: "The SI unit of capacitance is?", options: ["Farad", "Henry", "Ohm", "Tesla"], answer: "Farad" },
  { question: "What is the charge of an electron?", options: ["1.6 × 10^-19 C", "-1.6 × 10^-19 C", "1.6 × 10^-9 C", "-1.6 × 10^-9 C"], answer: "-1.6 × 10^-19 C" },
  { question: "Which metal is commonly used in household wiring?", options: ["Aluminium", "Copper", "Iron", "Silver"], answer: "Copper" },
  { question: "What is the function of a transformer?", options: ["Increase or decrease voltage", "Measure current", "Store energy", "Produce light"], answer: "Increase or decrease voltage" },
  { question: "The SI unit of power is?", options: ["Watt", "Joule", "Volt", "Ampere"], answer: "Watt" },
  { question: "Electric energy is measured in?", options: ["Joules", "Kilowatt-hour", "Watt", "Ampere"], answer: "Kilowatt-hour" },
  { question: "Which of these is an insulator?", options: ["Silver", "Graphite", "Wood", "Copper"], answer: "Wood" },
  { question: "Who discovered the relation between current and voltage?", options: ["Faraday", "Ohm", "Newton", "Tesla"], answer: "Ohm" },
  { question: "What is the SI unit of inductance?", options: ["Henry", "Tesla", "Volt", "Ohm"], answer: "Henry" },
  { question: "What is the current if 10 C of charge flows in 2 s?", options: ["2 A", "5 A", "10 A", "20 A"], answer: "5 A" },
  { question: "The filament of a light bulb is usually made of?", options: ["Copper", "Tungsten", "Carbon", "Iron"], answer: "Tungsten" },
  { question: "The resistance of a superconductor is?", options: ["Zero", "Infinite", "Constant", "High"], answer: "Zero" },
  { question: "Which rule is used to find the direction of current in a generator?", options: ["Right hand rule", "Fleming’s right hand rule", "Fleming’s left hand rule", "Ampere’s rule"], answer: "Fleming’s right hand rule" },
  { question: "What is the reciprocal of resistance called?", options: ["Inductance", "Capacitance", "Conductance", "Impedance"], answer: "Conductance" },
  { question: "SI unit of conductance is?", options: ["Siemens", "Ohm", "Volt", "Ampere"], answer: "Siemens" },
  { question: "What is used to convert AC to DC?", options: ["Transformer", "Rectifier", "Motor", "Capacitor"], answer: "Rectifier" },
  { question: "The potential difference between two points is also called?", options: ["Current", "Resistance", "Voltage", "Power"], answer: "Voltage" },
  { question: "1 Volt is equal to?", options: ["1 J/C", "1 C/J", "1 A/C", "1 W/C"], answer: "1 J/C" },
  { question: "Which device stores electrical energy in an electric field?", options: ["Capacitor", "Inductor", "Resistor", "Transformer"], answer: "Capacitor" },
  { question: "Which device opposes sudden changes in current?", options: ["Resistor", "Capacitor", "Inductor", "Fuse"], answer: "Inductor" },
  { question: "The process of joining two wires with solder is called?", options: ["Welding", "Soldering", "Insulating", "Clamping"], answer: "Soldering" },
  { question: "Who invented the electric battery?", options: ["Volta", "Ohm", "Faraday", "Tesla"], answer: "Volta" },
  { question: "What is the heating effect of current used in?", options: ["Bulbs", "Heaters", "Electric iron", "All of these"], answer: "All of these" },
  { question: "Which effect of current is used in an electric motor?", options: ["Heating", "Magnetic", "Chemical", "None"], answer: "Magnetic" },
  { question: "Electrolysis is based on which effect of current?", options: ["Heating", "Magnetic", "Chemical", "Inductive"], answer: "Chemical" },
  { question: "What is the main function of a fuse wire?", options: ["Increase current", "Decrease current", "Prevent overcurrent", "Store energy"], answer: "Prevent overcurrent" },
  { question: "Which device measures small current accurately?", options: ["Ammeter", "Galvanometer", "Voltmeter", "Potentiometer"], answer: "Galvanometer" },
  { question: "Who discovered electromagnetic induction?", options: ["Faraday", "Tesla", "Ohm", "Newton"], answer: "Faraday" },
  { question: "Which of the following has no charge?", options: ["Proton", "Electron", "Neutron", "Ion"], answer: "Neutron" },
  { question: "What is the direction of conventional current?", options: ["Electron flow", "Negative to positive", "Positive to negative", "Random"], answer: "Positive to negative" }
];

electricityQuestions.push(...moreQuestions);

export default electricityQuestions;
