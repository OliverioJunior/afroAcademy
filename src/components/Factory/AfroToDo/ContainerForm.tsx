import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
type Background = {
    background?: string
}
export default function ContainerForm({children, background}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper background={background}>
            {children}
        </Wrapper>
    )
} 
const Wrapper = styled.form`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    margin-top: 90px;
    background: ${({background}:Background) =>  background };
    div{
        max-width: 726px;
        display: flex;
        flex: 1;
    }
    input{
        flex:1;
        padding: 16px;
        border: 1px solid #C8E6D2;
        border-radius: 8px;
        &:focus {
            outline: none;
        }
    }
    button{
        width: 51px;
        height: 51px;
        border-radius: 8px;
        border: none;
        margin: 5px;
        overflow: hidden;
        background:var(--color-quinary);
        cursor:pointer;
        svg{
            width: 15px;
            height: 15px;
            fill: var(--color-primary)
        }
    }
      
`