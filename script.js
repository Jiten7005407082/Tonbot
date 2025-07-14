// Initialize avatars
const userAvatar = document.getElementById('userAvatar');
const botAvatar = document.getElementById('botAvatar');

// Hide avatars initially
userAvatar.style.display = 'none';
botAvatar.style.display = 'none';

// Rest of your existing JavaScript code remains the same
// [Include all the previous JavaScript code you had]
// Just make sure to use these avatar elements in your displayMessage function

function displayMessage(message, sender) {
    // Show the appropriate avatar
    if (sender === 'user') {
        userAvatar.style.display = 'block';
        botAvatar.style.display = 'none';
    } else {
        botAvatar.style.display = 'block';
        userAvatar.style.display = 'none';
        
        // Make avatar "talk"
        botAvatar.classList.add('talking');
        setTimeout(() => {
            botAvatar.classList.remove('talking');
        }, 2000);
    }

    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}
