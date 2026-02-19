import '../tailwind.css'

export function Cards( {titulo, subtitulo,color} ) {

    if (color === 'azul') {
        color = 'border-[#00A5D3] hover:shadow-[0_0_30px_#00A5D3AA] shadow-[0_0_18px_#00A5D355]';
    } else if (color === 'verde') {
        color = 'border-[#00FF8F] hover:shadow-[0_0_30px_#00FF8FAA] shadow-[0_0_18px_#00FF8F55]';
    }

    return (
        <div className={`bg-[#1a1f2e] border-4 border-solid rounded-[18px] w-100 h-52 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out backdrop-blur-sm ${color} hover:transform hover:-translate-y-2.5`}>
            <h3 className="text-[35px] font-bold">{titulo}</h3>
            <p className="text-[20px] font-extralight leading-9">{subtitulo}</p>
        </div>
    )
}