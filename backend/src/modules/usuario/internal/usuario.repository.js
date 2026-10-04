import { prisma } from "../../../shared/db/prisma.client.js";

export const usuarioRepository = {
    crear: (datos) => prisma.user.create({data: datos}),

    buscarPorId: (id) => prisma.user.findUnique({where: {id}}),

    buscarPorEmail: (email) => prisma.user.findUnique({where: {email}}),

    actualizar: (id, datos) => prisma.user.update({where: {id}, data: datos}),

    eliminar: (id) => prisma.user.delete({where: {id}}),
};