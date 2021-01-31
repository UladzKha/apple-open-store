import styled from "styled-components";
import { Link as LinkTo } from "react-router-dom";

export default function Link({ url, title }) {
  return <LinkEl to={url}>{title}</LinkEl>;
}

const LinkEl = styled(LinkTo)`
  display: flex;
  margin-right: 10px;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #5e5959;

  :active {
    background-color: red;
    color: black;
  }

  :hover {
    background-color: #f1f1f1;
  }
`;
