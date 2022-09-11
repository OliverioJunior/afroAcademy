import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerAfroNoTask({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 

const Wrapper = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center;
    background:#EFF1F3;
    flex:1;
`