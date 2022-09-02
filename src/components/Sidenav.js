import React from "react";
import SidenavItem from "./SidenavItem";

import styled from "styled-components";

const Sidenav = ({ subMenuArr }) => {
    
  return (
    <SidebarNav>
      {subMenuArr.map((item, index) => {
        return <SidenavItem item={item} key={index} />;
      })}
    </SidebarNav>
  );
};

const SidebarNav = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 30%;
  position: fixed;
  overflow-x: hidden;
  padding-top: 20px;
`;

export default Sidenav;
