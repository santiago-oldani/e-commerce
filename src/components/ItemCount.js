import React from 'react'
import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
import { useState } from 'react'


const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    width: 190px;
    height: 75px;
    align-items: center;
`

const Subcontainer = styled(Box)`
    display: flex;
    width: 170px;
    justify-content: space-between;
    background-color: white;
    border: 1px solid #e3e0e0;
    align-items: center;
    border-radius: 3px;
    margin-top: 40px;
`

const ItemCount = () => {
    const [counter, setCounter] = useState(0)
    const plusCounter = () =>{
        setCounter(counter + 1)
    }
    const minCounter = () =>{
        setCounter(counter - 1)
    }
  return (
    <Container>
        <Subcontainer>
        <HiMinusSm onClick={() => minCounter()} color={'blue'}/>
        <Typography>{counter}</Typography>
        <HiPlusSm onClick={() => plusCounter()} color={'blue'}/>
        </Subcontainer>
        <Button variant='outlined' sx={{marginTop: 4, fontSize: 12}}>Agregar producto</Button>
    </Container>
  )
}

export default ItemCount