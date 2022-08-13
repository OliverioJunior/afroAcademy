import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: #333;
    color: rgb(240,240,240);
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
`



export default function Header() {
    const header = `Desafio Afro-Academy`
  return (
    <HeaderWrapper>
      <h1>{header}</h1>
    </HeaderWrapper>
  );
}