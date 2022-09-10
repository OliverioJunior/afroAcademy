import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerTask({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 

const Wrapper = styled.main`
    display:flex;
    flex-direction: column;
    flex:1;
    align-items: center;
    div{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
    }
    ul{
        max-width: 726px;
        flex: 1 726px;
        div{
            display: flex;
            justify-content: flex-start;
            p{
                padding:20px 0;
                font-size:1.125rem;
            } 
        }
        li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #fff;
            padding: 16px;
            gap: 16px;
            border: 1px solid #C8E6D2;
            border-radius: 8px;
            margin: 5px 0;
            button{
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                padding: 10px;
                width: 32px;
                height: 32px;
                fill:  #4F4F4F;
                background: #F1F7ED;
                border-radius: 8px;
                border:none; 
                cursor: pointer;
            }
        }
        span{
            color: var(--color-primary);
            background: var(--color-secundary);
            margin: 0 5px;
            padding: 2px 10px;
            border-radius: 8px;
            font-size:0.75rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: fit-content;
            align-self: center;
        }
    }

    @media (max-width: 1080px) {
        ul{
            div{
                justify-content: center;
            }
        }
    }
`