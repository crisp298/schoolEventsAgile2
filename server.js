"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send('Bem-vindo à minha API!');
});
app.listen(PORT, function () {
    console.log("Servidor est\u00E1 ouvindo na porta ".concat(PORT));
});
