import { Express } from "express";
import { Request, Response } from "express";
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req:Request,res:Response)=>{
    res.send('Bem-vindo à minha API!');
});

app.listen(PORT,() =>{
    console.log(`Servidor está ouvindo na porta ${PORT}`)
});