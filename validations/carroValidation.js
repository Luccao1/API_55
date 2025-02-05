import joi from "joi";

export const modeloCarro = joi.object({
    nome: joi.string().min(3).required(), //nome do carro, pelo menos 3 caracteres
    sigla: joi.string().length(3).required(), // sigla ou modelo, 3 caracteres
    velocidademaxima: joi.number().min(1).required(), // potencia minima de 1 cv
    potencia: joi.number().min(1).required(), // velocidade minima de 1km/h
    consumo: joi.number().min(0.1).required(), // 
});

export const modeloAtualizacaoCarro = joi.object({
    nome: joi.string().min(3).messages({
        'string.min': "O nome do carro deve ter pelo menos 3 Caracteres",
        'Any.required': "o nome do carro é obrigatoria.",
    }),
    
    sigla: joi.string().length(3).messages({
        'string.length': "A sigla deve ter exatamente 3 Caracteres",
        'Any.required': "a sigla é obrigatoria.",
    }),

    velocidademaxima: joi.number().min(1).messages({
        'number.min': "A velcidade maxima deve ser maior ou igual a 1",
        'Any.required': "a velocidade maxima é obrigatoria.",
    }), 

    potencia: joi.number().min(1).messages({
        'number.min': "A potencia deve ser maior ou igual a 1",
        'Any.required': "a potencia é obrigatoria.",
    }),
    consumo: joi.number().min(0.1).messages({
        'number.min': "O consumo deve ser maior ou igual a 0.1",
        'Any.required': "oconsumo é obrigatoria.",
    }),
}).min(1);

// npm install joi