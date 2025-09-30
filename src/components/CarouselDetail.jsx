import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState, useRef, useMemo, useEffect } from "react";
import styled from "@emotion/styled";

// Estilos para el Swiper interno de miniaturas
const VerticalSwiperContainer = styled.div`
  
  width: 100%;
  height: auto;
  .swiper-slide {
    height: calc((100% - 36px) / 4); /* 4 slides, 12px gap → 3 gaps = 36px */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f9fa;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
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
`;

const CarouselDetail = ({ productDetail }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const mainSwiperRef = useRef(null);
    const pictures = useMemo(() => productDetail?.picturesUrl || [], [productDetail]);

    useEffect(() =>{
      console.log(thumbsSwiper);
    }, [thumbsSwiper])

    console.log(thumbsSwiper);

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