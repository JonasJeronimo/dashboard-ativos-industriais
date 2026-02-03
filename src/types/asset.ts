// Define os possíveis estados de um ativo.
// Usar union types evita strings soltas no código e garante segurança de tipo.
export type AssetStatus = 'operacional' | 'manutencao' | 'parado'

// Representa o modelo de dados de um ativo industrial.
// Essa interface é usada para tipar dados vindos de API, mocks e componentes.
export interface Asset {
  // Identificador único do ativo (ex: id vindo do backend)
  id: string

  // Nome exibido do ativo
  nome: string

  // Estado atual do ativo, restrito aos valores definidos em AssetStatus
  status: AssetStatus
}
