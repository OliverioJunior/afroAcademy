import styled from "styled-components"
import { ChildrenReactNode } from "../../../types/childrenReactNode"
type Colors= {
    colors?: string;
}
export default function WrapperLinks({children, colors}:ChildrenReactNode<undefined>) {
    return (
        <Container colors={colors}>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 272px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({colors}:Colors) => colors};
    overflow: hidden;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 2px;
@media(max-width: 858px) {
    width: 100%;
    margin-top: 30px; 
 }
`