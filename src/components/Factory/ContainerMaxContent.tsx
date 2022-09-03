import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
type Background = {
    background?: string
}
const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    margin: 50px;
    background: ${({background}:Background) =>  background };
`

export default function ContainerMaxContent({children, background}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper background={background}>
            {children}
        </Wrapper>
    )
} 