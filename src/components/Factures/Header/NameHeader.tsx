import styled from "styled-components";
import { TextTypes } from "../../../types/TextTypes";
const Wrapper = styled.p`
width: max-content;
height: max-content;
display: flex;
font-size: ${16}px;
font-weight: 400;
user-select: none;
`

export default function NameHeader({text}:TextTypes) {
   
    return(
        <Wrapper>
            {text}
        </Wrapper>
    )
} 