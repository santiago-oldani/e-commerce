import styled from '@emotion/styled'
import man from '../assets/imgs/hombre.jpg'
import woman from '../assets/imgs/mujer.jpg'
import kid from '../assets/imgs/nene.jpg'

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
  width: 25%;     
  aspect-ratio: 3/4; 
  overflow: hidden;  
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
  loading: lazy;
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
`

const Banner = () => {
  return (
    <BannerDiv>
      <ImageWrapper>
        <Images src={man} />
        <ButtonSex>Hombre</ButtonSex>
      </ImageWrapper>

      <ImageWrapper>
        <Images src={woman} />
        <ButtonSex>Mujer</ButtonSex>
      </ImageWrapper>

      <ImageWrapper>
        <Images src={kid} />
        <ButtonSex>Niños</ButtonSex>
      </ImageWrapper>
    </BannerDiv>
  )
}

export default Banner