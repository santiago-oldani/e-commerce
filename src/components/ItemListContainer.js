import { Box } from "@mui/material";
import styled from "styled-components"

const GreetingMessage = styled.p`
    font-size: 18px;
`

const ItemListContainer = ({greeting}) =>{
    return(
        <Box sx={{display: 'flex', justifyContent: "center", width: "100%"}}>
        <GreetingMessage>{greeting}</GreetingMessage>
        </Box>
    )
}

export default ItemListContainer;