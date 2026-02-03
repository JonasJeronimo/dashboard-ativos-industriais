// Importamos apenas o tipo Asset.
// `import type` garante que isso não vire código JavaScript no build.
import type { Asset } from '../types/asset'

// Props do componente:
// recebe uma lista de ativos já pronta para exibição.
interface AssetListProps {
  assets: Asset[]
}

// Componente responsável apenas por exibir a listagem.
// Não busca dados, não gerencia estado, não aplica regras de negócio.
export function AssetList({ assets }: AssetListProps) {
  // Caso não existam ativos, exibimos um feedback simples ao usuário.
  if (assets.length === 0) {
    return <p>Nenhum ativo encontrado.</p>
  }

  return (
    // Tabela semântica para exibição de dados estruturados
    <table>
      {/* Cabeçalho da tabela define as colunas */}
      <thead>
        <tr>
          <th>Nome do ativo</th>
          <th>Status</th>
        </tr>
      </thead>

      {/* Corpo da tabela com os dados */}
      <tbody>
        {assets.map((asset) => (
          // Cada linha representa um ativo
          <tr key={asset.id}>
            {/* Coluna: nome do ativo */}
            <td>{asset.nome}</td>

            {/* Coluna: status do ativo */}
            <td>{asset.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
