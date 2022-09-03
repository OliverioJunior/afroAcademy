import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
export default function ContainerMain({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 