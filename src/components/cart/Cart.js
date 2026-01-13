import { Box, Modal, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ProductsInCart from "./ProductsInCart";
import { useMyContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { calcularTotal, formatPrice } from "../../utils";
import { FaShoppingCart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import SuccessPaymentModal from "components/modals/SuccessPaymentModal";
import DataUserModal from "components/modals/DataUserModal";
import ResumeModal from "components/modals/ResumeModal";

const ContainerProducts = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: start;
  align-items: center;
  overflow-y: auto;
  max-height: 500px;
  width: 100%;
`;

const BuyButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 80%;
  height: 50px;
  background-color: #151515;
  color: #fff;
  padding: 11px 0px;

  &:hover{
    opacity: 0.6;
    background-color: #000;
    transition: 1s all;
  }
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
  const [whichModal, setWhichModal] = useState("");

  return (
    <Box sx={{ height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <DataUserModal isOpen={whichModal} setWhichModal={setWhichModal}/>
      <ResumeModal isOpen={whichModal} setWhichModal={setWhichModal}/>
      <SuccessPaymentModal isOpen={whichModal} setWhichModal={setWhichModal}/>
      
      {cart.length ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%' }}>
          <ContainerProducts>
            <ProductsInCart />
          </ContainerProducts>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '35%' }}>
            <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', borderTop: '1px solid #ebebeb', padding: '30px 10px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                <Typography>Subtotal</Typography>
                <Typography>{formatPrice(calcularTotal(cart))}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                <Typography sx={{ fontWeight: 'bold' }}>TOTAL</Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '1px' }}>{formatPrice(calcularTotal(cart))}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '45px', borderTop: '1px solid #ebebeb', boxShadow: '0 -8px 12px -6px rgb(0 0 0 / 15%)', width: '100%', height: '150px' }}>
              <Typography sx={{ maxWidth: '280px', fontSize: '1rem', color: '#343436', fontWeight: '400', textAlign: 'center', lineHeight: '1.7', padding: '21px 0px' }}>Los gastos de envio seran calculados al finalizar tu compra.</Typography>
              <BuyButton
                onClick={() => setWhichModal('data')}
                variant="contained"
              >
                <IoBag />
                FINALIZAR COMPRA
              </BuyButton>
            </Box>
          </Box>
        </div>
      ) : (
        <ContainerNoitemsInCart>
          <GoShopContainer>
            <FaShoppingCart size={60} />
            <Typography sx={{ textAlign: 'center' }}>No tienes ningun producto en el carrito.</Typography>
          </GoShopContainer>
        </ContainerNoitemsInCart>
      )}

    </Box>
  );
};

export default Cart;