import "./App.css";
import styled from "styled-components";
import WardrobeFittings from "./assets/Wardrobe+Fittings.webp";

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
        {/* <ItemSection>
          <Heading>Wardrobe Fitting</Heading>
          <Item>
            <img src={WardrobeFittings}/>
            <p>Item Name</p>
          </Item>
        </ItemSection> */}
      </CategoryContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarNav = styled.div`
  width: 35vw;
  height: 100vh;
  overflow-y: scroll;
  position: sticky;
`;

const MenuItem = styled.div`
  border: 2px solid green;
  margin-top: 5px;
  height: 10vh;
`;
const CategoryContainer = styled.div`
  border: 2px solid red;
  height: 100vh;
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
