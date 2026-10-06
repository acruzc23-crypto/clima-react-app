import { useEffect } from 'react'
import Buscador from './components/Buscador'
import ClimaActual from './components/ClimaActual'
import Pronostico from './components/Pronostico'
import { useClima } from './useClima'

export default function App() {
  const { cargando, error, ciudad, clima, consultar } = useClima()

  useEffect(() => {
    consultar(localStorage.getItem('ultimaCiudad') || 'Milagro')
  }, [consultar])

  return (
    <main className="app">
      <header>
        <h1>🌎 Clima App</h1>
        <p>Clima actual y pronóstico con React + Open-Meteo</p>
      </header>
      <Buscador onBuscar={consultar} cargando={cargando} />
      {error && <p className="error" role="alert">{error}</p>}
      {cargando && !clima && <p className="cargando">Cargando…</p>}
      {ciudad && clima && (
        <>
          <ClimaActual ciudad={ciudad} actual={clima.actual} />
          <Pronostico dias={clima.dias} />
        </>
      )}
      <footer>Desarrollado por Alfredo Cruz · Datos de <a href="https://open-meteo.com" target="_blank" rel="noreferrer">Open-Meteo</a></footer>
    </main>
  )
}
