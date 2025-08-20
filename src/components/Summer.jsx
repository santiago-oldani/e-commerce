import styled from "@emotion/styled"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 90px 0px;
    gap: 10px;
`

const Title = styled.h2`
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    
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
`

const Summer = () => {
    return (
        <Container>
            <Title>SUMMER.COLLECTION</Title>
            <SubTitle>Echa un vistazo a la nueva coleccion</SubTitle>
            <ButtonSeeMore>Ver más</ButtonSeeMore>
        </Container>
    )
}

export default Summer