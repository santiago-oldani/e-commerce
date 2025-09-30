import styled from "styled-components";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRemoveFilters } from "../context/RemoveFilters";
import { IoIosMenu } from "react-icons/io";



const ContainerNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: auto;
`

const SubContainerNavBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3ff;
  width: 100%;
  height: 30px;
  font-size: 0.9rem;
  padding: 15px 0px;
`

const SubContainerNavTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #111;
  width: 100%;
  height: 30px;
`

const SubContainerNavMid = styled.div`
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

  @media (max-width: 900px){
    width: 50%;
  }
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

  @media (max-width: 900px){
    font-size: 12px;
  }
`;

const Logo = styled.h2`
  letter-spacing: 15px;
  color: #000;
  margin-bottom: 0px;

  @media (max-width: 900px){
    font-size: 22px;
  }
`

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [remove, setRemove] = useRemoveFilters(false);
  const [menuDropdownActive, setMenuDropDownActive] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    const handleMenu = () => {
      if (window.innerWidth < 900) {
        setMenuDropDownActive(true);
      } else{
        setMenuDropDownActive(false);
      }
    }
    handleMenu();
    window.addEventListener('resize', handleMenu);

    return () => window.removeEventListener('resize', handleMenu)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  return (
    <ContainerNav>
      <SubContainerNavTop>

      </SubContainerNavTop>
      <SubContainerNavMid scrolled={scrolled}>
        <Link to="/" style={{ textDecoration: "none" }} onClick={() => setRemove(true)}>
          <Logo>SHOP</Logo>
        </Link>

        {menuDropdownActive ? <IoIosMenu onClick={() => setMenuClicked(!menuClicked)} size={40}/> : <UlNavBar>
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
        </UlNavBar>}


        <CartWidget />
      </SubContainerNavMid>
      <SubContainerNavBottom>Envio gratis a partir de $199.999</SubContainerNavBottom>
    </ContainerNav>
  );
};

export default NavBar;