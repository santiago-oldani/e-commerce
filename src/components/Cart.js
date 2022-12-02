import React from 'react'
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from '../app/firebase';
import { updateItem } from '../app/api'
import { FormControl, Input, InputLabel, FormHelperText, Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ProductsInCart from './ProductsInCart';
import { useMyContext } from '../context/CartContext';

const ContainerProducts = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
`

const Cart = () => {
  const [cart, setCart] = useMyContext(null)
  return (
    cart ? <ContainerProducts>
              <ProductsInCart />
           </ContainerProducts>
      : <Typography>No tienes ningun producto en el carrito.</Typography>
  )
}

export default Cart