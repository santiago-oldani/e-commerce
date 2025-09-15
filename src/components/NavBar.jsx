import styled from "styled-components";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRemoveFilters } from "../context/RemoveFilters";



const ContainerNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: auto;
`

const SubContainerNavBlack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #111;
  width: 100%;
  height: 30px;
`

const SubContainerNavWhite = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background-color: #fff;
  height: 60px;
  /* transition: height 0.2s ease;
  height: ${(props) => (props.scrolled ? "60px" : "100px")}; ; */
`;

const UlNavBar = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  align-items: center;
  margin-right: 150px;
  margin-bottom: 0px;
`;

const LiNavBar = styled.li`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  letter-spacing: 1.2px;
  list-style: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
   &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: black;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [setRemove] = useRemoveFilters(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  return (
    <ContainerNav>
      <SubContainerNavBlack>

      </SubContainerNavBlack>
      <SubContainerNavWhite scrolled={scrolled}>
        <Link to="/" style={{ textDecoration: "none" }} onClick={() => setRemove(true)}>
          <h2 style={{ letterSpacing: "15px", color: "#000", marginBottom: "0px" }}>SHOP</h2>
        </Link>
        <UlNavBar>
          <Link
            to={"/products/all"}
            style={{ textDecoration: "none", listStyle: "none", color: "black" }}
            onClick={() => setRemove(true)}
          >
            <LiNavBar>Productos</LiNavBar>
          </Link>
          <Link
            to={"/products/hombre"}
            style={{ textDecoration: "none", listStyle: "none", color: "black" }}
            onClick={() => setRemove(true)}
          >
            <LiNavBar>Hombre</LiNavBar>
          </Link>
          <Link
            to={"/products/mujer"}
            style={{ textDecoration: "none", listStyle: "none", color: "black" }}
            onClick={() => setRemove(true)}
          >
            <LiNavBar>Mujer</LiNavBar>
          </Link>
          <Link
            to={"/products/niño"}
            style={{ textDecoration: "none", listStyle: "none", color: "black" }}
            onClick={() => setRemove(true)}
          >
            <LiNavBar>Niños</LiNavBar>
          </Link>
        </UlNavBar>
        <CartWidget />
      </SubContainerNavWhite>
    </ContainerNav>
  );
};

export default NavBar;