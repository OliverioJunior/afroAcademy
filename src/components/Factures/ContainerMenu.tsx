import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";

    const Wrapper = styled.div`
    width: 300px;
    min-height: min-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media(max-width: 780px) {
        display:none;
    }
`
export default function ContainerMenu({ children }:ChildrenReactNode) {
   
 return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 