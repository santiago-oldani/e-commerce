import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import Sizes from "./Sizes";

const DivContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
  margin: 0 auto;
  width: 70%;
  gap: 50px;
`

const ItemDetail = ({ productDetail, setProductDetail }) => {
  const [counter, setCounter] = useState(0);
  const [displayButton, setDisplayButton] = useState(true);
  const [products, setProducts] = useProducts();

  return (
    <DivContainer>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", width: "60%", alignItems: "flex-start"}}>
        <img
          src={productDetail.picturesUrl[0]}
          style={{ width: "400px", height: "auto" }}
        />
        <h5 style={{fontWeight: "bold"}}>DESCRIPCION</h5>
        <Typography sx={{width: "fit-content", color: '#73709e'}}>{productDetail.description}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", backgroundColor: '#fff', width: '40%', padding: '30px' }}>
        <Typography
          variant={"h3"}
          sx={{ marginBottom: "25px", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {productDetail.title}
        </Typography>
        <Typography
          style={{ fontSize: "1rem", marginBottom: '25px', fontWeight: "bold" }}
        >
          ${productDetail.price}
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", marginBottom: "5px", fontSize: "0.8rem" }}
        >Seleccione un talle</Typography>
        <Sizes numbers={productDetail} />
        

        {displayButton ? (
          <ItemCount
            products={products}
            setProducts={setProducts}
            detailCounter={counter}
            isFromDetail={true}
            setDetailCounter={setCounter}
            product={productDetail}
            eliminateButton={setDisplayButton}
            setProductDetail={setProductDetail}
          />
        ) : (
          <Link to={"/cart"}>
            <Button variant="contained" color="success">
              {" "}
              Finalizar compra{" "}
            </Button>
          </Link>
        )}

      </Box>
    </DivContainer>
  );
};

export default ItemDetail;