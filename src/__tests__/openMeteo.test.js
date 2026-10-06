import { buscarCiudad } from '../services/openMeteo'

describe('servicio Open-Meteo', () => {
  afterEach(() => vi.restoreAllMocks())

  test('devuelve la primera ciudad encontrada', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ results: [{ name: 'Milagro', country: 'Ecuador', latitude: -2.13, longitude: -79.59, timezone: 'America/Guayaquil' }] }),
    })
    const c = await buscarCiudad('Milagro')
    expect(c).toMatchObject({ nombre: 'Milagro', pais: 'Ecuador' })
  })

  test('lanza error si no hay resultados', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, json: async () => ({}) })
    await expect(buscarCiudad('Xyzabc')).rejects.toThrow('No se encontró')
  })
})
