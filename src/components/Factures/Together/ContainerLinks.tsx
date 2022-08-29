import styled from "styled-components"
import { ChildrenReactNode } from "../../../types/childrenReactNode"

export default function ContainerLinks({children}:ChildrenReactNode) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 48px;
    margin: 30px;
    padding-right: 80px;
    display: flex;
    justify-content: space-between;
@media(max-width: 858px) {
    width: 100%;
    flex-wrap: wrap;
 }
`