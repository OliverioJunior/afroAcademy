import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
const HeaderWrapper = styled.header`
    width: 100%;
    height: 63px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    padding: 0 40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export default function Header({children}:ChildrenReactNode) {
  return (
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  );
}