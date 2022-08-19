import styled from "styled-components";
import { ButtonTypes } from "../../types/ButtonTypes";
const Wrapper = styled.div`
    width: 268px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4F3ACF;
    border-radius: 8px;
    cursor: pointer;
`
const Text = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
`
export default function Button({text , onClick}:ButtonTypes) {
    return(
        <Wrapper onClick={onClick}>
            <Text>
               {text}
            </Text>
        </Wrapper>
    )
} 
