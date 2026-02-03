// Importamos a página de listagem de ativos.
// App apenas decide qual página mostrar.
import { AssetsPage } from './pages/AssetsPage'

function App() {
  return (
    <div>
      {/* Cabeçalho simples da aplicação */}
      <h1>Industrial Dashboard</h1>
      <p>Projeto de estudo e portfólio em React</p>

      {/* Página principal da aplicação */}
      <AssetsPage />
    </div>
  )
}

export default App
