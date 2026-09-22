import { AppError } from '../errors/index.js';
import { HttpStatus } from '../constants/http-status.constants.js';
import { logger } from '../utils/logger.js';

export function errorHandler(err, req, res, next) {
  const isAppError = err instanceof AppError;
  const statusCode = isAppError ? err.statusCode : HttpStatus.INTERNAL_SERVER_ERROR;
  const message = isAppError ? err.message : 'Error interno del servidor';

  logger.error(
    {
      requestId: req.id,
      statusCode,
      isOperational: err.isOperational ?? false,
      stack: err.stack,
    },
    message
  );

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    ...(isAppError && err.details ? { details: err.details } : {}),
  });
}