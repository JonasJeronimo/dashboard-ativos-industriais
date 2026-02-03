// StrictMode ajuda a identificar problemas durante o desenvolvimento
import { StrictMode } from 'react'

// createRoot é a API moderna do React 18+
import { createRoot } from 'react-dom/client'

// BrowserRouter habilita navegação baseada em URL
import { BrowserRouter } from 'react-router-dom'

// Estilos globais da aplicação
import './index.css'

// Componente raiz da aplicação
import App from './App.tsx'

// Criamos a raiz da aplicação e renderizamos
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter deve envolver toda a aplicação */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
