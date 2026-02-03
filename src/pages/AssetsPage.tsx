// Importamos o componente responsável por renderizar a lista.
// A page apenas orquestra, não renderiza item por item.
import { AssetList } from '../components/AssetList'

// Importamos o tipo Asset para tipar os dados mockados.
import type { Asset } from '../types/asset'
// 'import type' evita erros de runtime por ser TypeScript

export function AssetsPage() {
  // Dados mockados simulando ativos industriais.
  // Por enquanto não usamos API.
  const assets: Asset[] = [
    {
      id: '1',
      nome: 'Motor Principal',
      status: 'operacional',
    },
    {
      id: '2',
      nome: 'Bomba Hidráulica',
      status: 'manutencao',
    },
    {
      id: '3',
      nome: 'Compressor de Ar',
      status: 'parado',
    },
  ]

  return (
    <main>
      {/* Título da página */}
      <h1>Ativos Industriais</h1>

      {/* Passamos os dados para o componente de lista */}
      <AssetList assets={assets} />
    </main>
  )
}
