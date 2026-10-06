import { describirClima, formatearTemperatura } from '../utils/clima'

export default function ClimaActual({ ciudad, actual }) {
  const { texto, icono } = describirClima(actual.codigo)
  return (
    <section className="tarjeta actual">
      <h2>{ciudad.nombre}, <span>{ciudad.pais}</span></h2>
      <div className="principal">
        <span className="icono" aria-hidden="true">{icono}</span>
        <span className="temp">{formatearTemperatura(actual.temperatura)}</span>
      </div>
      <p className="descripcion">{texto}</p>
      <ul className="detalles">
        <li>Sensación <strong>{formatearTemperatura(actual.sensacion)}</strong></li>
        <li>Humedad <strong>{actual.humedad}%</strong></li>
        <li>Viento <strong>{Math.round(actual.viento)} km/h</strong></li>
      </ul>
    </section>
  )
}
