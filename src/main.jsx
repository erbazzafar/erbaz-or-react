import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Curr from './proj3.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Curr />
  </StrictMode>,
)
