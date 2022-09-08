import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerNoTask({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items:center;
    color: #707070;
    img{
        width:51.75px;
        height:63.01px;
        margin: 30px
    }
    p{
        font-size: 1rem;

    }
`