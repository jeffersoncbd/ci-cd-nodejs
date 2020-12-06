import 'dotenv/config'
import express from 'express'

const server = express()

const { PORT } = process.env
if (!PORT) {
  throw new Error('Porta não definida no arquivo .env')
}

server.get('/', (request, response) => response.send('Hello World'))

server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
})
