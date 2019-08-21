import { config } from 'dotenv';

config();

const envar = process.env;
export const configuration = Object.freeze({
    port: envar.PORT,
    service_url: envar.SERVICE_URL,
});