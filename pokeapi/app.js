var express = require('express');
var app = express();

//Aqui irá definir qual será a rota principal

app.get('/', function(req,res){
    res.send('RESTFULL API - POKEAPI');
});

//Lista de utilizadores

var pokemons = [
    {id: 1, nome: 'Pickachu', tipo: 'elétrico', estagio:'1'},
    {id: 2, nome: 'Bubassauro', tipo: 'planta', estagio: '1'},
    {id: 3, nome: 'Sharizard', tipo: 'fogo', estagio: '1'},
    {id: 4, nome: 'Mewtoo', tipo: '??', estagio: '2'}
];

//Definir um endpoit da API

app.get('/api/listaPokemons', function(req,res,next){
    res.send(pokemons);
})

// a aplicação disponivel em na porta http://127.0.0.1:3000/
app.listen(8888);