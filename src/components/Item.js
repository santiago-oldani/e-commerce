import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


const DivContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid grey;
    align-items: center;
    margin-top: 100px;
    height: 326px;
    justify-content: center;
`

const Image = styled.img`
width : 200px;
height: 200px;
`

const Item = ({properties}) => {
  console.log(properties)
  return (
    <DivContainer>
        <Link to={`/item/${properties.id}`}><Image src={properties.pictureUrl}/></Link>
        <Typography fontSize={14} color={'grey'} textAlign={'center'}>{properties.title}</Typography>
        <Typography fontWeight={'bold'}>${properties.price}</Typography>
        <ItemCount/>
    </DivContainer>
  )
}

export default Item