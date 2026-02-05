import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'

// hook que vamos testar
import { usePagination } from '../usePagination'

// tipo opcional (se quiser tipagem forte)
import type { Asset } from '../../types/asset'

describe('usePagination', () => {
  // mock de ativos
  const assets: Asset[] = Array.from({ length: 25 }, (_, index) => ({
    id: String(index + 1),
    nome: `Ativo ${index + 1}`,
    status: 'operacional',
  }))

  it('inicia na página 1', () => {
    const { result } = renderHook(() =>
      usePagination({ data: assets, itemsPerPage: 10 })
    )

    expect(result.current.currentPage).toBe(1)
  })

  it('calcula totalPages corretamente', () => {
    const { result } = renderHook(() =>
      usePagination({ data: assets, itemsPerPage: 10 })
    )

    expect(result.current.totalPages).toBe(3)
  })

  it('retorna itens da primeira página', () => {
    const { result } = renderHook(() =>
      usePagination({ data: assets, itemsPerPage: 10 })
    )

    expect(result.current.paginatedData).toHaveLength(10)
    expect(result.current.paginatedData[0].nome).toBe('Ativo 1')
  })

  it('vai para próxima página', () => {
    const { result } = renderHook(() =>
      usePagination({ data: assets, itemsPerPage: 10 })
    )

    act(() => {
      result.current.nextPage()
    })

    expect(result.current.currentPage).toBe(2)
  })

  it('volta para página anterior', () => {
    const { result } = renderHook(() =>
      usePagination({ data: assets, itemsPerPage: 10 })
    )

    act(() => {
      result.current.nextPage()
      result.current.prevPage()
    })

    expect(result.current.currentPage).toBe(1)
  })

  it('vai para página específica', () => {
    const { result } = renderHook(() =>
      usePagination({ data: assets, itemsPerPage: 10 })
    )

    act(() => {
      result.current.goToPage(3)
    })

    expect(result.current.currentPage).toBe(3)
  })
})
