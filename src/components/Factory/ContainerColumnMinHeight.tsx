import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
const Wrapper = styled.div`
    display: block;
`
export default function ContainerColumnMinHeight({children}:ChildrenReactNode<undefined>) {
  
 return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 