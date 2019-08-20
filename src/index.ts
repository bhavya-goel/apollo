import { configuration, IConfig } from './config';
import { Server } from './server';
const server1 = new Server(configuration);
server1.bootstrap();
