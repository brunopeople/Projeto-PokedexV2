const http = require('http'); // chamando a constante http e carregando o módulo

//criando um servidor local com a variável http, a variável instanciada chama o método para criar servidor 
// com métodos que para cada requisição que este servidor tiver ele tem que dá uma resposta.
let http = http.createServer((req, res) => {
    console.log('URL', req.url);
    console.log('METHOD', req.method);
});


//definindo o servidor criado para uma porta em um servidor remoto!!
server.listen(3000, '127.0.0.1' , () => {
    console.log('servidor rodando!');
})