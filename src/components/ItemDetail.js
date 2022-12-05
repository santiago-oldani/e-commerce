import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

const DivContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px;
`

const ItemDetail = ({ productDetail, setProductDetail }) => {
  const [counter, setCounter] = useState(0);
  const [displayButton, setDisplayButton] = useState(true);
  const [products, setProducts] = useProducts();

  return (
    <DivContainer>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", backgroundColor: '#0a0826', width: '70%', padding: '30px' }}>
      <Typography
          variant={"h3"}
          sx={{ marginBottom: "25px", fontWeight: "bold", fontSize: "30px", color: '#fff' }}
        >
          {productDetail.title.toUpperCase()}
        </Typography>
        <Typography
          style={{ fontSize: "24px", color: "#fff", marginBottom: '25px' }}
        >
          ${productDetail.price}
        </Typography>
        <Typography
          variant={"h5"}
          sx={{ marginBottom: "15px", fontSize: "22px", color: '#fff'  }}
        >
          DESCRIPCION
        </Typography>
        <Typography sx={{ marginBottom: "100px", fontSize: "18px", color: '#73709e'  }}>
          {productDetail.description}
        </Typography>
        <Typography sx={{ marginBottom: "100px", fontSize: "18px", color: '#fff'  }}>
          Stock: {productDetail.stock}
        </Typography>
        
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
      <img
        src={productDetail.pictureUrl}
        style={{ width: "700px", height: "auto" }}
      />
    </DivContainer>
  );
};

export default ItemDetail;