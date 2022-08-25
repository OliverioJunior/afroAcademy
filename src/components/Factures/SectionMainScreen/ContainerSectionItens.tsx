import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerSectionItens({children}:ChildrenReactNode) {
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
    justify-content: start;
    margin-left: 105px;
   
    h1{
        font-size: 3em;
        font-weight: 700;
        text-align: start;
    }
    span{
        color: var(--color-tertiary);
    }
    p{
        font-size: 1.25em;
        text-align: start;
        word-wrap: break-word;
        color: var(--color-quaternary);
    }
    @media(max-width: 858px) {
        margin: 30px 0;
        h1{
            font-size: 2.625em;
            margin: 0px 30px;
        }
        p{
            font-size: 1.09375em;
            margin: 0px 30px;
        }
      }
`