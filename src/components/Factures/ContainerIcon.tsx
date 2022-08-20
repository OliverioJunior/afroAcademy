import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";

export default function ContainerIcon({children, color }:ChildrenReactNode) {
    const Wrapper = styled.div`
    width: 72px;
    height: 72px;
    display: flex;
    flex-direction: column;
    transform: translate(0px, 0px);
    svg{
        fill: ${color};
    }
`
 return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 