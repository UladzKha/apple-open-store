import styled from "styled-components";
import Link from "../Link/Link";

export default function Content() {
  return (
    <Context>
      <MenuDiv>Menu will be here</MenuDiv>
      <ContentDiv>
        <div style={{ display: "flex", height: 50, backgroundColor: "white" }}>
          <Link url="/home" title="Home" />
          <Link url="/top" title="Top charts" />
          <Link url="/new" title="New releases" />
        </div>
        <div>Hello</div>
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
