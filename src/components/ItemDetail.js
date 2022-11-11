import { Box, Typography } from '@mui/material'
import React from 'react'
import { productsArray } from '../data/Array'
import styled from '@emotion/styled'

const DivContainer = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
`


const ItemDetail = ({item}) => {
  return (
    <DivContainer>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={item.pictureUrl} style={{width: '700px', height: '700px'}}/>
        <Typography fontWeight={'bold'} marginLeft={'50px'}>${item.price}</Typography>
        </Box>
        <Typography sx={{width: '60%'}}>{item.description}</Typography>
    </DivContainer>
  )
}

export default ItemDetail