import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './components/Homepage.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <Homepage />
    </SmoothScroll>
  </StrictMode>,
)
