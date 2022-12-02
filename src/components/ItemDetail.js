import { Box, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useMyContext } from '../context/CartContext'
import styled from '@emotion/styled'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const DivContainer = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
`

const ItemDetail = ({ item }) => {
  const [counter, setCounter] = useState(0)
  const [displayButton, setDisplayButton] = useState(true)
  const [cart,] = useMyContext([])
  console.log(cart)
  return (
    <DivContainer>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src={item.pictureUrl} style={{ width: '700px', height: 'auto' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px', justifyContent: 'space-around' }}>
          <Typography variant={'h5'} sx={{ marginBottom: '15px', fontWeight: 'bold', fontSize: '30px' }}>Descripcion</Typography>
          <Typography sx={{marginBottom: '100px', fontSize: '18px'}}>{item.description}</Typography>
          <Typography fontWeight={'bold'} style={{ fontSize: '24px', color: '#87342e' }}>${item.price}</Typography>
          {(displayButton) ? <ItemCount detailCounter={counter} isFromDetail={true} setDetailCounter={setCounter} product={item} eliminateButton={setDisplayButton} /> : <Link to={'/cart'}><Button variant="contained" color="success"> Finalizar compra </Button></Link>}
        </Box>
      </Box>
    </DivContainer>
  )
}

export default ItemDetail