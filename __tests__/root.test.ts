import { testServer } from './utils/server'

describe('GET /', () => {
  test('Deve retornar "API Status - OK"', async () => {
    const response = await testServer.get('/')
    expect(response.text).toBe('API Status - OK')
  })
})
