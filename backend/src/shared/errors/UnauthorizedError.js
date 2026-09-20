import { AppError } from "./AppError";

export class UnauthorizedError extends AppError {
    constructor(message = "No autenticado"){
        super(message, 401);
    }
}