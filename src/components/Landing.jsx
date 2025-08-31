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

const AllStarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`

const AllStar = styled.img`
  width: 70%;
  height: auto;
  loading: lazy;
`

const Landing = () => {
  return (
    <Box>
      <BannerUp />
      <Summer />
      <CarouselAirForce />
      <Banner />
      <AllStarContainer>
        <AllStar src={allstar} />
      </AllStarContainer>
      <FavoriteModels />
      <CarouselJordan />
    </Box>
  );
};

export default Landing;