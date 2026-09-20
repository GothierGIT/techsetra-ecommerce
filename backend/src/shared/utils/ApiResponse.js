export class ApiResponse {
    constructor(statusCode, data = null, message = "Operación Exitosa"){
        this.success = statusCode < 400;
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;
    }
}