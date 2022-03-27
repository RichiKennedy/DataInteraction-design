import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
  margin-right: 20px;
`;
const ProductWrapper = styled.div``;
const Product = styled.div`
  display: flex;
  justify-content: space-between;

  overflow: scroll;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 350px;
`;
const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
`;
const ProductName = styled.span``;
const ProductSize = styled.span``;
const ProductId = styled.span``;

const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  border: 0.5px solid teal;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  height: 50vh;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const SummaryTitle = styled.h1``;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Title> Your Bag</Title>
        <Top>
          <TopButton> Continue Shopping </TopButton>
          <TopTexts>
            <TopText> Shopping Bag (2)</TopText>
          </TopTexts>
          <TopButton type="filled"> Checkout Now </TopButton>
        </Top>
        <Bottom>
          <Info>
            <ProductWrapper>
              <Product>
                <ProductDetails>
                  <Image src="https://images.blue-tomato.com/is/image/bluetomato/304623573_front.jpg-i0fnFbOj-XsUJrtPZyfgtxwe6Ak/Happy+Hour+Epoxy+7+6+Softtop+Surfboard.jpg?$b8$" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> INDIO MID LENGTH
                    </ProductName>
                    <ProductSize>
                      <b>Size:</b>7'0ft SURFBOARD
                    </ProductSize>
                    <ProductId>
                      <b>ID:</b> 123456789
                    </ProductId>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount> 1 </ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice> $30</ProductPrice>
                </PriceDetails>
              </Product>
              <Hr />
              <Product>
                <ProductDetails>
                  <Image src="https://images.blue-tomato.com/is/image/bluetomato/304623573_front.jpg-i0fnFbOj-XsUJrtPZyfgtxwe6Ak/Happy+Hour+Epoxy+7+6+Softtop+Surfboard.jpg?$b8$" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> INDIO MID LENGTH
                    </ProductName>
                    <ProductSize>
                      <b>Size:</b>7'0ft SURFBOARD
                    </ProductSize>
                    <ProductId>
                      <b>ID:</b> 123456789
                    </ProductId>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount> 1 </ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice> $30</ProductPrice>
                </PriceDetails>
              </Product>
              <Hr />
            </ProductWrapper>
          </Info>
          <Summary>
            <SummaryTitle> ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$60 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Shipping Discount</SummaryItemText>
              <SummaryItemPrice> -$5.90 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText> Total</SummaryItemText>
              <SummaryItemPrice> $60 </SummaryItemPrice>
            </SummaryItem>
            <Button> Checkout Now </Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
