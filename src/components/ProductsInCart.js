import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useMyContext } from "../context/CartContext";
import { GrFormClose } from "react-icons/gr";
import { useWidgetCartContext } from "../context/WidgetCartContext";
import { useProducts } from "../context/ProductsContext";

const ContainerProduct = styled(Box)`
  display: flex;
  flex-direction: column;
  border: solid 1px gray;
  padding: 10px;
  border-radius: 5px;
  margin-top: 40px;
  width: 675px;
  height: 220px;
`;

const ImageProduct = styled.img`
  width: 150px;
  height: 150px;
`;

const ProductsInCart = () => {
  const [cart, setCart] = useMyContext(null);
  const [, setCartCounter] = useWidgetCartContext(0);
  const [products, setProducts] = useProducts();
  const calculateToFixed = (item) =>{
    let subTotal = item.quantity * item.price
    return subTotal;
  }
  const deleteItemFromArray = (array) => {

    const newCart = cart?.filter((item) => item.title != array.title);
    setCart(newCart);
    let contador = 0;
    newCart?.map((item) => {
      contador = contador + item.quantity;
    });
    const updatedProducts = products.map((product) => {
      if (product.title === array.title) {
        return { ...product, stock: product.stock + array.quantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    setCartCounter(contador);
  };
  return cart
    ? cart?.map((item) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <ContainerProduct>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginLeft: "20px",
                }}
              >
                {item.title}
              </Typography>
              <ImageProduct src={item.image} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Typography>Cantidad: {item.quantity}</Typography>
                <Typography>Total: ${calculateToFixed(item).toFixed(2)}</Typography>
              </Box>
            </ContainerProduct>
            
              <GrFormClose
                size={32}
                onClick={() => {
                  deleteItemFromArray(item);
                }}
                style={{ cursor: "pointer", marginTop: '40px', marginLeft: '5px' }}
              />
            
          </Box>
        );
      })
    : null;
};

export default ProductsInCart;