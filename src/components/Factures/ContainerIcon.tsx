import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
const Wrapper = styled.div`
    width: 72px;
    height: 72px;
    display: flex;
    flex-direction: column;
    transform: translate(0px, 0px);
    svg{
    
    }
`
export default function ContainerIcon({children }:ChildrenReactNode) {
   
 return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 