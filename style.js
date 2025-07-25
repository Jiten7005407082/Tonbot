body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

#container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

#chat {
  background-color: white;
  border: 1px solid #ccc;
  height: 400px;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 10px;
}

.message {
  margin: 10px 0;
  padding: 8px 12px;
  border-radius: 20px;
  max-width: 80%;
  line-height: 1.4;
}

.bot {
  background-color: #e0e0e0;
  text-align: left;
}

.user {
  background-color: #0084ff;
  color: white;
  margin-left: auto;
  text-align: right;
}

input[type='text'] {
  width: calc(100% - 50px);
  padding: 10px;
  font-size: 16px;
}

button {
  margin: 5px 5px 0 0;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  background-color: #5cb85c;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #4cae4c;
}
