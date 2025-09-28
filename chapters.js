body {
  font-family: Arial, sans-serif;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.chat-container {
  width: 420px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

#chat-box {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
}

.message {
  margin: 8px 0;
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 75%;
}

.bot {
  background: #e0f7fa;
  align-self: flex-start;
}

.user {
  background: #c8e6c9;
  align-self: flex-end;
}

.input-area {
  display: flex;
  border-top: 1px solid #ddd;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
}

button {
  background: #2196f3;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}
button:hover {
  background: #1976d2;
}

.option-btn {
  display: inline-block;
  margin: 5px;
  padding: 6px 12px;
  background: #ffeb3b;
  border-radius: 6px;
  cursor: pointer;
}
.option-btn:hover {
  background: #fdd835;
}
