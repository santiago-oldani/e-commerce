import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DivContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  border: 1px solid lightgrey;
  align-items: center;
  width: 500px;
  height: 400px;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;

  @media (max-width: 1855px) {
    width: 470px;
  }
  @media (max-width: 1825px) {
    width: 430px;
  }
  @media (max-width: 1700px) {
    width: 400px;
    height: 330px;
  }
  @media (max-width: 485px) {
    width: 370px;
    height: 300px;
  }
  @media (max-width: 430px) {
    width: 300px;
    height: 230px;
  }
    @media (max-width: 405px) {
    width: 250px;
    height: 180px;
  }
`;

const Image = styled.img`
  width: 330px;
  height: 360px;

  @media (max-width: 1855px) {
    width: 270px;
    height: 300px;
  }

  @media (max-width: 1700px) {
    width: 240px;
    height: 270px;
  }

  @media (max-width: 485px) {
    width: 200px;
    height: 230px;
  }

  @media (max-width: 430px) {
    width: 120px;
    height: 150px;
  }
  @media (max-width: 405px) {
    width: 70px;
    height: 100px;
  }
`;

const Item = ({ properties }) => {
  return (
    <Link style={{textDecoration: "none", color: "#000"}} to={`/item/${properties.id}`}>
      <DivContainer>
        <Image src={properties.picturesUrl[0]} />
        <Typography fontSize={14} color={"grey"} textAlign={"center"}>
          {properties.title}
        </Typography>
        <Typography fontWeight={"bold"}>${properties.price}</Typography>
      </DivContainer>
    </Link>
  );
};

export default Item;