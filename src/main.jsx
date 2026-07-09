import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GreatUpgrade from './GreatUpgrade'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GreatUpgrade />
  </StrictMode>
)