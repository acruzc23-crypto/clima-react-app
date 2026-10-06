import { useCallback, useState } from 'react'
import { buscarCiudad, obtenerClima } from './services/openMeteo'

// Hook personalizado: encapsula estado de carga, error y datos
export function useClima() {
  const [estado, setEstado] = useState({ cargando: false, error: null, ciudad: null, clima: null })

  const consultar = useCallback(async (nombre) => {
    setEstado((e) => ({ ...e, cargando: true, error: null }))
    try {
      const ciudad = await buscarCiudad(nombre)
      const clima = await obtenerClima(ciudad)
      setEstado({ cargando: false, error: null, ciudad, clima })
      localStorage.setItem('ultimaCiudad', ciudad.nombre)
    } catch (err) {
      setEstado((e) => ({ ...e, cargando: false, error: err.message }))
    }
  }, [])

  return { ...estado, consultar }
}
