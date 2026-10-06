// Traduce los códigos WMO que devuelve Open-Meteo a texto e ícono
const CODIGOS = {
  0: ['Despejado', '☀️'],
  1: ['Mayormente despejado', '🌤️'],
  2: ['Parcialmente nublado', '⛅'],
  3: ['Nublado', '☁️'],
  45: ['Neblina', '🌫️'],
  48: ['Neblina con escarcha', '🌫️'],
  51: ['Llovizna ligera', '🌦️'],
  53: ['Llovizna', '🌦️'],
  55: ['Llovizna intensa', '🌧️'],
  61: ['Lluvia ligera', '🌦️'],
  63: ['Lluvia', '🌧️'],
  65: ['Lluvia intensa', '🌧️'],
  71: ['Nevada ligera', '🌨️'],
  73: ['Nevada', '🌨️'],
  75: ['Nevada intensa', '❄️'],
  80: ['Chubascos ligeros', '🌦️'],
  81: ['Chubascos', '🌧️'],
  82: ['Chubascos violentos', '⛈️'],
  95: ['Tormenta eléctrica', '⛈️'],
  96: ['Tormenta con granizo', '⛈️'],
  99: ['Tormenta fuerte con granizo', '⛈️'],
}

export function describirClima(codigo) {
  const [texto, icono] = CODIGOS[codigo] ?? ['Desconocido', '❔']
  return { texto, icono }
}

export function formatearTemperatura(valor, unidad = 'C') {
  if (typeof valor !== 'number' || Number.isNaN(valor)) return '--'
  return `${Math.round(valor)}°${unidad}`
}

export function nombreDia(fechaISO, hoyISO) {
  if (fechaISO === hoyISO) return 'Hoy'
  const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  const [a, m, d] = fechaISO.split('-').map(Number)
  return dias[new Date(a, m - 1, d).getDay()]
}

export function validarCiudad(texto) {
  const limpio = texto.trim()
  if (limpio.length < 2) return 'Escribe al menos 2 letras'
  if (!/^[\p{L}\s.'-]+$/u.test(limpio)) return 'Solo se permiten letras y espacios'
  return null
}
