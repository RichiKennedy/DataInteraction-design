import { Link } from "react-router-dom";
import isStyledComponent from "styled-components";

const Container = isStyledComponent.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;

`;
const Image = isStyledComponent.img`
width: 100%;
height: 100%;
object-fit: cover;


`;
const Info = isStyledComponent.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column; 

`;
const Title = isStyledComponent.h1`
color: white;
margin: 20px;
`;
const Button = isStyledComponent.button`
border-style: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer; 
font-width: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to="/surfboards">
        <Image src={item.img} />
        <Info>
          <Title>{item.title} </Title>

          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
