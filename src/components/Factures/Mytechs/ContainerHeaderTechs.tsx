import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerHeaderTechs({children}:ChildrenReactNode) {
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
    margin: 80px 25px;
    align-items: center;
    justify-content: start;
   
    h1{
        font-size: 2.5em;
        font-weight: 700;
        text-align: start;
    }
    span{
        color: var(--color-tertiary);
    }
    @media(max-width: 858px) {
        justify-content: start;
        h1{
            font-size: 2.1875em;
            text-align: start;
            margin: 0px 30px;
        }
      }
`