import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";

export default function ContainerInput({children}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    input{
        flex:1;
        margin: 5px 0;
        height: 51px;
        padding: 16px;
        border: 1px solid #C8E6D2;
        border-radius: 8px;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
    button{
        width: 51px;
        height: 51px;
        border-radius: 8px;
        border: none;
        margin: 0 0 0 5px;
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