import styled from '@emotion/styled'
import modelo1 from '../assets/imgs/modelo-1.jpg'
import modelo2 from '../assets/imgs/modelo-2.jpg'

const BannerDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    padding: 0px 50px;
    gap: 40px;
`

const Images = styled.img`
    width: 600px;
    height: auto;
`

const Banner = () => {
  return (
    <BannerDiv>
        <Images src={modelo1}/>
        <Images src={modelo2}/>
    </BannerDiv>
  )
}

export default Banner