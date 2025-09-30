import styled from '@emotion/styled'
import shoe_1 from '../assets/imgs/zapa1.png'
import shoe_2 from '../assets/imgs/zapa2.png'
import shoe_3 from '../assets/imgs/zapa3.png'
import shoe_4 from '../assets/imgs/zapa4.png'
import shoe_5 from '../assets/imgs/zapa5.png'
import shoe_6 from '../assets/imgs/zapa6.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto 50px auto;
    width: 60%;
    align-self: center;

    
`

const ModelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
    gap: 15px;
    height: auto;
`

const ModelDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    /* &:hover{
        margin-bottom: 5px;
        transition: all 0.2s;
    } */
`

const ModelImage = styled.img`
    width: 180px;
    height: 180px;

    @media (max-width: 1200px){
    width: 130px;
    height: 130px;
  }

  @media (max-width: 890px){
    width: 100px;
    height: 100px;
  }

  @media (max-width: 700px){
    width: 75px;
    height: 75px;
  }
`

const ModelTitle = styled.h4`
    font-size: 13px;

    @media (max-width: 700px){
    font-size: 10px;
  }
`

const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
`

const FavoriteModels = () => {
    return (
        <Container>
            <Title>TUS MODELOS FAVORITOS</Title>
            <ModelContainer>
                <Link to="/products/all?modelo=air+force" style={{ textDecoration: "none", color: "#000" }}>
                    <ModelDiv>
                        <ModelImage src={shoe_1} />
                        <ModelTitle>AIR FORCE</ModelTitle>
                    </ModelDiv>
                </Link>

                <Link to="/products/all?modelo=JORDAN+AIR+1" style={{ textDecoration: "none", color: "#000" }}>
                    <ModelDiv>
                        <ModelImage src={shoe_2} />
                        <ModelTitle>JORDAN 1</ModelTitle>
                    </ModelDiv>
                </Link>

                <Link to="/products/all?modelo=samba" style={{ textDecoration: "none", color: "#000" }}>
                    <ModelDiv>
                        <ModelImage src={shoe_3} />
                        <ModelTitle>SAMBA</ModelTitle>
                    </ModelDiv>
                </Link>

                <Link to="/products/all?modelo=campus" style={{ textDecoration: "none", color: "#000" }}>
                    <ModelDiv>
                        <ModelImage src={shoe_4} />
                        <ModelTitle>CAMPUS</ModelTitle>
                    </ModelDiv>
                </Link>

                <Link to="/products/all?modelo=suede" style={{ textDecoration: "none", color: "#000" }}>
                    <ModelDiv>
                        <ModelImage src={shoe_5} />
                        <ModelTitle>SUEDE</ModelTitle>
                    </ModelDiv>
                </Link>

                <Link to="/products/all?modelo=superstar" style={{ textDecoration: "none", color: "#000" }}>
                    <ModelDiv>
                        <ModelImage src={shoe_6} />
                        <ModelTitle>SUPERSTAR</ModelTitle>
                    </ModelDiv>
                </Link>
            </ModelContainer>
        </Container>
    )
}

export default FavoriteModels