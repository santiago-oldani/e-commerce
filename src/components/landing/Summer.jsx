import styled from "@emotion/styled"
import { Link } from "react-router-dom"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 50px;
    gap: 10px;
    text-align: center;
    background-color: #f3f3f3ff;
`

const Title = styled.h2`
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    margin: 0;
    font-size: 30px;

    @media (max-width: 360px){
        font-size: 20px;
    }
`

const SubTitle = styled.h3`
    font-weight: lighter;
    letter-spacing: 0px;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
`

const ButtonSeeMore = styled.button`
    background-color: #111;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    border-radius: 48px;
    padding: 12px 28px;
    border: none;
    font-weight: 300;
    &:hover{
        opacity: 0.8;
        transition: 0.5s;
    }

    @media (max-width: 360px){
        padding: 10px 24px;
    }
`

const Summer = () => {
    return (
        <Container>
            <Title>SPRING.COLLECTION</Title>
            <SubTitle>Echa un vistazo a la nueva coleccion</SubTitle>
            <Link to="/products/all" style={{textDecoration: "none", color: "black"}}>
                <ButtonSeeMore>Ver más</ButtonSeeMore>
            </Link>
        </Container>
    )
}

export default Summer