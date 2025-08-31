import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import { getItems } from "../app/api";
import CarouselContainer from './CarouselContainer';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 20px auto 100px auto;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    margin-left: 40px;
    margin-bottom: 0px;
`

const CarouselAirForce = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getItemsFromApi = async () => {
            const items = await getItems();
            const jordanProducts = items.filter(p => p.title.toLowerCase().includes("air force".toLowerCase()));
            setProducts(jordanProducts);
        };

        if (!products.length) {
            getItemsFromApi();
        }
    }, []);

    console.log(products, "ATENTO A ESTE CLG");
    return (
        <Container>
            <Title>AIR FORCE</Title>
            <CarouselContainer products={products} />
        </Container>
    );

}

export default CarouselAirForce
