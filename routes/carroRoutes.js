import express from "express";
import {
    getcarros,
    getcarro,
    createcarro,
    uptadecarro,
    deletecarro,
} from "../Controllers/carroController.js";

const router = express.Router

router.get('/', getcarros);

router.get('/:sigla', getcarro);

router.post('/', createcarro);

router.put("/:sigla", updatecarro);

router.delete("/:sigla", deletecarro);

export default router;