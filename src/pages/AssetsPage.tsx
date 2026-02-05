// Importamos o componente de listagem de ativos.
// Ele é responsável apenas por renderizar a tabela.
import { AssetList } from '../components/AssetList'

// Tipagem dos ativos
import type { Asset } from '../types/asset'

// Importamos nosso hook profissional de paginação.
// Ele centraliza toda a lógica de paginação fora da page.
import { usePagination } from '../hooks/usePagination'

export function AssetsPage() {
  // Dados mockados simulando ativos industriais.
  // Em breve isso virá de uma API.
  const assets: Asset[] = [
    { id: '1', nome: 'Motor Principal', status: 'operacional' },
    { id: '2', nome: 'Bomba Hidráulica', status: 'manutencao' },
    { id: '3', nome: 'Compressor de Ar', status: 'parado' },
    // depois você pode duplicar pra testar várias páginas
  ]

  // Chamamos o hook de paginação.
  // Toda a inteligência de paginação agora mora nele.
  const {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
    pages,
  } = usePagination({
    data: assets,
    itemsPerPage: 10,
  })

  return (
    <main>
      {/* Título da página */}
      <h1>Ativos Industriais</h1>

      {/* Lista recebe apenas os itens já paginados */}
      <AssetList assets={paginatedData} />

      {/* Controles de paginação */}
      <nav style={{ marginTop: '16px' }}>
        {/* Botão página anterior */}
        <button
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          Anterior
        </button>

        {/* Paginação numérica */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            // Destacamos a página atual
            style={{
              fontWeight: page === currentPage ? 'bold' : 'normal',
              marginInline: '4px',
            }}
          >
            {page}
          </button>
        ))}

        {/* Botão próxima página */}
        <button
          disabled={currentPage === totalPages}
          onClick={nextPage}
        >
          Próxima
        </button>
      </nav>
    </main>
  )
}
