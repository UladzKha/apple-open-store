import styled from "styled-components";

import applicationIcon from "../../assets/play.png";
import avatar from "../../assets/avatar.png";
import "./header.scss";

export default function Header() {
  return (
    <HeaderDiv>
      <HeaderCredDiv>
        <HeaderCredIcon src={applicationIcon} alt="icon" />
        <div>Open Apple Store</div>
      </HeaderCredDiv>
      <HeaderSearch>
        <HeaderSearchInput type="text" placeholder="Search" />
        <HeaderSearchBtn type="button">Search</HeaderSearchBtn>
      </HeaderSearch>
      <HeaderAvatar>
        <HeaderAvatarImg src={avatar} alt="avatar" />
      </HeaderAvatar>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  width: 100%;
  height: 56px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
`;

const HeaderCredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderCredIcon = styled.img`
  width: 38px;
  height: 38px;
`;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSearchInput = styled.input`
  margin-left: 20px;
  height: 30px;
  width: 592px;
  border-color: lightgray;
  border-width: 1px;
  outline-color: lightskyblue;
  outline-width: 1px;
  font-size: 16px;
`;

const HeaderSearchBtn = styled.button`
  height: 36px;
`;

const HeaderAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderAvatarImg = styled.img`
  width: 52px;
  border-radius: 50%;
`;
