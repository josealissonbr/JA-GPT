const apiKey = 'SUA API KEY DO GEMINI AQUI';
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

function appendMessage(sender, message) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    appendMessage('Você', userInput);

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: userInput
                        }
                    ]
                }
            ]
        })
    });

    const data = await response.json();
    const botMessage = data.candidates[0].content.parts[0].text;
    appendMessage('Gemini', botMessage);

    document.getElementById('userInput').value = '';
}
