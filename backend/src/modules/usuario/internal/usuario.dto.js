export function usuarioDto(usuario) {
    return {
        id: usuario.id,
        email: usuario.email,
        firstName: usuario.firstName,
        lastName: usuario.lastName, 
        role: usuario.role,
        createdAt: usuario.createdAt,
    };
}