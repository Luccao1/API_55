import joi from "joi";

export const modelousuario = joi.object({
    nome: joi.string().min(3).required(),
    email: joi.string().email().required(),
    senha: joi.string().min(6).required(),
});

export const modelogin = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().min(6).required(),
});

export const modeloatualizacaousuario = joi.object({
    nome: joi.string().min(3),
    email: joi.string().email(),
    senha: joi.string().min(6),
}).min(1);