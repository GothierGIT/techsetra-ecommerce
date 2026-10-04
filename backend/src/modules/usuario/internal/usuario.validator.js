import { z } from 'zod';

export const crearUsuarioSchema = z.object({
    email: z.email(),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres').max(72, 'La contraseña no puede superar los 72 caracteres'),
    firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
});

export const actualizarUsuarioSchema = crearUsuarioSchema.omit({password: true}).partial();