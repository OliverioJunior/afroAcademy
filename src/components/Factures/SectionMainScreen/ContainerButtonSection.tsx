import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerButtonSection({children}:ChildrenReactNode) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 

const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    margin: 50px;
    align-items: center;
    justify-content: center;
    @media(max-width: 780px) {
        justify-content: start;
        margin-left: 105px;
    }
`