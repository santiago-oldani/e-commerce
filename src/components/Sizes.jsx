import styled from '@emotion/styled'
import { useState } from 'react'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    
`

const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid lightgray;
    border-radius: 8px;
    cursor: pointer;
    
    
    background-color: ${(props) => (props.checked ? "#000" : "#fff")};
    color: ${(props) => (props.checked ? "#fff" : "#000")};

    &:hover {
    background-color: ${(props) => (props.checked ? "#000" : "#000")};
    color: ${(props) => (props.checked ? "#fff" : "#fff")};
  }
`

const Sizes = ({ numbers }) => {
    const [selectedSize, setSelectedSize] = useState(numbers.size[0]);

    const handleOnClick = (size) => {
        setSelectedSize(size);
    }

    return (
        <Container>
            {numbers.size.map((size) => {
                return (
                    <Cards key={size} onClick={() => handleOnClick(size)}
                        checked={selectedSize === size}>{size}</Cards>
                )
            })}
        </Container>
    )
}

export default Sizes