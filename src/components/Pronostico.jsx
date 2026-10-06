import { describirClima, formatearTemperatura, nombreDia } from '../utils/clima'

export default function Pronostico({ dias }) {
  const hoy = dias[0]?.fecha
  return (
    <section className="tarjeta">
      <h3>Pronóstico de 5 días</h3>
      <ul className="pronostico">
        {dias.map((d) => {
          const { texto, icono } = describirClima(d.codigo)
          return (
            <li key={d.fecha} title={texto}>
              <span className="dia">{nombreDia(d.fecha, hoy)}</span>
              <span className="icono-sm" aria-label={texto}>{icono}</span>
              <span className="rango">
                {formatearTemperatura(d.max)} / <small>{formatearTemperatura(d.min)}</small>
              </span>
              <span className="lluvia">💧 {d.lluvia ?? 0}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
