import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import ItemCount from "./ItemCount";
import { useProducts } from "../../context/ProductsContext";
import Sizes from "../Sizes";
import modo from '../../assets/imgs/modo.png'
import visa from '../../assets/imgs/visa.png'
import master from '../../assets/imgs/master.png'
import mercado from '../../assets/imgs/mercado.png'
import CarouselDetail from "../carousels/CarouselDetail";

const DivContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
  margin: 0 auto;
  width: 70%;
  gap: 50px;

  @media(max-width: 1360px){
    width: 100%;
  }

  @media(max-width: 1000px){
    flex-direction: column;
  }

  @media(max-width: 480px){
    padding: 0px 10px;
  }
`

const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 25px;
`

const BoxPayMethod = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid lightgray;
  width: 300px;
`

const SubBoxPayMethod = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 35px;
  padding: 8px 15px;
  gap: 10px;
`

const TituloProducto = styled.h3`
  marginBottom: 25px;
  fontWeight: bold;
  fontSize: 1.2rem;

  @media(max-width: 1360px){
    fontSize: 1rem;
  }
`

const DivPayMethods = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  width: 600px;
  padding: 30px;

  @media(max-width: 650px){
    width: 370px;
  }

  @media(max-width: 380px){
    width: 270px;
    padding: 0px;
  }
`

const ItemDetail = ({ productDetail, setProductDetail }) => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useProducts();

  const isMobile = useMediaQuery('(max-width:650px)');

  return (
    <DivContainer>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: isMobile ? "100%" : "60%", alignItems: "flex-start" }}>
        <CarouselDetail productDetail={productDetail}/>
        <h5 style={{ fontWeight: "bold" }}>DESCRIPCION</h5>
        <Typography sx={{ width: "fit-content", color: '#73709e' }}>{productDetail.description}</Typography>
      </Box>
      <DivPayMethods sx={{  }}>
        <TituloProducto
        >
          {productDetail.title}
        </TituloProducto>
        <Typography
          style={{ fontSize: "1rem", marginBottom: '25px', fontWeight: "bold" }}
        >
          ${productDetail.price}
        </Typography>

        <BoxContainer>
          <BoxPayMethod>
            <SubBoxPayMethod sx={{ borderBottom: "1px solid lightgray" }}>
              <img src={modo} />
            </SubBoxPayMethod>
            <SubBoxPayMethod>
              <Typography>1 cuotas sin interes de <span style={{ color: "green" }}>${productDetail.price}</span></Typography>
            </SubBoxPayMethod>
          </BoxPayMethod>

          <BoxPayMethod>
            <SubBoxPayMethod sx={{ borderBottom: "1px solid lightgray" }}>
              <img src={master} />
              <img src={visa} />
              <img src={mercado} />
            </SubBoxPayMethod>
            <SubBoxPayMethod>
              <Typography>3 cuotas sin interes de <span style={{ color: "green" }}>${(productDetail.price / 3).toFixed(2)}</span></Typography>
            </SubBoxPayMethod>
          </BoxPayMethod>
        </BoxContainer>
        <Typography
          sx={{ fontWeight: "bold", marginBottom: "5px", fontSize: "0.8rem" }}
        >Seleccione un talle</Typography>
        <Sizes numbers={productDetail} />

        <ItemCount
          products={products}
          setProducts={setProducts}
          detailCounter={counter}
          setDetailCounter={setCounter}
          product={productDetail}
        />

      </DivPayMethods>
    </DivContainer>
  );
};

export default ItemDetail;