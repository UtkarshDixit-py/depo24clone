import React, { useState } from "react";
import styled from "styled-components";
import * as RiIcons from "react-icons/ri";

const SidenavItem = ({ item }) => {
  const [subMenu, setSubmenu] = useState(false);

  const showSubmenu = () => setSubmenu(!subMenu);

  return (
    <>
      <NavItem onClick={() => showSubmenu()}>
        <p>{item[0]}</p>
        <div>
          {subMenu ? <RiIcons.RiArrowUpSFill /> : <RiIcons.RiArrowDownSFill />}
        </div>
      </NavItem>
      {subMenu &&
        item[1].map((item, index) => {
          return <NavLink>{item.title}</NavLink>;
        })}
    </>
  );
};

const NavItem = styled.div`
  margin-top: 5px;
  height: 10vh;
  background-color: #c2ccdf;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled.div`
  padding: 20px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px #888888;
  text-decoration: none;
  color: black;

  &:hover {
    border-left: 4px solid #ff6200;
    cursor: pointer;
    color: #ff6200;
  }
`;

export default SidenavItem;
