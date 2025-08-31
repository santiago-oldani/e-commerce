import styled from '@emotion/styled'
import shoe_1 from '../assets/imgs/zapa1.png'
import shoe_2 from '../assets/imgs/zapa2.png'
import shoe_3 from '../assets/imgs/zapa3.png'
import shoe_4 from '../assets/imgs/zapa4.png'
import shoe_5 from '../assets/imgs/zapa5.png'
import shoe_6 from '../assets/imgs/zapa6.png'

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
`

const ModelTitle = styled.h4`
    font-size: 13px;
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
                <ModelDiv>
                    <ModelImage src={shoe_1} />
                    <ModelTitle>AIR FORCE</ModelTitle>
                </ModelDiv>

                <ModelDiv>
                    <ModelImage src={shoe_2} />
                    <ModelTitle>JORDAN 1</ModelTitle>
                </ModelDiv>

                <ModelDiv>
                    <ModelImage src={shoe_3} />
                    <ModelTitle>SAMBA</ModelTitle>
                </ModelDiv>

                <ModelDiv>
                    <ModelImage src={shoe_4} />
                    <ModelTitle>CAMPUS</ModelTitle>
                </ModelDiv>

                <ModelDiv>
                    <ModelImage src={shoe_5} />
                    <ModelTitle>SUEDE</ModelTitle>
                </ModelDiv>

                <ModelDiv>
                    <ModelImage src={shoe_6} />
                    <ModelTitle>SUPERSTAR</ModelTitle>
                </ModelDiv>
            </ModelContainer>
        </Container>
    )
}

export default FavoriteModels