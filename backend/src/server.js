import app from './app.js';
import {env} from './config/env.config.js';
import {logger} from './shared/utils/logger.js'

const server = app.listen(env.PORT, () =>{
    logger.info(`Servidor corriendo en http://localhost:${env.PORT}`);
});

process.on('SIGTERM', ()=>{
    logger.info('SIGTERM recibido. Cerrando servidor...');
    server.close(()=>{
        logger.info('Servidor cerrado correctamente');
        process.exit(0);
    });
});