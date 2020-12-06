import { testServer } from './utils/server'

describe('GET /', () => {
  test('Deve retornar "API Status - ON"', async () => {
    const response = await testServer.get('/')
    expect(response.text).toBe('API Status - ON')
  })
})
