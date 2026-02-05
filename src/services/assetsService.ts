// Importa a tipagem de Asset para garantir retorno tipado
import type { Asset } from '../types/asset'

// Simula um atraso de requisição como se viesse de uma API real
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Define dados mockados que simulam resposta do backend
const mockAssets: Asset[] = [
  { id: '1', nome: 'Motor Principal', status: 'operacional' },
  { id: '2', nome: 'Bomba Hidráulica', status: 'manutencao' },
  { id: '3', nome: 'Compressor de Ar', status: 'parado' },
]

// Centraliza as operações relacionadas a ativos
export const assetsService = {
  // Retorna lista de ativos simulando chamada assíncrona para API
  async getAssets(): Promise<Asset[]> {
    // Simula tempo de rede antes de retornar dados
    await delay(500)

    // Retorna os ativos mockados
    return mockAssets
  },
}
