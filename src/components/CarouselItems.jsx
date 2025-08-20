import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import 'swiper/css';
import styled from '@emotion/styled';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    .swiper-wrapper{
        display: flex !important;
        align-items: end !important;
    }

`;

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #B7B7B7;
    justify-content: center;
    border-radius: 50%;
    padding: 24px;
    width: 18px;
    height: 18px;
    color: #1f1f1f;
    
    &:hover{
        opacity: 0.7;
    }

    &::after {
    font-size: 14px !important;
    font-weight: bold;
  }
`

const ImageContainer = styled.img`
    width: 150px;
    height: 200px;
`

const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    width: fit-content;
    cursor: pointer;
`

const BuyButton = styled.button`
    background-color: #111;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    border-radius: 48px;
    padding: 12px 28px;
    border: none;
    align-self: end;


    &:hover{
        opacity: 0.8;
    }
`

const CarouselItems = ({ properties }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    console.log(properties);

    return (
        <div style={{ position: "relative", padding: "20px", width: "100%", height: "auto" }}>
            <GlobalStyles />
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                modules={[Navigation, Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                loop={true}
            >
                {properties?.map((obj, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", width: "240px", height: "100%" }}>
                            <SlideContainer >
                                <ImageContainer src={obj.pictureUrl} alt="" style={{ alignSelf: "center" }} />
                                <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#000", marginBottom: "12px" }}>{obj.title}</h4>
                                <h4 style={{ fontSize: "1rem", color: "#757575", marginBottom: "6px" }}>{obj.categoria}</h4>
                                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#000", marginBottom: "10px" }}>$ {obj.price}</h4>
                                <BuyButton>Agregar al Carrito</BuyButton>
                            </SlideContainer>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <BtnContainer
                className="swiper-button-prev"
            >
            </BtnContainer>

            <BtnContainer
                className="swiper-button-next"
            >
            </BtnContainer>

        </div>

    )
}

export default CarouselItems