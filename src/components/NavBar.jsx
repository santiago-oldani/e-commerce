import styled from "styled-components";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ContainerNav = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.2s ease;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: ${(props) => (props.scrolled ? "60px" : "100px")}; ;
  align-items: center;
  background-color: #fff;
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  return (
    <ContainerNav scrolled={scrolled}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 style={{ letterSpacing: "15px", color: "#000", marginBottom: "0px" }}>SHOP</h2>
      </Link>
      <UlNavBar>
        <Link
          to={"/products"}
          style={{ textDecoration: "none", listStyle: "none", color: "black" }}
        >
          <LiNavBar>Productos</LiNavBar>
        </Link>
        <LiNavBar>Locales</LiNavBar>
        <LiNavBar>Promociones y Cuotas</LiNavBar>
        <LiNavBar>Gift Cards</LiNavBar>
      </UlNavBar>
      <CartWidget />
    </ContainerNav>
  );
};

export default NavBar;