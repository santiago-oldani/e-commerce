import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { IoBagAddOutline } from "react-icons/io5";
import { useWidgetCartContext } from '../../context/WidgetCartContext';
import { useState } from 'react';
import CartContainer from './CartContainer';

const CounterCart = styled(Box)`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    z-index: 20;
    left: 18px;
    font-size: 10px;
    cursor: pointer;
`

const CartWidget = () => {
    const [widgetCounter, setWidgetCounter, openCart, toggleCart, displayCart1] = useWidgetCartContext();
    return (
        <>
            <Box style={{ position: "relative" }} onClick={() => toggleCart()}>
                <CounterCart style={{ position: "absolute", bottom: "0px" }}>{widgetCounter}</CounterCart>
                <IoBagAddOutline style={{ width: '30px', height: 'auto', marginRight: '60px', cursor: 'pointer', color: '#000' }} />
            </Box>
            <CartContainer isVisible={displayCart1} setIsVisible={toggleCart} />
        </>
    )
}
export default CartWidget;