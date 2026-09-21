const AllowedOrigins = process.env.NODE_ENV === 'production' 
? ['https://techsetra.com']
: ['http://localhost:3000'];

export const corsOptions = {
    origin: AllowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

export const helmetOptions = {
    crossOriginResourcePolicy: {policy: 'cross-origin'}
}