import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.scss'
import Login from './containers/Login/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
