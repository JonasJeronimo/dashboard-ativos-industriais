// Importamos o tipo Asset para garantir tipagem forte.
// Isso evita erros e deixa claro o que o componente espera receber.
import type { Asset } from '../types/asset'
// 'import type' evita erros de runtime por ser TypeScript

// Definimos explicitamente as props do componente.
// AssetList NÃO cria dados, apenas recebe.
interface AssetListProps {
  assets: Asset[]
}

// Componente funcional simples (padrão moderno do React).
// Nada de React.FC.
export function AssetList({ assets }: AssetListProps) {
  // Caso a lista venha vazia, mostramos uma mensagem amigável.
  // Isso evita renderizações quebradas e melhora UX.
  if (assets.length === 0) {
    return <p>Nenhum ativo encontrado.</p>
  }

  // Renderização principal da lista
  return (
    <ul>
      {/* Iteramos sobre os ativos recebidos */}
      {assets.map((asset) => (
        // key é obrigatória para listas no React
        <li key={asset.id}>
          {/* Nome do ativo */}
          <strong>{asset.nome}</strong>

          {/* Status do ativo */}
          {' — '}
          {asset.status}
        </li>
      ))}
    </ul>
  )
}
