import styled from "styled-components";
import { TextTypes } from "../../types/TextTypes";
const Wrapper = styled.h1`
    width: max-content;
    height: max-content;
    display: flex;
    user-select: none;
    span{
        color: var(--tertiary-color);
        padding-left: 10px;
    }
    @media (max-width: 1080px) {
        font-size: 24px;
    }
`
export default function SectionHeader({text}:TextTypes) {
   
    return(
        <Wrapper>
         {text}
        </Wrapper>
    )
} 