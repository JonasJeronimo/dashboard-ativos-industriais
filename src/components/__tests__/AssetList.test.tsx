import { describe, it, expect } from 'vitest'

// Funções principais de teste
import { render, screen } from '@testing-library/react'

// Router para testes
import { MemoryRouter } from 'react-router-dom'

// Componente que vamos testar
import { AssetList } from '../AssetList'

// Tipo para mockar dados
import type { Asset } from '../../types/asset'

describe('AssetList', () => {
  it('renderiza mensagem quando a lista está vazia', () => {
    render(
      <MemoryRouter>
        <AssetList assets={[]} />
      </MemoryRouter>
    )

    expect(screen.getByText('Nenhum ativo encontrado.')).toBeInTheDocument()
  })

  it('renderiza uma lista de ativos corretamente', () => {
    const assets: Asset[] = [
      { id: '1', nome: 'Motor Principal', status: 'operacional' },
      { id: '2', nome: 'Bomba Hidráulica', status: 'manutencao' },
    ]

    render(
      <MemoryRouter>
        <AssetList assets={assets} />
      </MemoryRouter>
    )

    expect(screen.getByText('Motor Principal')).toBeInTheDocument()
    expect(screen.getByText('Bomba Hidráulica')).toBeInTheDocument()
  })
})
