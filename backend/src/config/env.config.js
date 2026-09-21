import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  PORT: z.coerce
    .number()
    .int()
    .positive()
    .default(3000),

  DATABASE_URL: z.url(),
});

const { data: env, error } = envSchema.safeParse(process.env);

if (error) {
  console.error('Variables de entorno inválidas');

  const tree = z.treeifyError(error);

  console.error(tree.properties);

  process.exit(1);
}

export { env };