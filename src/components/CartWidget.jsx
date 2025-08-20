import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useWidgetCartContext } from '../context/WidgetCartContext';

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
`

const CartWidget = () => {
    const [WidgetCounter,] = useWidgetCartContext(0)
    return (
        <Box style={{position: "relative"}}>
            <CounterCart style={{ position: "absolute", bottom: "0px"}}>{WidgetCounter}</CounterCart>
            <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}>
                <IoBagAddOutline style={{ width: '30px', height: 'auto', marginRight: '60px', cursor: 'pointer', color: '#000' }} />
            </Link>
        </Box>
    )
}

export default CartWidget;