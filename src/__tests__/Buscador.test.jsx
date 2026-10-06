import { render, screen, fireEvent } from '@testing-library/react'
import Buscador from '../components/Buscador'

describe('<Buscador />', () => {
  test('llama a onBuscar con el texto limpio', () => {
    const onBuscar = vi.fn()
    render(<Buscador onBuscar={onBuscar} cargando={false} />)
    fireEvent.change(screen.getByLabelText('Ciudad'), { target: { value: '  Guayaquil ' } })
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }))
    expect(onBuscar).toHaveBeenCalledWith('Guayaquil')
  })

  test('muestra error y no busca si la entrada es inválida', () => {
    const onBuscar = vi.fn()
    render(<Buscador onBuscar={onBuscar} cargando={false} />)
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }))
    expect(screen.getByRole('alert')).toHaveTextContent('al menos 2')
    expect(onBuscar).not.toHaveBeenCalled()
  })
})
