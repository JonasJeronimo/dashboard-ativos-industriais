import { useParams } from 'react-router-dom'

export function AssetDetailsPage() {
  // Capturamos o parâmetro da URL
  const { id } = useParams()

  return (
    <main>
      <h2>Detalhe do Ativo</h2>

      {/* Por enquanto mostramos apenas o ID */}
      <p>ID do ativo: {id}</p>
    </main>
  )
}
