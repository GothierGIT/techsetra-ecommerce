import {z} from 'zod';
import { process } from 'zod/v4/core';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().int().positive().default(3000),
    DATABASE_URL: z.url(),

});

const {data: env, error} = envSchema.safeParse(process.env);

if(error){
    console.error('Variables de entorno inválidas');
    console.error(error.fieldErrors());
    process.exit(1);
}


export {env}