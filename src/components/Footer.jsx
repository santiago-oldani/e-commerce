import styled from "@emotion/styled"
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const DivContainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #111;
    width: 100%;
    height: 250px;
    color: #fff;
    padding: 20px;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: flex-end;
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const CircleIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #383838ff;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 10px;
`

const Footer = () => {
  return (
    <DivContainerFooter>
      <IconsContainer>
        <CircleIcons>
          <FaInstagram size={35}/>
        </CircleIcons>
        <CircleIcons>
          <BsTwitterX size={35}/>
        </CircleIcons>
        <CircleIcons>
          <FaYoutube size={35}/>
        </CircleIcons>
        <CircleIcons>
          <FaFacebook size={35}/>
        </CircleIcons>
      </IconsContainer>
    </DivContainerFooter>
  )
}

export default Footer