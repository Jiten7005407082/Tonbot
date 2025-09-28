// Quiz questions (5 each)
const quizzes = {
  "Parts of Speech": [
    { q: "How many parts of speech are there?", a: "8" },
    { q: "Which part of speech shows action?", a: "verb" },
    { q: "Which part of speech joins words?", a: "conjunction" },
    { q: "Which part of speech shows sudden feeling?", a: "interjection" },
    { q: "Is 'beautiful' an adjective? (yes/no)", a: "yes" }
  ],
  "About Noun": [
    { q: "What does a noun represent?", a: "person place thing idea" },
    { q: "Is 'school' a noun? (yes/no)", a: "yes" },
    { q: "Which word is a noun: run, teacher, quickly?", a: "teacher" },
    { q: "Is 'love' a noun? (yes/no)", a: "yes" },
    { q: "Does a noun name something? (yes/no)", a: "yes" }
  ],
  "About Pronoun": [
    { q: "Which replaces a noun: verb or pronoun?", a: "pronoun" },
    { q: "Is 'he' a pronoun? (yes/no)", a: "yes" },
    { q: "Is 'they' a pronoun? (yes/no)", a: "yes" },
    { q: "Does a pronoun avoid repetition of noun? (yes/no)", a: "yes" },
    { q: "Is 'book' a pronoun? (yes/no)", a: "no" }
  ],
  "About Adjective": [
    { q: "Which word describes noun: tall or run?", a: "tall" },
    { q: "Is 'happy' an adjective? (yes/no)", a: "yes" },
    { q: "Does an adjective modify a noun? (yes/no)", a: "yes" },
    { q: "Is 'beautiful' adjective? (yes/no)", a: "yes" },
    { q: "Which is adjective: dog, fast, play?", a: "fast" }
  ],
  "About Verb": [
    { q: "Which word is a verb: eat, book, table?", a: "eat" },
    { q: "Does a verb show action? (yes/no)", a: "yes" },
    { q: "Is 'is' a verb? (yes/no)", a: "yes" },
    { q: "Is 'are' a verb? (yes/no)", a: "yes" },
    { q: "Which is verb: quickly, run, tall?", a: "run" }
  ],
  "About Adverb": [
    { q: "Which modifies a verb: noun or adverb?", a: "adverb" },
    { q: "Is 'quickly' an adverb? (yes/no)", a: "yes" },
    { q: "Is 'very' an adverb? (yes/no)", a: "yes" },
    { q: "Is 'dog' an adverb? (yes/no)", a: "no" },
    { q: "Which is adverb: slowly, book, tall?", a: "slowly" }
  ],
  "About Preposition": [
    { q: "Does 'in' show relation? (yes/no)", a: "yes" },
    { q: "Is 'on' a preposition? (yes/no)", a: "yes" },
    { q: "Is 'under' a preposition? (yes/no)", a: "yes" },
    { q: "Which is preposition: quickly, at, dog?", a: "at" },
    { q: "Does preposition link noun/pronoun to others? (yes/no)", a: "yes" }
  ],
  "About Conjunction": [
    { q: "Is 'and' a conjunction? (yes/no)", a: "yes" },
    { q: "Is 'but' a conjunction? (yes/no)", a: "yes" },
    { q: "Does conjunction join words? (yes/no)", a: "yes" },
    { q: "Is 'because' a conjunction? (yes/no)", a: "yes" },
    { q: "Is 'quickly' a conjunction? (yes/no)", a: "no" }
  ],
  "About Interjection": [
    { q: "Which shows sudden feeling: interjection or verb?", a: "interjection" },
    { q: "Is 'oh!' an interjection? (yes/no)", a: "yes" },
    { q: "Is 'alas!' an interjection? (yes/no)", a: "yes" },
    { q: "Is 'run' an interjection? (yes/no)", a: "no" },
    { q: "Is 'wow!' interjection? (yes/no)", a: "yes" }
  ],
  "Kinds of Sentences": [
    { q: "How many kinds of sentences are there?", a: "4" },
    { q: "Which asks a question? (interrogative/imperative)", a: "interrogative" },
    { q: "Which gives command? (imperative/declarative)", a: "imperative" },
    { q: "Which shows strong feeling? (exclamatory/declarative)", a: "exclamatory" },
    { q: "Which states a fact? (declarative/interrogative)", a: "declarative" }
  ],
  "Conversion of Sentences": [
    { q: "Is changing assertive to interrogative conversion? (yes/no)", a: "yes" },
    { q: "Is converting active to passive a conversion? (yes/no)", a: "yes" },
    { q: "Does conversion mean change of form? (yes/no)", a: "yes" },
    { q: "Is declarative to exclamatory conversion? (yes/no)", a: "yes" },
    { q: "Can sentence type be transformed? (yes/no)", a: "yes" }
  ],
  "Tense": [
    { q: "How many main tenses are there? (3/5)", a: "3" },
    { q: "Is 'I eat' present tense? (yes/no)", a: "yes" },
    { q: "Is 'I ate' past tense? (yes/no)", a: "yes" },
    { q: "Is 'I will go' future tense? (yes/no)", a: "yes" },
    { q: "Does tense show time of action? (yes/no)", a: "yes" }
  ],
  "Voice": [
    { q: "Which voice: 'The boy kicked the ball' (active/passive)?", a: "active" },
    { q: "Which voice: 'The ball was kicked by the boy'?", a: "passive" },
    { q: "Does active voice show subject doing action? (yes/no)", a: "yes" },
    { q: "Does passive voice show subject receiving action? (yes/no)", a: "yes" },
    { q: "Is 'The book was read by her' passive? (yes/no)", a: "yes" }
  ],
  "Narration": [
    { q: "Is 'He said, I am happy' direct speech? (yes/no)", a: "yes" },
    { q: "Is 'He said that he was happy' indirect speech? (yes/no)", a: "yes" },
    { q: "Are there 2 types of narration? (yes/no)", a: "yes" },
    { q: "Does direct speech use quotation marks? (yes/no)", a: "yes" },
    { q: "Is 'She said she was coming' indirect? (yes/no)", a: "yes" }
  ],
  "Case": [
    { q: "Does case show relation of noun/pronoun? (yes/no)", a: "yes" },
    { q: "Is nominative case for subject? (yes/no)", a: "yes" },
    { q: "Is objective case for object? (yes/no)", a: "yes" },
    { q: "Is possessive case showing ownership? (yes/no)", a: "yes" },
    { q: "Is 'John’s book' possessive case? (yes/no)", a: "yes" }
  ],
  "Person": [
    { q: "How many persons are in grammar? (3/2)", a: "3" },
    { q: "Is 'I, we' first person? (yes/no)", a: "yes" },
    { q: "Is 'you' second person? (yes/no)", a: "yes" },
    { q: "Is 'he, they' third person? (yes/no)", a: "yes" },
    { q: "Is 'dog' a person in grammar sense? (yes/no)", a: "no" }
  ]
};
