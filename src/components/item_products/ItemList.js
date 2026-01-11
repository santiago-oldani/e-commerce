import { useEffect } from "react";
import Item from "./Item";
import { Skeleton, Box } from "@mui/material";
import styled from "@emotion/styled";
import { getItems } from "../../app/api";
import { useProducts } from "../../context/ProductsContext";

const DivContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 1610px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1190px) {
    grid-template-columns: 1fr;
  }
`;

const SkeletonComponent = styled(Skeleton)`
  width: 500px; 
  height: 400px;

  @media (max-width: 1855px) {
    width: 470px;
  }
  @media (max-width: 1825px) {
    width: 430px;
  }
  @media (max-width: 1700px) {
    width: 400px;
    height: 330px;
  }
  @media (max-width: 485px) {
    width: 370px;
    height: 300px;
  }
  @media (max-width: 430px) {
    width: 300px;
    height: 230px;
  }
    @media (max-width: 405px) {
    width: 250px;
    height: 180px;
  }
`

const ItemList = () => {
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
    <DivContainer>
      {products.length
        ? products?.map((object, index) => {
          return (
            <Item
              properties={object}
              key={index}
              products={products}
              setProducts={setProducts}
            />
          );
        })
        : [1, 2, 3, 4, 5, 6].map(() => {
          return (
            <SkeletonComponent
              variant="rectangular"
            />
          );
        })}
    </DivContainer>
  );
};

export default ItemList;