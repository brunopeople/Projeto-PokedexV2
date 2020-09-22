const http = require('http'); //chamando a o módulo http 


// criando o servidor local, definindo a variável server, instanciando o modulo http e chamando o método
// createServer, com isto recebe dois paramêtros res e req, estes parâmetros servem para quando o servidor tiver uma requisição ele responder e trazer uma 
let server = http.createServer((req, res) => {
    console.log('URL', req.url);
    console.log('METHOD:', req.method);

    switch(req.url){
        case '/':

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Olá</h1>');

        break;

        case '/pokemons':

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            pokemons:[{
                name: 'Pikachu',
                type: 'Eletric',
                color: 'yellow',
                id: 1
            }]
        }));

        break;
    }
});
    server.listen(3000, '127.0.0.1', ()=>{
        console.log('servidor rodando!!');
    });
