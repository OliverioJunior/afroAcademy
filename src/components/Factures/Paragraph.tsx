import styled from "styled-components";
import { TextTypes } from "../../types/TextTypes";


export default function Container({p,size, weight}:TextTypes) {
    const Wrapper = styled.p`
    width: max-content;
    height: max-content;
    display: flex;
    font-size: ${size}px;
    font-weight:${weight};
    user-select: none;
`
    return(
        <Wrapper>
            {p}
        </Wrapper>
    )
} 