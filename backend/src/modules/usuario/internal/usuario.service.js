import bcrypt from 'bcrypt';
import {z} from 'zod';
import {usuarioRepository} from './usuario.repository.js';
import {usuarioDto} from './usuario.dto.js';
import {crearUsuarioSchema} from './usuario.validator.js';
import {ConflictError, ValidationError} from '../../../shared/errors/index.js';

const SALT_ROUNDS = 12;

export const usuarioService = {
    async registrar(datos) {
        const resultado = crearUsuarioSchema.safeParse(datos);
        if(!resultado.success){
             
            throw new ValidationError('Datos inválidos', z.flattenError(resultado.error).fieldErrors
            );
        }

        const {email, password, firstName, lastName} = resultado.data;
        const emailNormalizado = email.toLowerCase();

        const existente = await usuarioRepository.buscarPorEmail(email);
        if(existente) {
            throw new ConflictError('Ya existe una cuenta con este correo');
        }

        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

        try {
            const usuario = await usuarioRepository.crear({
                email: emailNormalizado,
                password: passwordHash, 
                firstName,
                lastName,
            });
            return usuarioDto(usuario);
        } 
        catch (error){
            if(error?.code === 'P2002'){
                throw new ConflictError('Ya existe una cuenta con este correo');
            }
            throw error;
        }
    }
}