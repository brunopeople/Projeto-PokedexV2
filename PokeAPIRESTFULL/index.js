const express = require('express');
let routesIndex = require('./routes/index');
let routesPokemons = require('./routes/pokemons');

let app = express();

app.use(routesIndex);
app.use(routesPokemons);

app.listen(3000, '127.0.0.1', ()=> {
    console.log('servidor rodando!');
}); 
