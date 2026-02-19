import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { Carrusel } from './components/Carrusel'
import './tailwind.css'

document.body.classList.add('bg-[#0a0d12]');
document.body.classList.add('text-[#ffffff]');


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <section id="inicio" className="relative flex bg-[url('./assets/hero.png')] bg-cover bg-center h-screen min-h-150">
      <div className='absolute inset-0 bg-opacity-70 flex flex-col items-center justify-center text-center px-4'>
        <h1 className="text-[60px] font-bold mb-4 leading-25">Bienvenido a BytesFixer</h1>
        <h2 className="text-[30px] mb-4 font-bold leading-16">Desarrollo Web y Sistemas Modernos</h2>
        <p className="text-[20px] mb-6 leading-20">Expertos en Soluciones Digitales, desarrollo web, Oracle APEX y Soporte Técnico</p>
        <div className="flex gap-10 justify-center">
          <button className="bg-[#00a8ff] hover:bg-[#0077b6] text-white font-bold rounded text-[20px] w-40 h-14">Contacto</button>
          <button className="bg-[#00a8ff] hover:bg-[#0077b6] text-white font-bold rounded text-[20px] w-40 h-14">Servicios</button>
        </div>
      </div>
    </section>
    <section id="servicios" className="text-center h-screen min-h-150 flex flex-col items-center justify-center gap-10">
      <h2 className="text-[2.8rem] font-bold leading-50">Nuestros Servicios</h2>
      <div className="gap-37 flex justify-center">
        <Cards titulo={"Desarrollo de Sistemas"} subtitulo={"Oracle Forms/ Reports / Oracle APEX"} color={"azul"}/>
        <Cards titulo={"Desarrollo Web"} subtitulo={"Sitios web modernos y responsivos"} color={"verde"}/>
        <Cards titulo={"Soporte Técnico"} subtitulo={"Windows / Linux / Servidores"} color={"azul"}/>
      </div>
    </section>
    <section id="portafolio" className="bg-[url('./assets/cover.png')] bg-cover bg-center h-screen min-h-150 flex flex-col items-center justify-center text-center">
      <h2 className="text-[2.8rem] font-bold">Portafolio</h2>
      <p className="text-[20px] mb-6 leading-20">Explora algunos de nuestros proyectos destacados en desarrollo web, Oracle APEX y soporte técnico.</p>
        <Carrusel />
    </section>
  </StrictMode>,
)
