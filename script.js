async function generateResponse(input) {
    // First check your custom responses
    if (/(what('s| is)? your name|who are you)/i.test(input)) {
        return "My name is Thongam Lamnganba (but you can call me Ton).";
    }
    
    // If no custom match, search Google
    try {
        const searchResults = await searchGoogle(input);
        return `According to web sources: ${searchResults[0].snippet}`;
    } catch (error) {
        return "I couldn't find an answer to that question.";
    }
}

async function searchGoogle(query) {
    // You would need to use a backend service for this
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    return await response.json();
}
