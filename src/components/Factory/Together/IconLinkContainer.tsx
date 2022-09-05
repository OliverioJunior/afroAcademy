import styled from "styled-components"
import { ChildrenReactNode } from "../../../types/childrenReactNode"
export default function IconLinkContainer({children}:ChildrenReactNode<undefined>) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: var(--color-primary);
        section{
            width: 60%;
        }
        div{
            width: 80px;
            height: 40px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                width: 24px;
                height: 24px;
                fill:var(--color-primary);
            }
        }
    }
`