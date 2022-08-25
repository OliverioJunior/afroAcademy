import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
const Wrapper = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFFFFF;
    @media(max-width: 858px) {
       width: 100%;
       padding: 20px;
     }
`

export default function ContainerHalfWidth({children}:ChildrenReactNode) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 