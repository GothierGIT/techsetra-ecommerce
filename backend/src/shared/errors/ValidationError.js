import {AppError} from './AppError.js';

export class ValidationError extends AppError {
    constructor(message = "Datos inválidos", details = []){
        super(message,400);
        this.details = details;
    }
}