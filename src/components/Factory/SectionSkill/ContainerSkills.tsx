import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.div`
    width: 100%;
    min-height: 248px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export default function ContainerSkills({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 