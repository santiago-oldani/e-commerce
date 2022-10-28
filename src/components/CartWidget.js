import styled from 'styled-components';
import cart from '../assets/cart-icon.png'

const Cart = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 60px;
    cursor: pointer;
`

const CartWidget = () => {
    return(
        <Cart src= {cart}/>
    )
}

export default CartWidget;