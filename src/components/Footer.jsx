import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 30px;
  margin-left: 250px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
`;
const ListItem = styled.li`
  list-style: none;
  padding-top: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 30px;
`;

const ContactItem = styled.div`
  padding-top: 25px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Surfboards.</Logo>
        <Description>
          {" "}
          We are a sustainable surfboard company based in Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Praesentium qui esse rem aperiam
          atque necessitatibus possimus, ab hic quis eligendi, cum optio ducimus
          facilis sequi nobis? Ipsum tempore iure quos?
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Surfboards</ListItem>
          <ListItem>Womens wetsuits</ListItem>
          <ListItem>Mens wetsuits</ListItem>
          <ListItem>Fins</ListItem>
          <ListItem>Accessories</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: "10px" }} /> 27 Tappvägen, 168 78
          Stockholm, Sweden
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +46 73 833 29 99
        </ContactItem>
        <ContactItem>
          {" "}
          <Mail style={{ marginRight: "10px" }} />{" "}
          Richard.Kennedy@hyperisland.se
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
