import {getAllCarro, getCarroBySigla, createCarro as modelCreateCarro, updateCarro as modelUpdateCarro, delete as modelDeleteCarro} from "../models/carroModels.js";

import { modeloCarro, modeloAtualizacaoCarro } from "../validations/carroValidation.js";

//Função para retornar todos os carros
export const getCarros = (req, res => {
    //Chama a função que retorna todos os carros da base de dados (ou array)
    const carros = getAllCarro();
    //Retorna os carros com status 200
    res.status(200).json(carros);
});

export const getcarro = (req, res => {
    const { sigla } = req.params;
    const carro = getcarrobysigla(sigla.touppercase());

    //se nao for encontrado retorna erro 404
    if (!carro) {

        return res.status(404).json({mensagem: 'carro nao encontrado!'}) 
    };

    res.status(200).json(carro);
});

export const createCarro = (req, res =>{
    const {eroror} = modelocarro.validate(req.body);
    if (error) {
        return res.status(400).json({ mensagem: error.detalis[0].message});
    };

    const novocarro = req.body;
    const carrocriado = modelcreatecarro(novocarro);
    res.status(201).json(carrocriado);
});

export const updatecarro = (req, res =>{
    const { sigla } = req.params;
    const {error} = modeloatualizacaocarro.validate (req.body);
    if (error) {
        return res.status(400).json({mensagem: error.detalis[0].mensage});
    }
})

const carroatualizado = modelupdatecarro