import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: teal;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return <Container>Super Deal! Free shipping on orders over $50</Container>;
};

export default Announcements;
