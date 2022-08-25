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
    margin-left: 105px;
    align-items: center;
    justify-content: start;
    @media(max-width: 858px) {
        justify-content: center;
        margin: 30px 0;
    }
`