import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState, useRef, useMemo, useEffect } from "react";
import styled from "@emotion/styled";

// Estilos para el Swiper interno de miniaturas
const VerticalSwiperContainer = styled.div`
  /* 1. Definimos un ancho fijo para la columna de miniaturas */
  width: 100px; 
  flex-shrink: 0; /* Evita que el contenedor se comprima */
  
  .swiper {
    /* El alto debe ser fijo para que el cálculo de los slides funcione */
    height: 500px !important; 
  }

  .swiper-slide {
    /* 2. Aseguramos que el slide mantenga su tamaño */
    width: 100%;
    height: 116px !important; /* (500px total - 36px de gaps) / 4 aprox */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 0.3s ease;

    /* Estilo para cuando la miniatura está activa */
    &.swiper-slide-thumb-active {
      border: 2px solid #000;
    }
  }

  img {
    width: 100%;
    height: 100%;
    /* 3. Object-fit cover es clave para que no se estiren */
    object-fit: cover; 
  }

  @media(max-width: 650px){
    display: none;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
`;

const MainSwiperWrapper = styled.div`
  /* Cambia 100% por el valor exacto que necesites */
  width: 600px; 
  /* O puedes usar un mínimo para que no colapse */
  min-width: 600px; 
  
  flex-shrink: 0; /* Evita que el contenedor se comprima si está dentro de un Flex */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f9fa;
    /* Asegura que el slide ocupe todo el ancho del wrapper fijo */
    width: 100% !important; 
  }
  img {
    width: 100%;
    height: 100%;
    /* 'cover' para llenar el espacio fijo o 'contain' para ver la imagen completa */
    object-fit: cover; 
  }

  @media(max-width: 1745px){
    width: 500px;
    min-width: 500px; 
  }

  @media(max-width: 1565px){
    width: 400px;
    min-width: 400px; 
  }

  @media(max-width: 480px){
    width: 300px;
    min-width: 300px; 
  }
`;

const ThumbsSwiperWrapper = styled.div`
  width: 150px;
  height: 500px; /* Igual que el contenedor interno */

  .swiper-slide {
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.3s ease;
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid transparent;

    &.swiper-slide-thumb-active,
    &:hover {
      opacity: 1;
      border-color: #000;
    }
  }

  @media(max-width: 650px){
    display: none;
  }
`;

const CarouselDetail = ({ productDetail }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const mainSwiperRef = useRef(null);
    const pictures = useMemo(() => productDetail?.picturesUrl || [], [productDetail]);

    return (
    <CarouselContainer>
        {/* 👇 PRIMERO: Miniaturas — para que se monten y seteen "thumbsSwiper" */}
        <ThumbsSwiperWrapper>
            <VerticalSwiperContainer>
                <Swiper
                    onSwiper={setThumbsSwiper} // 👈 esto setea "thumbsSwiper"
                    direction="vertical"
                    slidesPerView={4}
                    spaceBetween={12}
                    loop={false}
                    watchSlidesProgress
                    modules={[Thumbs]}
                    style={{height: "500px"}}
                >
                    {pictures.map((img, index) => (
                        <SwiperSlide style={{ height: "fit-content" }} key={index}>
                            <img src={img} alt={`Miniatura ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </VerticalSwiperContainer>
        </ThumbsSwiperWrapper>

        {/* 👇 DESPUÉS: Imagen principal — ya puede usar "thumbsSwiper" */}
        <MainSwiperWrapper>
            <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper }} // 👈 ahora ya NO es null
                spaceBetween={10}
                slidesPerView={1}
                loop={false}
                ref={mainSwiperRef}
                
            >
                {pictures.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Producto ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </MainSwiperWrapper>
    </CarouselContainer>
);
};

export default CarouselDetail;