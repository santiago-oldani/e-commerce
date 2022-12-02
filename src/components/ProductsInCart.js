import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useMyContext } from '../context/CartContext'
import { BsTrash } from 'react-icons/bs'
import { useWidgetCartContext } from '../context/WidgetCartContext'

const ContainerProduct = styled(Box)`
    display: flex;
    flex-direction: column;
    border: solid 1px gray;
    padding: 10px;
    border-radius: 5px;
    margin-top: 40px;
    width: 675px;
    height: 220px;
`

const ImageProduct = styled.img`
    width: 150px;
    height: 150px;
`

const ProductsInCart = () => {
    const [cart, setCart] = useMyContext(null)
    const [cartCounter, setCartCounter] = useWidgetCartContext(0)
    const deleteItemFromArray = (title) => {
        console.log(cart)
        const newCart = cart?.filter((item) => item.title != title)
        setCart(newCart)
        let contador = 0
        newCart?.map((item) => {
            contador = contador + item.quantity
        })
        setCartCounter(contador)
    }
    return (
        cart ? cart?.map((item) => {
            console.log(item)
            return (
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <ContainerProduct>
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px', marginLeft: '20px' }}>{item.title}</Typography>
                        <ImageProduct src={item.image} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Typography>Cantidad: {item.quantity}</Typography>
                            <Typography>Total: ${item.quantity * item.price}</Typography>
                        </Box>
                    </ContainerProduct>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',border: '1px solid black', width: '40px', height: '40px', marginLeft: '40px'}}>
                        <BsTrash size={32} onClick={() => { deleteItemFromArray(item.title) }} style={{cursor: 'pointer'}} />
                    </Box>
                </Box>
            )
        }) : null
    )
}

export default ProductsInCart