import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Acessibility from './components/acessibilidade/Acessibility.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Acessibility />
  </StrictMode>
)
