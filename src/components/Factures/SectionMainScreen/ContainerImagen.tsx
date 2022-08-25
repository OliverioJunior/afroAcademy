import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-right: 66px;
    flex-direction: column;
    @media(max-width: 858px) {
        display: none;
     }
    

`

export default function ContainerImagen({children}:ChildrenReactNode) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 