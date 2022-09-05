import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.div`
    width: 100vw;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    footer{
        margin: 50px 0 10px 0;
        color: var(--color-quaternary);
        text-align: center;
    }
`
export default function ContainerMyTechs({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 