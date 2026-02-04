// Importamos os componentes de roteamento
import { Routes, Route } from 'react-router-dom'

// Página de listagem de ativos
import { AssetsPage } from './pages/AssetsPage'

// Página de detalhe do ativo (vamos criar já já)
import { AssetDetailsPage } from './pages/AssetDetailsPage'

function App() {
  return (
    <div>
      {/* Cabeçalho fixo da aplicação */}
      <header>
        <h1>Industrial Dashboard</h1>
        <p>Projeto de estudo e portfólio em React</p>
      </header>

      {/* Definição das rotas da aplicação */}
      <Routes>
        {/* Rota principal: listagem de ativos */}
        <Route path="/" element={<AssetsPage />} />

        {/* Rota de detalhe: um ativo específico */}
        <Route path="/assets/:id" element={<AssetDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
