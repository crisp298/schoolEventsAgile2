import { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";
import participantsRoutes from "./routes/participantsRoutes";




const express = require('express');
const server = express();
const PORT = 3000;

dotenv.config();


server.use(cors());
server.use(express.urlencoded({extended: false}));
server.use(express.json());

server.get('/',(req:Request,res:Response)=>{
    res.send('Bem-vindo à minha API!');
});

server.listen(PORT,() =>{
    console.log(`Servidor está ouvindo na porta ${PORT}`)
});

server.use("/Participants", participantsRoutes);
