// Importa as funções de estrutura de teste do Vitest
import { describe, it, expect } from 'vitest'

// Importa utilitários para renderizar componentes e buscar elementos na tela
import { render, screen } from '@testing-library/react'

// Importa componentes do React Router necessários para simular navegação
import { MemoryRouter, Route, Routes } from 'react-router-dom'

// Importa o componente que será testado
import { AssetDetailsPage } from '../AssetDetailsPage'

describe('AssetDetailsPage', () => {
  it('renderiza o título da página de detalhe', () => {
    // Renderiza o componente simulando acesso à rota /assets/1
    render(
      <MemoryRouter initialEntries={['/assets/1']}>
        <Routes>
          <Route path="/assets/:id" element={<AssetDetailsPage />} />
        </Routes>
      </MemoryRouter>
    )

    // Verifica se o título da página de detalhe aparece na tela
    expect(
      screen.getByRole('heading', { name: /detalhe do ativo/i })
    ).toBeInTheDocument()
  })

  it('exibe o id do ativo vindo da URL', () => {
    // Renderiza o componente simulando acesso à rota /assets/42
    render(
      <MemoryRouter initialEntries={['/assets/42']}>
        <Routes>
          <Route path="/assets/:id" element={<AssetDetailsPage />} />
        </Routes>
      </MemoryRouter>
    )

    // Verifica se o ID vindo da URL é exibido corretamente na tela
    expect(screen.getByText(/id do ativo: 42/i)).toBeInTheDocument()
  })
})
