import { describirClima, formatearTemperatura, nombreDia, validarCiudad } from '../utils/clima'

describe('utilidades de clima', () => {
  test('describe códigos WMO conocidos y desconocidos', () => {
    expect(describirClima(0)).toEqual({ texto: 'Despejado', icono: '☀️' })
    expect(describirClima(1234).texto).toBe('Desconocido')
  })

  test('formatea temperaturas redondeando', () => {
    expect(formatearTemperatura(27.6)).toBe('28°C')
    expect(formatearTemperatura(undefined)).toBe('--')
  })

  test('muestra "Hoy" o el nombre corto del día', () => {
    expect(nombreDia('2026-10-05', '2026-10-05')).toBe('Hoy')
    expect(nombreDia('2026-10-06', '2026-10-05')).toBe('Mar')
  })

  test('valida el nombre de la ciudad', () => {
    expect(validarCiudad(' ')).toMatch(/al menos 2/)
    expect(validarCiudad('Quito123')).toMatch(/letras/)
    expect(validarCiudad('San José')).toBeNull()
  })
})
