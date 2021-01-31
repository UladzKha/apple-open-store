import styled from "styled-components";

export default function AppBar({ app }) {
  return (
    <AppContainer>
      <Icon src={app.icon} />
      <AppInfo>
        <div>{app.title}</div>
        <div style={{ marginTop: 5 }}>{app.developer}</div>
        <div style={{ marginTop: 10 }}>{app.rating}</div>
      </AppInfo>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin-left: 20px;
  width: 160px;
  height: 246px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 5px;
  border: 1px solid #b1b0b0;
  box-shadow: 1px 1px #9e9d9d;
`;

const Icon = styled.img`
  width: 130px;
  height: 130px;
  align-self: center;
  margin-top: 18px;

  :hover {
    border: 2px solid lightskyblue;
    cursor: pointer;
  }
`;

const AppInfo = styled.div`
  color: black;
  margin-left: 10px;
`;
