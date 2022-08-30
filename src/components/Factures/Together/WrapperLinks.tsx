import styled from "styled-components"
import { ChildrenReactNode } from "../../../types/childrenReactNode"
type Colors= {
    colors?: string;
}
export default function WrapperLinks({children, colors}:ChildrenReactNode) {
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
    div{
        width:100%;
        text-align: center;
        color: white;
        display: flex;
        align-items: center;
        padding: 0 0 0 20px;
        section{
            padding: 0;
            overflow:hidden;
            width:500px;
            display: flex;
            align-items: center;
            height: 27px;
        }
        i{
            width: 25px;
            height: 27px;
            overflow: hidden;
            svg{
                fill: white;
            }
        }
        
    }
    
@media(max-width: 858px) {
    width: 100%;
    margin-top: 30px; 
 }
`