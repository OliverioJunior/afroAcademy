import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
type HeaderTypes = {
    justify?: string
    color?: string
}
const HeaderWrapper = styled.header`
    width: 100%;
    height: 63px;
    position: fixed;
    z-index: 1000;
    background-color: ${(({color}:HeaderTypes )=> color ? color : 'var(--color-primary)')};
    display: flex;
    justify-content: ${(({justify}:HeaderTypes )=> justify)};
    align-items: center;
    letter-spacing: 2px;
    padding: 0 40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    h1{
      margin: 0 10px;
      color: #fff;
      cursor: pointer;
    }
`

export default function Header({children, value, colors}:ChildrenReactNode<string>) {
  return (
    <HeaderWrapper justify={value} color={colors} >
      {children}
    </HeaderWrapper>
  );
}