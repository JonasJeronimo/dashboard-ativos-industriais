// Importamos o tipo Asset para tipagem forte
import type { Asset } from '../types/asset'

// Hook de navegação do React Router
import { useNavigate } from 'react-router-dom'

// Props do componente
interface AssetListProps {
  assets: Asset[]
}

// Componente responsável apenas por exibir a listagem
export function AssetList({ assets }: AssetListProps) {
  // Hook que permite navegar programaticamente
  const navigate = useNavigate()

  // Caso não existam ativos
  if (assets.length === 0) {
    return <p>Nenhum ativo encontrado.</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nome do ativo</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {assets.map((asset) => (
          <tr
            key={asset.id}
            // Ao clicar na linha, navegamos para o detalhe do ativo
            onClick={() => navigate(`/assets/${asset.id}`)}
            // Cursor ajuda o usuário a entender que é clicável
            style={{ cursor: 'pointer' }}
          >
            <td>{asset.nome}</td>
            <td>{asset.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
