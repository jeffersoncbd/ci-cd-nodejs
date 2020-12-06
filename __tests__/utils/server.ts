import request from 'supertest'

import { Server } from '../../src/modules/Server'

const server = new Server()

export const testServer = request(server.server)
