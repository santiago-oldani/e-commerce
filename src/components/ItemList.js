import React from 'react';
import { useState } from 'react';
import Item from './Item';
import { Skeleton, Box } from '@mui/material';
import { productsArray } from '../data/Array';
import styled from '@emotion/styled';

const DivContainer = styled(Box)`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 column-gap: 20px;
`

const ItemList = () => {
  const [products, setProducts] = useState(null)
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsArray)

    }, 2000)
  })
  task.then((res) => setProducts(res))
  return (
    <>
      {products ? products?.map((object, index) => {
        return (
          <Item properties={object} key={index} />
        )
      }) : [1, 2, 3, 4, 5, 6].map(() => {
        return (
          <DivContainer sx={{marginTop: '100px'}}>
            <Skeleton variant='rectangular' sx={{ width: '330px', height: '471px' }} />
          </DivContainer>
        )
      })}
    </>
  )
}

export default ItemList