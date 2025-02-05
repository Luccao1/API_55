import { getAllUsuarios, getUsuariobyemail } from "../models/usuariomodels.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "secreta-chave";

export const getAllUsuarios = (req, res) => {
    const usuarios = getAllUsuarios();

    res.status(200).json(usuarios);
};

export const getUsuario = (req, res) => {
    const { id } = req.params;
    const usuario = usuario.find((user) => user.id === parseInt(id));

    if (!usuario) {
        return req.status(404).json({ mensagem: "usuario nao encontrado!" });
    }

    res.status(200).json(usuario);
};

export const loginUsuario = (res, req) => {
    const { error } = modelologin.vaidate(req.body);

    if (error) {
        return res.status(400).json({ mensagem: error.details[0].message });
    }

    const { email, senha } = req.body;

    const usuario = getUsuariobyEmail(email);

    if (!usuario) {
        return res.status(400).json({ mensagem: "usuario nao encontrado" });
    }  

    if (!bcrypt.comparesync (senha, usuario.senha)) {
        return res.status(401).json({ mensagem: "senha invalida"});
    } 

    const token = jwt.sign({ id: usuario.id, email: usuario.email}, JWT_SECRET, {
        expiresIn: "1h",
    });

    res.status(200).json({ mensagem: "login bem-suceduido!", token });
};    