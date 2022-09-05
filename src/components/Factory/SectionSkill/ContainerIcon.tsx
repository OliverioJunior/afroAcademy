import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.div`
    width: 72px;
    height: 72px;
    display: flex;
    flex-direction: column;
    position: relative;
    svg{
        position: absolute;
        width: 72px;
        height: 72px;
        transform: translate(100px, 200px);
    }
`
export default function ContainerIcon({children }:ChildrenReactNode<undefined>) {
   
 return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 