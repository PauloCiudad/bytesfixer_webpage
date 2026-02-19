import { Cards } from "./Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import '../tailwind.css'

export function Carrusel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full p-5"
      >
        <SwiperSlide> <Cards titulo={"Sistemas de Gestión Oracle APEX"} subtitulo={"Aplicacion interna para procesos empresariales."} color={"azul"}/> </SwiperSlide>
        <SwiperSlide> <Cards titulo={"Sitios Web Corporativos"} subtitulo={"Diseño moderno adaptado al Cliente."} color={"verde"}/> </SwiperSlide>
        <SwiperSlide> <Cards titulo={"Backend & Frontend"} subtitulo={"Desarrollo de aplicaciones web completas"} color={"azul"}/> </SwiperSlide>
        <SwiperSlide> <Cards titulo={"Soporte Técnico"} subtitulo={"Asistencia técnica especializada"} color={"verde"}/> </SwiperSlide>
      </Swiper>
    </>
  )
}