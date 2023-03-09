const {createServer} = require('http'); /* cria uma variável (createServer) que recebe o módulo http e a função createServer 
importa o módulo http e cria um servidor */

// usa este método para criar um servidor que recebe uma requisição e retorna uma resposta
let server = createServer((request, response) => { 
    response.writeHead(200, {'Content-Type': 'text/html'}); // escreve o cabeçalho da resposta, e aqui diz o formato do arquivo que vai receber (text/html, ou json, ou xml, etc ). Colocamos o status 200, que significa que a requisição foi bem sucedida. E diz que o Content-type (tipo de conteúdo) é text/html (texto em html)
    response.write('<h1>Olá mundo!</h1>'); // escreve o corpo da resposta
    response.end(); // finaliza a resposta
});

// inicia o servidor na porta 8000 (está simulando um servidor Web)
server.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});

// Para executar o código, abra o terminal, navegue até a pasta do projeto e execute o comando node index.js

