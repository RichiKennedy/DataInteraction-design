import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {
  Add,
  FavoriteBorder,
  Remove,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 75%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
margin 20px 0px;`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 80px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  background-color: teal;
  color: white;
  border-style: none;
  font-size: 20px;
  width: 70%;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: center;
  cursor: pointer;
  gap: 15px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.03);
  }
`;
const Icon = styled.button`
  background-color: white;
  color: teal;
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.03);
  }
`;

const SingleProduct = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://images.blue-tomato.com/is/image/bluetomato/304623573_front.jpg-i0fnFbOj-XsUJrtPZyfgtxwe6Ak/Happy+Hour+Epoxy+7+6+Softtop+Surfboard.jpg?$b8$" />
        </ImageContainer>
        <InfoContainer>
          <Title>OCEAN & EARTH HAPPY HOUR EPOXY </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            vero quas labore nihil natus, cupiditate exercitationem facere
            voluptates veritatis impedit, quos saepe debitis aliquid cumque
            laborum quis iste voluptas sint. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Possimus numquam officia nemo in
            quidem fugiat est cupiditate! Laborum fugiat, exercitationem illum
            id fuga accusamus consectetur a aspernatur vel inventore autem.
          </Description>
          <Price>$50</Price>
          <OptionWrapper>
            <AmountContainer>
              <Remove />
              <Amount> 1 </Amount>
              <Add />
            </AmountContainer>

            <Button>
              Add to cart <ShoppingCartOutlined />
            </Button>
            <Icon>
              <FavoriteBorder />
            </Icon>
          </OptionWrapper>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
