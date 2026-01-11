import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useState } from "react";
import CartContextProvider, { useMyContext } from "../../context/CartContext";
import { useWidgetCartContext } from "../../context/WidgetCartContext";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media(max-width: 1360px){
    flex-direction: column;
  }
`;

const BoxIcons = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    width: ${(props) => (props.isCounter ? "70px" : "50px")};
    height: 50px;
    cursor: ${(props) => (props.isCounter ? "auto" : "pointer")};
`

const StyledButton = styled(Button)`
    width: 300px;
    color: #fff;
    background-color: #000;
    height: 50px;
    border: 1px solid lightgray;
    margin: 0;

    &:hover {
        opacity: 0.7;
        background-color: #000;
        color: #fff;
        transition: all 0.2s;
    }

    @media(max-width: 380px){
    width: 200px;
  }
`

const Subcontainer = styled(Box)`
  display: flex;
  width: auto;
  gap: 5px;
  height: auto;
  justify-content: center;
  align-items: center;
`

const ItemCount = ({
  product,
  detailCounter,
  setDetailCounter,
  products,
  setProducts,
}) => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useMyContext();
  const [widgetCounter, setWidgetCounter, openCart, toggleCart, displayCart1] = useWidgetCartContext();

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
      setWidgetCounter(widgetCounter + 1);
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
            image: product.picturesUrl[0],
            stock: product.stock
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
    }
    openCart();
  };
  return (
    <Container >
      <Subcontainer>
        <BoxIcons onClick={() => minCounter()}>
          <HiMinusSm
          />
        </BoxIcons>
        <BoxIcons sx={{cursor: ""}} isCounter={true}>{counter}</BoxIcons>
        <BoxIcons onClick={() => plusCounter()}>
          <HiPlusSm
          />
        </BoxIcons>
      </Subcontainer>

      <Link to={"/"} style={{ textDecoration: "none" }}>
        <StyledButton
          variant="outlined"
          disabled={product.stock === 0}
          onClick={onAdd}
        >
          Agregar al carrito
        </StyledButton>
      </Link>
    </Container >
  );
};

export default ItemCount;