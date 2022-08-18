import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
const HeaderWrapper = styled.div`
    width: 100%;
    height: 63px;
    background-color: #333;
    color: rgb(240,240,240);
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    padding: 0 40px;
`

export default function Header({children}:ChildrenReactNode) {
  return (
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  );
}