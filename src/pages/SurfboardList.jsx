import styled from "styled-components";
import { SurfboardProducts } from "../data";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Surfboards from "../components/Surfboards";

const Container = styled.div`
  width: 100vw;
`;
const Title = styled.h1`
  margin: 0px 20px;
  padding: 10px;
  background-color: #eee7e1;
`;
const FilterContainer = styled.div`
  display: flex;
  background-color: #eee7e1;
  margin: 0px 20px;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
`;
const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  margin-right: 20px;
`;
const Option = styled.option``;

const SurfboardContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

const SurfboardList = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Title> Surfboards </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Green</Option>
            <Option>Zebra</Option>
            <Option>Beige</Option>
            <Option>Orange</Option>
            <Option>Disco Zebra</Option>
            <Option>Blue</Option>
            <Option>Gray</Option>
            <Option>Black</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>Green</Option>
            <Option>Zebra</Option>
            <Option>Beige</Option>
            <Option>Orange</Option>
            <Option>Disco Zebra</Option>
            <Option>Blue</Option>
            <Option>Gray</Option>
            <Option>Black</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <SurfboardContainer>
        {SurfboardProducts.map((item) => (
          <Surfboards item={item} key={item.id} />
        ))}
      </SurfboardContainer>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SurfboardList;
