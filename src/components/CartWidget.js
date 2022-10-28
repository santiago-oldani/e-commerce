import styled from 'styled-components';

const Cart = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 60px;
    cursor: pointer;
`

const CartWidget = () => {
    return(
        <Cart src='/images/cart-icon.png'/>
    )
}

export default CartWidget;