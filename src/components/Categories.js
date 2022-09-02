import React from 'react'
import styled from 'styled-components';

const Categories = ({categoryArr}) => {
  return (
    <CategoryContainer>
        {categoryArr.map((category,index) => {
          return (
            <ItemCategory>
              <CategoryHeading key={index}>{category[0]}</CategoryHeading>
              <ItemList>
                {category[1].map((item,index) => {
                  return (
                    <Item href="#" key={index}>
                      <img src={item.image} />
                      <p>{item.title}</p>
                    </Item>
                  );
                })}
              </ItemList>
            </ItemCategory>
          );
        })}
      </CategoryContainer>
  )
}

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

const ItemList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5px;
`;

const Item = styled.a`
  border: 2px solid #c2ccdf;
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


export default Categories