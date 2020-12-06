import { testServer } from './utils/server'

describe('GET /', () => {
  test('Deve retornar "Hello World"', async () => {
    const response = await testServer.get('/')
    expect(response.text).toBe('Hello World')
  })
})
