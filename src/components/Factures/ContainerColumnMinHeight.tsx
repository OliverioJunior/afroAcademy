import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";

export default function ContainerColumnMinHeight({children, height, padding,width}:ChildrenReactNode) {
    const Wrapper = styled.div`
    width: ${width};
    min-height: ${height};
    display: block;
    padding: ${padding};
    box-sizing: border-box;
`
 return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 