<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Noun - Grammar Lesson</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Chapter 1: Noun</h1>
  </header>

  <main>
    <section class="lecture">
      <h2>Lecture</h2>
      <p>
        A <strong>Noun</strong> is the name of a person, place, thing, or idea. 
        Examples: <em>Ram, Delhi, Book, Happiness</em>.
      </p>
      <ul>
        <li><b>Proper Noun:</b> Specific name (e.g., India, John).</li>
        <li><b>Common Noun:</b> General name (e.g., city, boy).</li>
        <li><b>Abstract Noun:</b> Ideas/feelings (e.g., love, honesty).</li>
        <li><b>Collective Noun:</b> Group name (e.g., team, herd).</li>
      </ul>
    </section>

    <section class="quiz">
      <h2>Quiz</h2>
      <div id="quiz-container"></div>
      <button onclick="submitQuiz('noun')">Submit</button>
      <p id="result"></p>
    </section>
  </main>

  <footer>
    <a href="index.html">Back to Home</a>
  </footer>

  <script src="js/questions.js"></script>
  <script src="js/quiz.js"></script>
  <script>
    loadQuiz('noun');
  </script>
</body>
</html>
