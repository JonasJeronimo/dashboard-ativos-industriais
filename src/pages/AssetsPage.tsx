// Importamos o hook de estado do React
import { useState } from 'react'

// Importamos o componente responsável por renderizar a lista.
// A page apenas orquestra, não renderiza item por item.
import { AssetList } from '../components/AssetList'

// Importamos o tipo Asset para tipar os dados mockados.
import type { Asset } from '../types/asset'
// 'import type' evita que isso vire código JavaScript no build

export function AssetsPage() {
  // Dados mockados simulando ativos industriais.
  // Em um cenário real, isso viria de uma API.
  const assets: Asset[] = [
    { id: '1', nome: 'Motor Principal', status: 'operacional' },
    { id: '2', nome: 'Bomba Hidráulica', status: 'manutencao' },
    { id: '3', nome: 'Compressor de Ar', status: 'parado' },
    // você pode duplicar depois pra testar várias páginas
  ]

  // Estado que controla a página atual
  const [currentPage, setCurrentPage] = useState(1)

  // Quantidade fixa de itens por página
  const itemsPerPage = 10

  // Índice inicial do recorte
  const startIndex = (currentPage - 1) * itemsPerPage

  // Índice final do recorte
  const endIndex = startIndex + itemsPerPage

  // Ativos que serão exibidos na página atual
  const paginatedAssets = assets.slice(startIndex, endIndex)

  // Total de páginas
  const totalPages = Math.ceil(assets.length / itemsPerPage)

  return (
    <main>
      {/* Título da página */}
      <h1>Ativos Industriais</h1>

      {/* Lista recebe apenas os ativos da página atual */}
      <AssetList assets={paginatedAssets} />

      {/* Controles de paginação */}
      <nav>
        <button
          // Não permite voltar da primeira página
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Anterior
        </button>

        {/* Indicador simples de página */}
        <span>
          Página {currentPage} de {totalPages}
        </span>

        <button
          // Não permite avançar além da última página
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Próxima
        </button>
      </nav>
    </main>
  )
}
