import { AiFillCloseCircle } from "react-icons/ai";
import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import { calcularTotal, formatPrice } from "../../utils";
import { LiaCcVisa, LiaCcMastercard } from "react-icons/lia";
import { BsCreditCard2Back } from "react-icons/bs";
import styled from "@emotion/styled";
import { useMyContext } from "context/CartContext";

const ResumeContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 24px;
  width: 50%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  height: 60%;
  padding: 30px;
  border: 2px solid #ebebeb;

  @media(max-width:825px){
    width: 310px;
  }
`

const LineHr = styled.hr`
  width: 100%;
  color: grey;
  height: 1px;
`

const ButtonPay = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #f26c26;
  color: #fff;
  border-radius: 24px;
  font-weight: bold;
  box-shadow: 12px;

  &:hover{
    background-color: #f26c26;
    opacity: 0.9;
  }
`

const ResumeModal = ({isOpen, setWhichModal}) => {
    const [cart, setCart] = useMyContext();

    const isMobile = useMediaQuery('(max-width:825px)');
    
    return (
        <ResumeContainer style={{display: isOpen === "resume" ? 'flex' : 'none'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography sx={{ fontSize: isMobile ? '1rem' : '2rem', fontWeight: 'bold' }}>Resumen de tu compra:</Typography>
                <AiFillCloseCircle
                    cursor="pointer"
                    onClick={() => {
                        setWhichModal("");
                    }}
                    size={50}
                />
            </Box>
            <LineHr />
            <Box sx={{ overflowY: 'scroll', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', gap: '20px', width: '100%', minHeight: '150px' }}>
                {cart.map((item, index) => {
                    return (
                        <Box key={index} sx={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }} >
                            <Typography sx={{ fontSize: isMobile ? '0.8rem' : '1.2rem', color: '#8e8e8e' }} >x{item.quantity}</Typography>
                            <Avatar sx={{ width: isMobile ? '30px' :'60px' }} src={item.image}></Avatar>
                            <Typography sx={{ fontSize: isMobile ? '0.7rem' :'1.2rem', color: '#8e8e8e' }} variant="body1">{item.title}</Typography>
                            <Typography sx={{ fontSize: isMobile ? '0.7rem' : '1.2rem', fontWeight: 'bold', color: '#353535' }}>{formatPrice(item.quantity * item.price)}</Typography>
                        </Box>
                    )
                })}
            </Box>
            <LineHr />
            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: isMobile ? '0.7rem' : '1.2rem', color: '#8e8e8e' }}>Total de tu orden</Typography>
                <Typography sx={{ fontSize: isMobile ? '1rem' : '2rem', fontWeight: 'bold', color: '#353535' }}>{formatPrice(calcularTotal(cart))}</Typography>
            </Box>
            <LineHr />
            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'start', flexDirection: 'column', justifyContent: 'start', width: '100%', padding: '10px' }}>
                <Typography sx={{ fontSize: isMobile ? '0.7rem' : '1.1rem', color: '#8e8e8e' }}>Método de pago</Typography>
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ButtonPay sx={{fontSize: isMobile ? '0.7rem' : '1rem'}} onClick={() => setWhichModal('success')}>Finalizar compra</ButtonPay>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LiaCcVisa size={isMobile ? 30 : 50} color="#8e8e8e" />
                        <LiaCcMastercard size={isMobile ? 30 : 50} color="#8e8e8e" />
                        <BsCreditCard2Back size={isMobile ? 30 : 50} color="#8e8e8e" />
                    </Box>
                </Box>
            </Box>
        </ResumeContainer>
    )
}

export default ResumeModal