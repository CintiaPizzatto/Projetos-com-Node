let express = require('express'); // importa o módulo express
let app = express(); // This is the same as the above code       
// app is an instance of the express application            
// o app vai ter acesso a todos objetos que o objeto express tem

// a rota '/' é a rota inicial, nossa página(nosso domínio) inicial
// o método get() é um método do objeto app
// o método get() recebe dois parâmetros: a rota e uma função
// a função recebe dois parâmetros: request e response
// o método send() é um método do objeto response, que envia uma resposta para o navegador
// o método send() recebe um parâmetro: uma string e envia essa string para o navegador
// o método listen() é um método do objeto app, e recebe dois parâmetros: a porta e uma função
// vamos mandar uma resposta para o nosso usuário. Não precisamos nos preocupar com o a solicitação, pois aqui o usuário não está fazendo uma solicitação, ele está acessando a página inicial
app.get('/', (request, response) => { // cria uma rota para a página inicial    
    response.send('<h1>Primeira rota com Express!</h1>'); // envia uma resposta para o navegador    
});

app.get('/teste', (request, response) => { // cria uma rota para a página inicial    
    response.send('Segunda rota com Express!'); // envia uma resposta para o navegador    
});

app.listen(3000, () => { // cria um servidor na porta 3000      
    console.log('Servidor rodando na porta 3000'); // imprime no console do servidor a mensagem 'Servidor rodando na porta 3000'
});



