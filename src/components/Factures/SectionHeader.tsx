import styled from "styled-components";
import { TextTypes } from "../../types/TextTypes";

export default function SectionHeader({text,size, weight, children}:TextTypes) {
    const Wrapper = styled.h1`
    width: max-content;
    height: max-content;
    display: flex;
    font-size: ${size}px;
    font-weight:${weight};
    user-select: none;
    span{
        color: var(--tertiary-color);
        padding-left: 10px;
    }
    @media (max-width: 1080px) {
        font-size: 24px;
    }
`
    return(
        <Wrapper>
         {text}
         {children}
        </Wrapper>
    )
} 