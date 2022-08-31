import styled from "styled-components";
import { TextTypes } from "../../types/TextTypes";
const ContainerList = styled.div`
    width: min-content;
    height: min-content;
    display: flex;
    margin: auto;
    user-select: none;  
    li{
        list-style: none;
        
        cursor: pointer;
        font-size: 16px;
    }
`
export default function List({text, innerRef}:TextTypes) {
    return(
        <ContainerList ref={innerRef}>
            <li>
                {text}
            </li>
        </ContainerList>
    )
} 