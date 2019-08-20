import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
const envar = process.env;
export const configuration: IConfig = Object.freeze({
    port: envar.PORT,
    service_url: envar.SERVICE_URL,
});
