import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerHeaderTechs({children}:ChildrenReactNode<undefined>) {
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
    margin-top: 50px;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    div{
        margin: 30px;
    }
    h1{
        font-size: 2.5em;
        font-weight: 700;
        text-align: start;
        flex:auto;
    }
    span{
        color: var(--color-tertiary);
    }
    p{
        margin:50px 0 0 0;
    }
    @media(max-width: 858px) {
        justify-content: start;
        h1{
            font-size: 2.1875em;
            text-align: start;
        }
      }
`