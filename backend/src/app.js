import './config/env.config.js';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import {corsOptions, helmetOptions} from './config/security.config.js';
import { requestId } from './shared/middlewares/requestId.middleware.js';
import { errorHandler } from './shared/middlewares/errorHandler.middleware.js';

const app = express();

app.use(helmet(helmetOptions));
app.use(cors(corsOptions));
app.use(requestId);
app.use(express.json());

app.get('/health', (req, res)=>{
    res.status(200).json({status: 'ok'});
});


app.use(errorHandler);

export default app;