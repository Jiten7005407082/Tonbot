async function fetchAnswerFromSheet(message) {
  try {
    const response = await fetch(`${SHEET_API_URL}?question=${encodeURIComponent(message)}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.answer || "Sorry, I don't know the answer to that.";
  } catch (e) {
    console.error("Fetch error:", e);
    return "I'm having trouble accessing my memory right now.";
  }
}
