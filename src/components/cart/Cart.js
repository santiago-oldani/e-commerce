import { Avatar, Box, Modal, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ProductsInCart from "./ProductsInCart";
import { useMyContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FormControl, Input, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { calcularTotal, formatPrice } from "../../utils";
import { createItem } from '../../app/api';
import { FaShoppingCart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const ContainerProducts = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: start;
  align-items: center;
  overflow-y: auto;
  height: 70%;
  width: 100%;
`;

const BuyButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 80%;
  height: 80px;
  margin-bottom: 30px;
  background-color: #151515;
  color: #fff;
  padding: 11px 0px;

  &:hover{
    opacity: 0.6;
    background-color: #000;
    transition: 1s all;
  }
`;

const ControlForm = styled(FormControl)`
  width: 70%;
`;

const ModalContainer = styled(Box)`
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #ebebeb;
  height: 50%;
`;

const ContainerNoitemsInCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 150px 0px; 
  gap: 100px;
`

const GoShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Cart = () => {
  const [cart, setCart] = useMyContext();
  const [openModal, setOpenModal] = useState();
  const [checkout, setCheckout] = useState(false);

  const totalAmount = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }, [cart]);

  const { register, getValues, handleSubmit } = useForm();
  const handleBuy = () => {
    setOpenModal(true);
  };

  const onSubmit = () => {
    const values = getValues();
    const total = calcularTotal(cart);
    const order = {
      buyer: { email: values.email, phone: values.phone, name: values.name },
      items: cart,
      total: total,
      date: new Date(),
    };
    createItem(order);
    setCheckout(true);
  };

  return (
    <Box sx={{ height: "100%" }}>
      {openModal && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          {!checkout ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalContainer>
                <AiFillCloseCircle
                  cursor="pointer"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  style={{ position: "absolute", right: "20px", top: "20px" }}
                ></AiFillCloseCircle>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Typography variant="h5">COLOQUE SUS DATOS</Typography>
                  <ControlForm>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input
                      {...register("email", { required: true })}
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </ControlForm>
                  <ControlForm>
                    <InputLabel htmlFor="my-input">
                      Nombre y apellido
                    </InputLabel>
                    <Input
                      {...register("name", { required: true })}
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </ControlForm>
                  <ControlForm>
                    <InputLabel htmlFor="my-input">
                      Numero de telefono
                    </InputLabel>
                    <Input
                      {...register("phone", { required: true })}
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </ControlForm>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Button type="submit">Siguiente</Button>
                    <Button
                      onClick={() => {
                        setOpenModal(false);
                      }}
                    >
                      Cancelar
                    </Button>
                  </Box>
                </Box>
              </ModalContainer>
            </form>
          ) : (
            <Box>
              <ModalContainer>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
                  <AiFillCloseCircle
                    cursor="pointer"
                    onClick={() => {
                      setOpenModal(false);
                    }}
                    style={{ position: "absolute", right: "20px", top: "20px" }}
                  />
                  <Box sx={{ overflowY: 'scroll', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', gap: '20px', width: '100%', padding: '30px', maxHeight: '70%' }}>
                    {cart.map((item, index) => {
                      return (
                        <Box key={index} sx={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }} >
                          <Typography variant="body1">{index + 1}</Typography>
                          <Avatar size={70} src={item.image}></Avatar>
                          <Typography variant="body1">{item.title}</Typography>
                          <Typography variant="body2">x {item.quantity}</Typography>
                          <Typography variant="body2"> {item.quantity * item.price}</Typography>
                        </Box>
                      )
                    })}

                  </Box>
                  <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between', width: '100%', padding: '10px' }}>
                    <Typography variant="h6">Total: ${calcularTotal(cart).toFixed(2)}</Typography>
                    <Button>Pagar</Button>
                  </Box>
                </Box>
              </ModalContainer>
            </Box>
          )}
        </Modal>
      )}
      {cart.length ? (
        /* Bloque Verdadero: Todo envuelto en ContainerProducts */
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%' }}>
          <ContainerProducts>
            <ProductsInCart />
          </ContainerProducts>
          <Box sx={{ display: 'flex',gap: '8px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', borderTop: '1px solid #ebebeb', padding: '30px 10px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
              <Typography>Subtotal</Typography>
              <Typography>{formatPrice(totalAmount)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
              <Typography sx={{ fontWeight: 'bold' }}>TOTAL</Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '1px' }}>{formatPrice(totalAmount)}</Typography>
            </Box>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' ,borderTop: '1px solid #ebebeb', boxShadow: '0 0 12px rgb(0 0 0/15%)', width: '100%', height: '200px', padding: '20px 0px'}}>
            <Typography sx={{maxWidth: '280px', fontSize: '1rem', color: '#343436', fontWeight: '400', textAlign: 'center', lineHeight: '1.7', padding: '21px 0px'}}>Los gastos de envio seran calculados al finalizar tu compra.</Typography>
            <BuyButton
              onClick={handleBuy}
              variant="contained"
            >
              <IoBag/>
              FINALIZAR COMPRA
            </BuyButton>
          </Box>

        </div>
      ) : (
        /* Bloque Falso: Todo envuelto en ContainerNoitemsInCart */
        <ContainerNoitemsInCart>
          <GoShopContainer>
            <FaShoppingCart size={60} />
            <Typography>No tienes ningun producto en el carrito.</Typography>
          </GoShopContainer>
        </ContainerNoitemsInCart>
      )}

    </Box>
  );
};

export default Cart;