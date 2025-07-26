function trimChat() {
    let chatBox = document.getElementById("chatBox");
    // Keep only the last 6 chat bubbles
    while (chatBox.children.length > 6) {
        chatBox.removeChild(chatBox.children[0]);
    }
}
