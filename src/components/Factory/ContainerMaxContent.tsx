import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    margin: 50px;
`

export default function ContainerMaxContent({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 