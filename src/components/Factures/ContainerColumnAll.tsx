import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";

export default function ContainerColumnAll({children, height, padding,width, display}:ChildrenReactNode) {
    const Wrapper = styled.div`
    width: ${width};
    min-height: ${height};
    display: flex;
    flex-direction: column;
    padding: ${padding};
    box-sizing: border-box;
    @media (max-width: 1080px) {
        display: ${display};
    }
`
 return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 