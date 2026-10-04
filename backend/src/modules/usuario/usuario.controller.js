import { usuarioService } from "./internal/index.js";
import {ApiResponse} from '../../shared/utils/ApiResponse.js';
import {HttpStatus} from '../../shared/constants/http-status.constants.js';

export const usuarioController = {
    async registrar(req, res) {
        const usuario = await usuarioService.registrar(req.body);
        res.status(HttpStatus.CREATED).json(new ApiResponse(HttpStatus.CREATED, usuario, 'Usuario registrado correctamente'));
    },
};