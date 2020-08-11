/**
 * API Pokemon Pokedex
 * Autor: Bruno Pessoa Nunes De Melo
 * Framework: Node.js vs 14.5.0
 * versão: 1.0.0
 * 
 */

const app = require('./server/config/express');
const config = require('./server/config/env');

app.listen(config.portApi, () => {
    console.log(
        `A API Pokedex começou e está sendo escutada na porta ${config.portApi} (${config.env})`

    );
});

module.exports = app;