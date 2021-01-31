import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "../Home/Home";
import Link from "../Link/Link";
import NewReleases from "../NewReleases/NewReleases";
import TopCharts from "../TopCharts/TopCharts";

export default function Content() {
  const apps = [{"id":"0", "title": "Pasha Fencer", "rating": "4.5"}, {"id":"2", "title": "FIFA Football", "rating": "3.5"}]
  return (
    <Context>
      <MenuDiv>Menu will be here</MenuDiv>
      <ContentDiv>
        <div style={{ display: "flex", height: 50, backgroundColor: "white" }}>
          <Link url="/" title="Home" />
          <Link url="/top" title="Top charts" />
          <Link url="/new" title="New releases" />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new">
            <NewReleases />
          </Route>
          <Route path="/top">
            <TopCharts />
          </Route>
        </Switch>
      </ContentDiv>
    </Context>
  );
}

const Context = styled.div`
  display: flex;
  background-color: #f1f1f1;
`;

const MenuDiv = styled.div`
  background-color: red;
  flex: 1;
`;

const ContentDiv = styled.div`
  background-color: #f1f1f1;
  flex: 8;
`;
