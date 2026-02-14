import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header.tsx'
import './i18n'
import { Hero } from './components/Hero.tsx'
import {About} from './components/About.tsx'
import { Technologies } from './components/Tecnologies.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <Hero/>
      <About/>
      <Technologies/>
    </Suspense>
  </StrictMode>,
)
