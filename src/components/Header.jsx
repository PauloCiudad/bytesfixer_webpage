import '../tailwind.css'
import logo from '../assets/logo_official.png'

export function Header() {
  return (
    <header>
      <div className='flex items-center justify-between px-5 py-2.5 bg-[#0a0d12] h-26.25 backdrop-blur-[6px]'>
        <a href="/">
          <img src={logo} alt="Logo" className='w-37.5'/>
        </a>
        <nav className='flex space-x-1.5 text-white text-lg font-medium'>
          <a href="/" className='px-4 py-2 hover:text-[#00A5D3] transition-colors duration-300'>Inicio</a>
          <a href="/servicios" className='px-4 py-2 hover:text-[#00A5D3] transition-colors duration-300'>Servicios</a>
          <a href="/portafolio" className='px-4 py-2 hover:text-[#00A5D3] transition-colors duration-300'>Portafolio</a>
          <a href="/nosotros" className='px-4 py-2 hover:text-[#00A5D3] transition-colors duration-300'>Nosotros</a>
          <a href="/contacto" className='px-4 py-2 hover:text-[#00A5D3] transition-colors duration-300'>Contacto</a>
          <a href="/zona-tech" className='px-4 py-2 hover:text-[#00A5D3] transition-colors duration-300'>Zona Tech</a>
        </nav>
      </div>
    </header>
  )
}