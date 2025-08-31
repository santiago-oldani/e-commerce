import React, { useState } from 'react'
import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import { getItems } from "../app/api";
import CarouselContainer from './CarouselContainer';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
`

const JordanTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    margin-left: 40px;
    margin-bottom: 0px;
`

const CarouselJordan = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getItemsFromApi = async () => {
            const items = await getItems();
            const jordanProducts = items.filter(p => p.title.toLowerCase().includes("jordan".toLowerCase()));
            setProducts(jordanProducts);
        };

        if (!products.length) {
            getItemsFromApi();
        }
    }, []);

    return (
        <Container>
            <JordanTitle>JORDAN</JordanTitle>
            <CarouselContainer products={products} />
        </Container>
    );
};

export default CarouselJordan;