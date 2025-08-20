import { Box } from "@mui/material";
import ItemListContainer from "./ItemListContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselContainer from "./CarouselContainer";
import Banner from "./Banner";
import Summer from "./Summer";

const Landing = () => {
  return (
    <Box>
      <Banner/>
      <Summer/>
      <CarouselContainer/>
      
    </Box>
  );
};

export default Landing;