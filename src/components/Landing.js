import { Box } from '@mui/material';
import React from 'react';
import ItemListContainer from './ItemListContainer';

const Landing = () => {
    return (
        <Box>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={process.env.PUBLIC_URL + "/images/carousel1.jpg"} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/images/carousel2.jpg"} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/images/carousel3.jpg"} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <ItemListContainer/>
        </Box>
    )
}

export default Landing