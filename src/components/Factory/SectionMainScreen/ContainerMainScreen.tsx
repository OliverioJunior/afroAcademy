import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.section`
    width: 100vw;
    height: calc(100vh);
    display: flex;
    background: ${({color}) => color};
    @media(max-width: 858px) {
        justify-content: center;
     }
`

export default function ContainerMainScreenWidth({children, colors}:ChildrenReactNode<undefined>) {
    return(
        <Wrapper color={colors}>
            {children}
        </Wrapper>
    )
} 