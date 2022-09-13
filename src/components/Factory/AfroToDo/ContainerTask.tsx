import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerTask({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 

const Wrapper = styled.main`
    display:flex;
    flex-direction: column;
    width: 50%;
    flex:1;
    align-items: center;
    @media (max-width: 1080px) {
        width: 80%;
    }
`