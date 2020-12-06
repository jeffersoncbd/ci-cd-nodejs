import { testServer } from './utils/server'

describe('GET /', () => {
  test('Deve retornar "API - OK"', async () => {
    const response = await testServer.get('/')
    expect(response.text).toBe('API - OK')
  })
})
