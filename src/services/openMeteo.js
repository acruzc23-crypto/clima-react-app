// Cliente de la API pública Open-Meteo (no requiere API key)
const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const CLIMA_URL = 'https://api.open-meteo.com/v1/forecast'

export async function buscarCiudad(nombre) {
  const url = `${GEO_URL}?name=${encodeURIComponent(nombre)}&count=1&language=es&format=json`
  const res = await fetch(url)
  if (!res.ok) throw new Error('No se pudo contactar el servicio de búsqueda')
  const data = await res.json()
  if (!data.results?.length) throw new Error(`No se encontró la ciudad "${nombre}"`)
  const { name, country, latitude, longitude, timezone } = data.results[0]
  return { nombre: name, pais: country, latitud: latitude, longitud: longitude, zona: timezone }
}

export async function obtenerClima({ latitud, longitud, zona = 'auto' }) {
  const params = new URLSearchParams({
    latitude: latitud,
    longitude: longitud,
    timezone: zona,
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
    forecast_days: '5',
  })
  const res = await fetch(`${CLIMA_URL}?${params}`)
  if (!res.ok) throw new Error('No se pudo obtener el clima')
  const data = await res.json()
  return {
    actual: {
      temperatura: data.current.temperature_2m,
      sensacion: data.current.apparent_temperature,
      humedad: data.current.relative_humidity_2m,
      viento: data.current.wind_speed_10m,
      codigo: data.current.weather_code,
    },
    dias: data.daily.time.map((fecha, i) => ({
      fecha,
      codigo: data.daily.weather_code[i],
      max: data.daily.temperature_2m_max[i],
      min: data.daily.temperature_2m_min[i],
      lluvia: data.daily.precipitation_probability_max[i],
    })),
  }
}
