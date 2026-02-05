import { describe, it, expect } from 'vitest'

// Render e utilitários de teste
import { render, screen } from '@testing-library/react'

// Componente que será testado
import { AssetsPage } from '../AssetsPage'

// Router necessário por causa do useNavigate no AssetList
import { MemoryRouter } from 'react-router-dom'

describe('AssetsPage', () => {
  it('renderiza o título da página', () => {
    render(
      <MemoryRouter>
        <AssetsPage />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: /ativos industriais/i })
    ).toBeInTheDocument()
  })

  it('renderiza a tabela de ativos', () => {
    render(
      <MemoryRouter>
        <AssetsPage />
      </MemoryRouter>
    )

    expect(screen.getAllByText('Motor Principal').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Bomba Hidráulica').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Compressor de Ar').length).toBeGreaterThan(0)

  })

  it('renderiza os controles de paginação', () => {
    render(
      <MemoryRouter>
        <AssetsPage />
      </MemoryRouter>
    )

    expect(
      screen.getAllByRole('button', { name: 'Anterior' }).length
    ).toBeGreaterThan(0)

    expect(
      screen.getAllByRole('button', { name: 'Próxima' }).length
    ).toBeGreaterThan(0)
  })
})
