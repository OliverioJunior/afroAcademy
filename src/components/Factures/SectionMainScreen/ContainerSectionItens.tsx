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
    justify-content: center;
    h1{
        font-size: 3em;
        font-weight: 700;
        text-align: center;
    }
    span{
        color: var(--color-terciary);
    }
    p{
        font-size: 1.25em;
        text-align: center;
    }
    @media(max-width: 780px) {
        justify-content: start;
        h1{
            font-size: 2.625em;
            text-align: start;
            margin: 0px 30px;
        }
        p{
            font-size: 1.09375em;
            margin: 0px 30px;
            text-align: start;
        }
      }
`