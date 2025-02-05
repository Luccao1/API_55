import jwt from "jsonwebtoken";

const JWT_SECRET = "secreta-chave";

export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split("")[1];

    if (!token) {
        return res.status(401).json({ mensagem: "token nao fornecido!"});
    }


    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;

      next();
    } catch (error) {}
};    
