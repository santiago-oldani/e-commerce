import styled from "@emotion/styled";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useMyContext } from "../../context/CartContext";
import { useWidgetCartContext } from "../../context/WidgetCartContext";
import { useProducts } from "../../context/ProductsContext";
import { IoTrash } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { formatPrice } from "utils";

const ContainerProduct = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
  width: 675px;
  height: 150px;
`;

const ImageProduct = styled.img`
  width: 98px;
  height: 98px;

  @media(max-width: 470px){
    width: 60px;
    height: 60px;
  }
`;

const ProductsInCart = () => {
  const [cart, setCart] = useMyContext();
  const [cartCounter, setCartCounter] = useWidgetCartContext();
  const [products, setProducts] = useProducts();
  const [isOneProduct, setIsOneProduct] = useState();
  const [counterProduct, setCounterProduct] = useState();

  console.log(products, 'estos son los productos');

  const isMobile = useMediaQuery('(max-width:470px)');

  const minusPlusCounter = (type, product) => {
  const updatedCart = cart.map((item) => {
    if (item.title === product.title) {
      const newQuantity = type === "min"
        ? Math.max(1, item.quantity - 1) // Lógica para restar
        : item.quantity < item.stock     // ¿Hay stock disponible?
          ? item.quantity + 1            // Si hay, sumo
          : item.quantity;               // Si no hay, devuelvo la misma cantidad (bloqueo)

      return { ...item, quantity: newQuantity };
    }
    return item;
  });
  setCart(updatedCart);
};

  useEffect(() => {
    if (cart.length === 1) {
      setIsOneProduct(true)
    } else {
      setIsOneProduct(false)
    }
  }, [cart])

  const calculateToFixed = (item) => {
    let subTotal = item.quantity * item.price
    return subTotal;
  }

  const deleteItemFromArray = (product) => {
    const newCart = cart?.filter((item) => item.title !== product.title);
    setCart(newCart);
    let contador = newCart.length;
    
    const updatedProducts = products.map((item) => {
      if (item.title === product.title) {
        console.log(item)
        return { ...item, stock: item.stock + product.quantity };
      }
      return item;
    });
    console.log(updatedProducts);
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
            width: "100%",
          }}
        >
          <ContainerProduct style={{ borderBottom: isOneProduct ? 'none' : 'solid 1px #f2f2f2' }}>
            <Box sx={{ border: '1px solid #efefef', padding: '5px', height: 'fit-content', width: 'fit-content' }}>
              <ImageProduct src={item.image} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', marginLeft: '15px' }}>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: isMobile ? "0.7rem" : "0.8rem",
                }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <Typography sx={{ fontWeight: 'bold', marginTop: '8px', fontSize: isMobile ? "0.8rem" : "1rem" }}>{formatPrice(calculateToFixed(item))}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: "1px solid #f2f2f2", marginTop: '8px' }}>
                  <div onClick={() => minusPlusCounter("min", item)} style={{ padding: '10px 5px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <FaMinus style={{ color: "#7c7c7c", fontWeight: 'lighter', width: '15px', height: '10px' }} />
                  </div>
                  <Typography sx={{ color: '#7c7c7c', fontSize: '0.8rem' }}>{item.quantity}</Typography>
                  <div onClick={() => minusPlusCounter("sum", item)} style={{ padding: '10px 5px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <FaPlus style={{ color: "#7c7c7c", fontWeight: 'lighter', width: '15px', height: '10px' }} />
                  </div>
                </Box>

              </Box>
            </Box>


          </ContainerProduct>

          <IoTrash
            size={isMobile ? 60 : 35}
            color="#a5a5a5"
            onClick={() => {
              deleteItemFromArray(item);
            }}
            style={{ cursor: "pointer", marginLeft: '5px' }}
          />

        </Box>
      );
    })
    : null;
};

export default ProductsInCart;