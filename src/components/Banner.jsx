import styled from '@emotion/styled'
import man from '../assets/imgs/hombre.jpg'
import woman from '../assets/imgs/mujer.jpg'
import kid from '../assets/imgs/nene.jpg'
import { Link } from 'react-router-dom'

const BannerDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: auto;
    gap: 15px;
    margin-bottom: 100px;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 400px;

  @media (max-width: 1270px){
    width: 300px;
    height: auto;
  }

  @media (max-width: 950px){
    width: 200px;
    height: auto;
  }

  @media (max-width: 950px){
    width: 130px;
    height: auto;
  }

`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
  
`

const ButtonSex = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    border-radius: 48px;
    padding: 12px 28px;
    border: none;
    font-weight: 300;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 75px;
    height: 35px;
    &:hover{
        opacity: 0.8;
        transition: all 0.3s;
    }

    @media (max-width: 950px){
    font-size: 10px;
    height: 20px;
    width: 60px;
  }

  @media (max-width: 700px){
    top: 10px;
    right: 2px;
  }
`

const LinkTo = styled(Link)`
  textDecoration: none;
  color: #000;
`

const Banner = () => {
  return (
    <BannerDiv>
      <LinkTo to="/products/mujer" >
        <ImageWrapper>
          <Images src={woman} />
          <ButtonSex>Mujer</ButtonSex>
        </ImageWrapper>
      </LinkTo>

      <LinkTo to="/products/hombre" >
        <ImageWrapper>
          <Images src={man} />
          <ButtonSex>Hombre</ButtonSex>
        </ImageWrapper>
      </LinkTo>

      <LinkTo to="/products/niño" >
        <ImageWrapper>
          <Images src={kid} />
          <ButtonSex>Niños</ButtonSex>
        </ImageWrapper>
      </LinkTo>
    </BannerDiv>
  )
}

export default Banner