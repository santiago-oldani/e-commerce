import { Box } from "@mui/material";
import styled from '@emotion/styled';
import ItemList from "./ItemList";

const DivContainer = styled(Box)`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 column-gap: 20px;
 padding: 0px 40px;
`

const ItemListContainer = () =>{
    return(
        <DivContainer>
            <ItemList/>
        </DivContainer>
    )
}

export default ItemListContainer;