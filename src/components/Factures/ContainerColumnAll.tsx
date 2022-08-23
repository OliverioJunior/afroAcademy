import styled from "styled-components";
import { ChildrenReactNode } from "../../types/childrenReactNode";
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    @media (max-width: 1080px) {
    
    }
    `
export default function ContainerColumnAll({children}:ChildrenReactNode) {
   
 return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 