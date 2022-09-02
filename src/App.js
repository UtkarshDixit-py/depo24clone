import "./App.css";
import styled from "styled-components";
import WardrobeFittings from "./assets/Wardrobe+Fittings.webp";
import { L1 , L2 ,L3 } from "./database/db";



function App() {

  return (
    <Container>
      <SidebarNav>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </SidebarNav>
      <CategoryContainer>
        <ItemCategory>
          <CategoryHeading>Wardrobe Fitting</CategoryHeading>
          <ItemList>
          <Item href="#">
            <img src="https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L2+Images/Applicators/Applicators.webp" />
            <p>Item Name</p>
          </Item>
          </ItemList>
        </ItemCategory>
        <ItemCategory>
          <CategoryHeading>Accessories</CategoryHeading>
          <ItemList>
          <Item href="#">
            <img src={WardrobeFittings} />
            <p>Item Name</p>
          </Item>
          <Item href="#">
            <img src={WardrobeFittings}/>
            <p>Item Name</p>
          </Item>
          <Item href="#">
            <img src={WardrobeFittings}/>
            <p>Item Name</p>
          </Item>
          <Item href="#">
            <img src={WardrobeFittings} />
            <p>Item Name</p>
          </Item>
          <Item href="#">
            <img src={WardrobeFittings} />
            <p>Item Name</p>
          </Item>
          <Item href="#">
            <img src={WardrobeFittings} />
            <p>Item Name</p>
          </Item>
          </ItemList>
        </ItemCategory>
      </CategoryContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarNav = styled.div`
  overflow-y: scroll; 
  height: 100%;
  width: 30%;
  position: fixed;
  /* z-index: 1;
  top: 0;
  left: 0; */
  overflow-x: hidden;
  padding-top: 20px;
  
`;

const MenuItem = styled.div`
  border: 2px solid green;
  margin-top: 5px;
  height: 10vh;
`;
const CategoryContainer = styled.div`
  border: 2px solid red;
  margin-left: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const ItemCategory = styled.div`
  height: auto;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
`;


const CategoryHeading = styled.p`
  font-size: larger;

  font-weight: 500;
  display: flex;
  white-space: nowrap;
  align-items: center;
  margin: 15px 0px;

  &:after {
    content: "";
    width: 100%;
    height: 5px;
    background-color: #ff6200;
    margin-left: 15px;
  }
`;

const ItemList =  styled.div`
display: grid;
grid-template-columns:50% 50% ;
grid-gap: 5px

`

const Item = styled.a`
  border: 2px solid #C2CCDF;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 50%;
  place-self: center;
  text-decoration: none;

  height: auto;
  width: auto;
  align-items: center;
  justify-content: center;
  img {
    height: 50%;
    width: 50%;
    border: 1px solid black;
  }
  p {
    color: black;
  }
`;

export default App;
