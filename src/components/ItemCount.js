import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useState } from "react";
import { useMyContext } from "../context/CartContext";
import { useWidgetCartContext } from "../context/WidgetCartContext";
import { useAlert } from "../context/AlertContext";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  align-items: center;
`;

const BoxIcons = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: ${props => props.isFromDetail ? '2px solid lightgray' : 'auto'};
    padding: ${props => props.isFromDetail ? '5px' : 'auto'};
`

const StyledButton = styled(Button)`
    width: ${props => props.isFromDetail ? '350px' : 'auto'};
    color: ${props => props.isFromDetail ? '#fff' : 'auto'};
    border-radius: ${props => props.isFromDetail ? '30px' : '0px'};
    height: ${props => props.isFromDetail ? '100px' : 'auto'};
    border:  ${props => props.isFromDetail ? '1px solid lightgray' : 'auto'};
    justify-self: ${props => props.isFromDetail ? 'center' : 'auto'};
    &:hover {
        border-color: ${props => props.isFromDetail ? 'lightgray' : 'auto'};
    }
`

const Subcontainer = styled(Box)`
  display: flex;
  width: 90px;
  gap: 10px;
  justify-content: ${props => props.isFromDetail ? 'center' : 'space-between'};
  align-items: center;
  border-radius: 3px;
  margin-top: 30px;
`

const ItemCount = ({
  product,
  detailCounter,
  setDetailCounter,
  eliminateButton,
  isFromDetail,
  products,
  setProducts,
  setProductDetail
}) => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useMyContext([]);
  const [, setAlert] = useAlert();
  const [widgetCounter, setWidgetCounter] = useWidgetCartContext(0);
  
  const plusCounter = () => {
    if (counter < product.stock && !detailCounter) {
      setCounter(counter + 1);
    } else if (detailCounter < product.stock) {
      setDetailCounter(detailCounter + 1);
    }
  };
  const minCounter = () => {
    if (counter > 1 && !detailCounter) {
      setCounter(counter - 1);
    } else if (detailCounter > 1) {
      setDetailCounter(detailCounter - 1);
    }
  };
  const onAdd = async () => {
    if (counter <= product.stock) {
      const itemExist = cart.find((item) =>
        item.title === product.title ? true : false
      );
      let newCart;
      setWidgetCounter(widgetCounter + counter);
      if (itemExist) {
        newCart = cart.map((item) => {
          if (item.title === product.title) {
            return { ...item, quantity: item.quantity + counter };
          }
          return item;
        });
      } else {
        newCart = [
          ...cart,
          {
            title: product.title,
            quantity: counter,
            price: product.price,
            image: product.pictureUrl,
          },
        ];
      }
      const newProductsList = products.map((producto) => {
        if (producto.title === product.title) {
          return { ...product, stock: producto.stock - counter };
        }
        return producto;
      });
      setProducts(newProductsList);

      setCart(newCart);
      if (isFromDetail) {
        setProductDetail({ ...product, stock: product.stock - counter });
        eliminateButton(false);
      }
    } else {
      setAlert({ show: true, message: "No stock" });
    }
  };
  return (
    <Container >
      <Subcontainer
      isFromDetail={isFromDetail}
      >
        <BoxIcons
        isFromDetail={isFromDetail}>
        <HiMinusSm
          onClick={() => minCounter()}
          color={isFromDetail ? "#fff" : 'blue'}
          style={{ cursor: "pointer" }}
          isFromDetail={isFromDetail}
        />
        </BoxIcons>
        <Typography
        isFromDetail={isFromDetail}
        color={isFromDetail ? '#fff' : 'auto'}>{counter}</Typography>
        <BoxIcons
        isFromDetail={isFromDetail}>
        <HiPlusSm
          onClick={() => plusCounter()}
          color={isFromDetail ? "#fff" : 'blue'}
          style={{ cursor: "pointer" }}
          isFromDetail={isFromDetail}
        />
        </BoxIcons>
      </Subcontainer>
       
       <StyledButton
        variant="outlined"
        disabled={product.stock === 0}
        sx={{ marginTop: 4, fontSize: 12 }}
        onClick={onAdd}
        isFromDetail={isFromDetail}
      >
        Agregar producto
      </StyledButton>
      
    </Container>
  );
};

export default ItemCount;