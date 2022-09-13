import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerDivUlTask({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 

const Wrapper = styled.div`  
    width:100%;
    display: flex;
    span{
        color: var(--color-primary);
        background: var(--color-secundary);
        margin: 0 5px;
        padding: 2px 10px;
        border-radius: 8px;
        font-size:0.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        align-self: center;
    }
`