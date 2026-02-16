import '../tailwind.css'

export function ButtonsHero() {
    return (
        <div className='flex gap-4'>
            <button className='bg-[#00A5D3] hover:bg-[#0089b0] text-[#001927] text-[1.1rem] font-semibold px-8 py-3 rounded-[20px] transition-colors duration-300'>
                Ver Portafolio
            </button>
            <button className='bg-transparent hover:bg-[#00A5D3] text-white text-[1.1rem] font-semibold px-8 py-3 rounded-[20px] border-2 border-[#00A5D3] hover:text-[#001927] transition-colors duration-300'>
                Contrátame
            </button>
        </div>
    )
}