import styled from "styled-components";
import { ChildrenReactNode } from "../types/childrenReactNode";
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export default function Container({children}:ChildrenReactNode) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 