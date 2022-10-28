import styled from 'styled-components';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import {Box} from '@mui/material';

const ContainerNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    align-items: center;
`

const UlNavBar = styled.ul`
    display: flex;
    gap: 40px;
    list-style: none;
    align-items: center;
    margin-right: 150px;
`
const LiNavBar = styled.li`
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
`

const Logo = styled.img`
    justify-self: flex-start;
    width: 200px;
    height: 75px;
    margin-left: 50px;
    cursor: pointer;
`

const NavBar = () => {
    return (
        <ContainerNav>
            <Logo src='/shopify-logo.png' />
            <UlNavBar>
                <LiNavBar>Productos</LiNavBar>
                <LiNavBar>Locales</LiNavBar>
                <LiNavBar>Promociones y Cuotas</LiNavBar>
                <LiNavBar>Gift Cards</LiNavBar>
            </UlNavBar>
            <CartWidget/>
        </ContainerNav>
    )
}

export default NavBar