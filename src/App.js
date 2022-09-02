import "./App.css";
import styled from "styled-components";
import { L2, L3 } from "./database/db";
import Categories from "./components/Categories";
import Sidenav from "./components/Sidenav";

function App() {
  var subMenuObj = L2.reduce(function (r, a) {
    r[a.l1] = r[a.l1] || [];
    r[a.l1].push(a);
    return r;
  }, Object.create(null));

  var subMenuArr = Object.entries(subMenuObj);

  var categoryObj = L3.reduce(function (r, a) {
    r[a.l2] = r[a.l2] || [];
    r[a.l2].push(a);
    return r;
  }, Object.create(null));

  var categoryArr = Object.entries(categoryObj);

  return (
    <Container>
      <Sidenav subMenuArr={subMenuArr} />
      <Categories categoryArr={categoryArr} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default App;
