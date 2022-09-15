import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
type Background = {
    background?: string
}
export default function ContainerForm({children, background}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper action="#" background={background}>
            {children}
        </Wrapper>
    )
} 
const Wrapper = styled.form`
    width: 50%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    background: ${({background}:Background) =>  background };
    @media (max-width: 1080px) {
        width: 80%;
    }
    
    
      
`