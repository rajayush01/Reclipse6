import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import SmoothScroll from '@/lib/SmoothScroll'
import ScrollToTop from '@/lib/ScrollToTop'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <App />
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>,
)
