import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.section`
    width: 100vw;
    height: calc(100vh - 76px);
    display: flex;
`

export default function ContainerMainScreenWidth({children}:ChildrenReactNode) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 