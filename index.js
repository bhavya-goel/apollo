import { Server } from './src'
import { configuration } from './src/config'
const server = new Server(configuration)

// server call
server.bootloader()
