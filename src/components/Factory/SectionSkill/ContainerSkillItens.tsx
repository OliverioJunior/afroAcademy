import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerSkillItens({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 

const Wrapper = styled.div`
    width:  248px;
    height: 248px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin: 20px auto;
    overflow: hidden; 
   
   
    }
    div{
        margin: 0px 0px 0 40px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: flex-end;
        justify-content: start;
        h2{
            font-size: 1.3rem; 
            text-align:left;
        }
        
    }
    p{
        font-size: 1rem; 
        margin: 20px 10px 0px 22px;
        color:var(--color-quaternary);
    }

    &:hover{
        background: var(--color-tertiary);
        color: var(--color-primary);
        transition: .5s;
        p{
            color: var(--color-primary);
            transition: .5s;
        }
    }
`