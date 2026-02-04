// Hook de estado do React
import { useState } from 'react'

// Componente de listagem
import { AssetList } from '../components/AssetList'

// Tipagem dos ativos
import type { Asset } from '../types/asset'

export function AssetsPage() {
  // Dados mockados simulando ativos industriais
  const assets: Asset[] = [
    { id: '1', nome: 'Motor Principal', status: 'operacional' },
    { id: '2', nome: 'Bomba Hidráulica', status: 'manutencao' },
    { id: '3', nome: 'Compressor de Ar', status: 'parado' },
    // depois você pode duplicar pra testar várias páginas
  ]

  // Página atual
  const [currentPage, setCurrentPage] = useState(1)

  // Quantidade de itens por página
  const itemsPerPage = 10

  // Cálculo dos índices do recorte
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // Ativos visíveis na página atual
  const paginatedAssets = assets.slice(startIndex, endIndex)

  // Total de páginas
  const totalPages = Math.ceil(assets.length / itemsPerPage)

  // Criamos um array com os números das páginas
  // Ex: [1, 2, 3]
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <main>
      {/* Título da página */}
      <h1>Ativos Industriais</h1>

      {/* Lista recebe apenas os itens da página atual */}
      <AssetList assets={paginatedAssets} />

      {/* Controles de paginação */}
      <nav style={{ marginTop: '16px' }}>
        {/* Botão anterior */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Anterior
        </button>

        {/* Paginação numérica */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            // Destacamos visualmente a página ativa
            style={{
              fontWeight: page === currentPage ? 'bold' : 'normal',
              marginInline: '4px',
            }}
          >
            {page}
          </button>
        ))}

        {/* Botão próxima */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Próxima
        </button>
      </nav>
    </main>
  )
}
