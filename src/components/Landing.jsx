import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "./Banner";
import Summer from "./Summer";
import BannerUp from "./BannerUp";
import styled from "@emotion/styled";
import allstar from '../assets/imgs/allStar.png'
import FavoriteModels from "./FavoriteModels";
import CarouselJordan from "./CarouselJordan";
import CarouselAirForce from "./CarouselAirForce";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useMyContext } from "../context/CartContext";

const AllStarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`

const AllStar = styled.img`
  width: 100%;
  height: auto;
  loading: lazy;

  &:hover{
    filter: brightness(80%);
    transition: 0.2s all;
  }

  @media (max-width: 1300px){
    width: 1000px;
  }

  @media (max-width: 1030px){
    width: 700px;
  }

  @media (max-width: 700px){
    width: 500px;
  }
`


const Landing = () => {
  const [cart, setCart] = useMyContext();
  console.log(cart)

  return (
    <>
      <BannerUp />
      <Summer />
      <CarouselAirForce />
      <Banner />
      <AllStarContainer>
        <Link to="/products/all?modelo=superstar" style={{ width: "fit-content" }}>
          <AllStar src={allstar} />
        </Link>
      </AllStarContainer>
      <FavoriteModels />
      <CarouselJordan />
    </>
  );
};

export default Landing;