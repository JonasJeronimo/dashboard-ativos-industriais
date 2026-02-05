import { useState } from 'react'

interface UsePaginationProps<T> {
  data: T[]
  itemsPerPage: number
}

export function usePagination<T>({ data, itemsPerPage }: UsePaginationProps<T>) {
  // Página atual
  const [currentPage, setCurrentPage] = useState(1)

  // Total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage)

  // Índices do slice
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // Dados paginados
  const paginatedData = data.slice(startIndex, endIndex)

  // Ir para próxima página
  function nextPage() {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  // Página anterior
  function prevPage() {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  // Ir para página específica
  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // Array de páginas [1,2,3]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
    pages,
  }
}
