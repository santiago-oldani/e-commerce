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
  height: auto;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 330px;
  height: 360px;
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