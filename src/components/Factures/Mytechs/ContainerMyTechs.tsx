import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.div`
    width: 100vw;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
`
export default function ContainerMyTechs({children}:ChildrenReactNode) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 