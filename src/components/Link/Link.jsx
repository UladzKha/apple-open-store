import styled from "styled-components";

export default function Link({ url, title }) {
  return <LinkEl href={url}>{title}</LinkEl>;
}

const LinkEl = styled.a`
  display: flex;
  margin-right: 10px;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #5e5959;

  :active {
    background-color: red;
    color: black
  }

  :hover {
    background-color: #f1f1f1;
  }
`;
