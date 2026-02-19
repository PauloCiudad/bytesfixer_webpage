import '../tailwind.css'
import logo from '../assets/logo_official.png'

export function Header() {
  return (
    <header>
      <div className='flex items-center justify-between px-5 py-2.5 bg-[#0a0d12] h-26.25 backdrop-blur-[6px] w-full top-0 fixed z-1000 border-b border-solid border-[#0f1622]'>
        <a href="/">
          <img src={logo} alt="Logo" className='w-37.5'/>
        </a>
        <nav className='flex space-x-1.5 text-white text-lg font-medium gap-6.25'>
          <a href="#inicio" className='hover:text-[#00A5D3] transition duration-300 ease-in-out'>Inicio</a>
          <a href="#servicios" className='hover:text-[#00A5D3] transition duration-300 ease-in-out'>Servicios</a>
          <a href="#portafolio" className='hover:text-[#00A5D3] transition duration-300 ease-in-out'>Portafolio</a>
          <a href="/nosotros" className='hover:text-[#00A5D3] transition duration-300 ease-in-out'>Nosotros</a>
          <a href="/contacto" className='hover:text-[#00A5D3] transition duration-300 ease-in-out'>Contacto</a>
          <a href="/zona-tech" className='hover:text-[#00A5D3] transition duration-300 ease-in-out'>Zona Tech</a>
        </nav>
      </div>
    </header>
  )
}