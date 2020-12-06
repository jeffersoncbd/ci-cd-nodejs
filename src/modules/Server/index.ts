import 'dotenv/config'
import express from 'express'

export class Server {
  server: express.Express

  constructor() {
    this.server = express()
    this.configureServer()
  }

  private configureServer() {
    this.server.get('/', (request, response) => response.send('API Status - OK'))
  }

  start() {
    const { PORT } = process.env
    if (!PORT) {
      throw new Error('Porta não definida no arquivo .env')
    }
    
    this.server.listen(PORT, () => {
      console.log(`Servidor iniciado na porta ${PORT}`)
    })
  }
}
