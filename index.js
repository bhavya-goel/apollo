import { Server } from './src'
import { configuration } from './src/config'
const server1 = new Server(configuration)
server1.bootloader()
