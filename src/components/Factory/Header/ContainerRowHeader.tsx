import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    span{
        color:var(--color-tertiary);
        font-weight: 700;
    }
    @media(max-width: 858px) {
       justify-content:center;
    }
`

export default function ContainerRowAll({children}:ChildrenReactNode) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 