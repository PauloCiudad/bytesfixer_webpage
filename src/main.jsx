import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import { ButtonsHero } from './components/ButtonsHero'
import './tailwind.css'

document.body.classList.add('bg-[#0a0d12]');
document.body.classList.add('text-[#ffffff]');


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className='relative flex bg-[url("./assets/hero.png")] bg-cover bg-center h-[85vh]'>
      <div className='relative max-w-275 m-auto pl-5 md:pl-10 flex items-center w-full' >
        <div className='block w-full'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-left'>Bienvenido a BytesFixer</h1>
          <h2 className='text-2xl md:text-3xl mb-4 text-left'>Desarrollo Web y Sistemas Modernos</h2>
          <p className='text-lg mb-8 text-left'>Expertos en Soluciones Digitales, desarrollo web, Oracle APEX y Soporte Técnico </p>

          <div className='flex gap-5 mt-8.75'>
            <ButtonsHero />
          </div>
        </div>
      </div>
    </div>
  </StrictMode>,
)
