import { useState } from 'react'
import { validarCiudad } from '../utils/clima'

export default function Buscador({ onBuscar, cargando }) {
  const [texto, setTexto] = useState('')
  const [error, setError] = useState(null)

  function enviar(e) {
    e.preventDefault()
    const problema = validarCiudad(texto)
    setError(problema)
    if (!problema) onBuscar(texto.trim())
  }

  return (
    <form className="buscador" onSubmit={enviar} role="search">
      <input
        aria-label="Ciudad"
        placeholder="Busca una ciudad, ej. Milagro"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit" disabled={cargando}>
        {cargando ? 'Buscando…' : 'Buscar'}
      </button>
      {error && <p className="error" role="alert">{error}</p>}
    </form>
  )
}
