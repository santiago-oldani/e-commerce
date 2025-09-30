import styled from '@emotion/styled'
import modelo1 from '../assets/imgs/modeloBannerUp.jpg'
import modelo4 from '../assets/imgs/modeloBannerUp2.jpg'


const BannerDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    
`

const Images = styled.img`
    width: 50%;
    height: auto;
    loading: lazy;
`

const BannerUp = () => {
  return (
    <BannerDiv>
      <Images src={modelo1} />
      <Images src={modelo4} />
    </BannerDiv>
  )
}

export default BannerUp