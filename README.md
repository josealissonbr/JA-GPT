
# JA-GPT

Este repositório demonstra como usar a API do Gemini para gerar textos generativos utilizando inteligência artificial. Usaremos uma interface simples em HTML e JavaScript para interagir com a API do Gemini.

## Requisitos

- Navegador web moderno
- Editor de texto (VSCode, Sublime, etc.)
- Chave da API do Gemini

## Estrutura do Projeto

```
JA-GPT/
├── index.html
├── styles.css
└── script.js
```

## Conteúdo dos Arquivos

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JA-GPT Chat Bot</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="chat-container">
        <div id="chatbox" class="chatbox"></div>
        <input type="text" id="userInput" placeholder="Type your message here..." />
        <button onclick="sendMessage()">Send</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### styles.css

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.chat-container {
    width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
}

.chatbox {
    height: 300px;
    padding: 10px;
    overflow-y: scroll;
    border-bottom: 1px solid #ddd;
}

#userInput {
    width: calc(100% - 50px);
    padding: 10px;
    border: none;
    border-top: 1px solid #ddd;
    outline: none;
}

button {
    width: 50px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    outline: none;
}
```

### script.js

```javascript
const apiKey = 'YOUR_GEMINI_API_KEY';
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
    appendMessage('You', userInput);

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
    appendMessage('Bot', botMessage);

    document.getElementById('userInput').value = '';
}
```

## Como Usar

1. Clone este repositório:

```sh
git clone https://github.com/seu-usuario/JA-GPT.git
```

2. Navegue até o diretório do projeto:

```sh
cd JA-GPT
```

3. Abra o arquivo `index.html` no seu navegador.

4. Insira a sua chave da API do Gemini no arquivo `script.js` substituindo `YOUR_GEMINI_API_KEY`.

5. Digite sua mensagem na caixa de entrada e clique em "Send". O bot responderá utilizando a API do Gemini.

## Contribuição

Sinta-se à vontade para contribuir com este projeto enviando pull requests. Para grandes mudanças, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
