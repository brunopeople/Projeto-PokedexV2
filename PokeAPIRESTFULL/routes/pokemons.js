
module.exports = function(app){
    app.get('/pokemons', (req,res) => {
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

    app.get('/admin', (res, req) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            pokemons:[]
        });
    });
};
