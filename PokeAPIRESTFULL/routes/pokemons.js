let express = require('express');
let routes = express.Router();

routes.get('/pokemons', (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        pokemons: [{
            name: 'Pikachu',
            type: 'Eletric',
            color:'yellow',
            id: 1
        }]
    });
});

module.exports = routes;
