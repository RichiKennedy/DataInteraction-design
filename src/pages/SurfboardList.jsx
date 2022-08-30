import styled from "styled-components";

import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import { useLocation } from "react-router";
import { useState } from "react";
import NewSurfboards from "../components/NewSurfboards";
// import { useLocation } from "react-router";
// import { useState } from "react";

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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcements />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>green</Option>
            <Option>zebra</Option>
            <Option>beige</Option>
            <Option>orange</Option>
            <Option>disco zebra</Option>
            <Option>blue</Option>
            <Option>gray</Option>
            <Option>black</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">newest</Option>
            <Option value="highest">price (highest)</Option>
            <Option value="lowest">price (lowest)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <SurfboardContainer>
        <NewSurfboards cat={cat} filters={filters} sort={sort} />
      </SurfboardContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SurfboardList;
