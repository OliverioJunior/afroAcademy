import styled from "styled-components";
import { TextTypes } from "../types/TextTypes";
const Wrapper = styled.h1`
    width: min-content;
    height: min-content;
    display: flex;
    font-size: 12px;
`

export default function Container({h1}:TextTypes) {
    return(
        <Wrapper>
            {h1}
        </Wrapper>
    )
} 