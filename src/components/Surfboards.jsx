import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Overlay = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 20px;
`;
const Image = styled.img`
  height: 80%;
`;

const Container = styled.div`
  flex: 1;
  margin: 20px;
  padding: 5px;
  min-width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: solid 1px #eee7e1;
  border-radius: 20px;

  position: relative;

  &:hover ${Overlay} {
    opacity: 1;
  }
  &:hover ${Image} {
    transform: scale(1.03);
    transition: all 0.5s ease;
  }
`;

const Description = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Info = styled.h6`
  width: 100%;
  text-align: center;
  margin-top: 5px;
  font-size: 13px;
`;
const Price = styled.h4`
  width: 100%;
  text-align: center;
  margin-top: 5px;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eee7e1;
    transform: scale(1.1);
  }
`;

const Surfboards = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Description>
        <Info> {item.title} </Info>

        <Price>$ {item.price}</Price>
      </Description>
      <Overlay>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Overlay>
    </Container>
  );
};

export default Surfboards;
