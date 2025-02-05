import carros2025 from './tabela carros.js';

import express from 'express';

import { modelocarro } from './validacao.js'

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2025); // retorna lista de carro com status 200
});

app.get('/:sigla', (req, res) => {
    const siglainformada = req.params.sigla.toLocaleLowerCase();
    const carro = carros2025.find((infocarro) => infocarro.sigla === siglainformada);
    if (!carro){
        res.status(404).send("nao existe carro com a sigla informada!");
        return;
    }
    res.status(200).send(carro);
})         

app.post('/', (req,res) => {
    const novocarro = req.body;
    const { error } = modelocarro.validate(novocarro);
    if (error) {
        res.status(400).send(error);
        return;
    }
    carros2025.push(novocarro);
    res.status(200).send(novocarro);
});

app.listen(3000, () =>{
    console.log("servidor rodando com sucesso na porta 3000")
});

// npm init -y
// npm install express
// node app.js ou ./app.js a