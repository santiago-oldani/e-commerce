import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ItemList from "./ItemList";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { getItemsByCondition, getItems, getItemsByGender } from "../app/api";
import { useProducts } from "../context/ProductsContext";
import { Link, useParams } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import Filters from "./Filters";
import { useLocation } from "react-router-dom";

const DivContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  column-gap: 40px;
  row-gap: 50px;
  margin-bottom: 100px ;
  @media (max-width: 1155px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 870px) {
    grid-template-columns: 1fr;
  }
`;

const OrderByPrice = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  padding: 8px 16px;
  margin-bottom: 10px;
  border-radius: 12px;
  gap: 8px;
  cursor: pointer;
  position: relative;
`

const ItemListContainer = ({ isLanding = false }) => {
  const { gender } = useParams();
  const [products, setProducts] = useProducts([]);
  const [displayMenu, setDisplayMenu] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [order, setOrder] = useState("Ordenar por");

  const categorias = params.getAll("categoria");

  const modelos = params.getAll("modelo");

  const genders = params.getAll("gender");

  useEffect(() => {
    if (order === "Menor a mayor") {
      setProducts(prev => [...prev].sort((a, b) => a.price - b.price))
    } else if (order === "Mayor a menor") {
      setProducts(prev => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [order, categorias])

  const getItemsSelect = async () => {
    if (gender === "all") {
      const items = await getItems();
      setProducts(items);
      setProductsFiltered(items);
    } else if (gender === "hombre" || gender === "mujer" || gender === "niño") {
      const items2 = await getItemsByGender(gender);
      setProducts(items2);
      setProductsFiltered(items2);
    }
  };

  useEffect(() => {
    getItemsSelect();
  }, [gender]);

useEffect(() => {
  const getItemsByFilter = async () => {
    let filtrados = [...productsFiltered];
    
    if (categorias.length > 0) {
      filtrados = filtrados.filter((p) =>
        categorias.some((cat) => p.categoria.includes(cat))
      );
    }

    if (modelos.length > 0) {
      filtrados = filtrados.filter((p) =>
        modelos.some((m) => p.title.includes(m.toUpperCase()))
      );
    }

    setProducts(filtrados);
  };

  getItemsByFilter();
}, [JSON.stringify(categorias), JSON.stringify(modelos), productsFiltered]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDisplayMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%" }}>

      <Filters />

      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", marginTop: "45px", padding: "0px 40px" }}>
        <Box sx={{ display: "flex", flexDirection: "row", width: "95%", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>{products.length} productos</Typography>
          <OrderByPrice ref={menuRef} onClick={() => { setDisplayMenu(!displayMenu) }}>
            {order} <FaArrowDown size={12} />
            {displayMenu ? <div style={{ display: "flex", flexDirection: "column", border: "1px solid lightgrey", borderRadius: "6px", alignItems: "center", justifyContent: "center", backgroundColor: "#fff", position: "absolute", bottom: "-83px" }}>
              <div onClick={() => setOrder("Menor a mayor")} style={{ borderBottom: "1px solid lightgrey", padding: "8px 10px" }}>Menor a mayor</div>
              <div onClick={() => setOrder("Mayor a menor")} style={{ padding: "8px 10px" }}>Mayor a menor</div>
            </div> : false}
          </OrderByPrice>
        </Box>

        <DivContainer>
          <ItemList />
        </DivContainer>
      </Box>
    </Box>
  );
};

export default ItemListContainer;