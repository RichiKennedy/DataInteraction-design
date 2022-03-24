import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Title> Surfboards </Title>
      <FilterContainer>
        <Filter>Filter</Filter>
        <Filter>Sort by</Filter>
      </FilterContainer>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
