import styled from "styled-components";
import { ChildrenReactNode } from "../../../types/childrenReactNode";
const Wrapper = styled.div`
    width:  248px;
    height: 248px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function ContainerSkillItens({children}:ChildrenReactNode) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
} 