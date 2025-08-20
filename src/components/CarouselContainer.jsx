import CarouselItems from './CarouselItems';
import React, { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import { getItems } from "../app/api";

const CarouselContainer = () => {
    const [products, setProducts] = useProducts();

    useEffect(() => {
        const getItemsFromApi = async () => {
            const products = await getItems();
            setProducts(products);
        };
        if (!products.length) {
            getItemsFromApi();
        }
    }, []);

    return (
        <div>
            <CarouselItems
                properties={products}
            />
        </div>
    )
}

export default CarouselContainer