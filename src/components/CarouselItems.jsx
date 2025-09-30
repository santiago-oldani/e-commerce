import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import 'swiper/css';
import styled from '@emotion/styled';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";

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
    height: auto;

    @media (max-width: 1050px){
        width: 100px;
    }
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

    @media (max-width: 1050px){
        width: 120px;
        font-size: 10px;
        padding: 8px 16px;
    }
`

const Title = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin-bottom: 12px;

    @media (max-width: 1050px){
        font-size: 12px;
    }
`

const CarouselItems = ({ products }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [slidesPerView, setSlidesPerView] = useState(4);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1010) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 1350){
                setSlidesPerView(3);
            } else{
                setSlidesPerView(4);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])


    return (
        <div style={{ position: "relative", padding: "20px", width: "100%", height: "auto" }}>
            <GlobalStyles />
            <Swiper
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                modules={[Navigation, Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                loop={true}
            >
                {products?.map((obj, index) => (

                    <SwiperSlide key={index}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", width: "240px", height: "100%" }}>
                            <Link style={{ textDecoration: "none", color: "#000" }} to={`/item/${obj.id}`}>
                                <SlideContainer >
                                    <ImageContainer src={obj.picturesUrl[0]} alt="" style={{ alignSelf: "center" }} />
                                    <Title>{obj.title}</Title>
                                    <h4 style={{ fontSize: "1rem", color: "#757575", marginBottom: "6px" }}>{obj.categoria}</h4>
                                    <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#000", marginBottom: "10px" }}>$ {obj.price}</h4>
                                    <BuyButton>Agregar al Carrito</BuyButton>
                                </SlideContainer>
                            </Link>
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