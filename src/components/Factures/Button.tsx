import styled from "styled-components";
import { ButtonTypes } from "../../types/ButtonTypes";
import { Link } from 'react-router-dom'

export default function Button({text , onClick, link}:ButtonTypes) {
    return(
        <Wrapper onClick={onClick}>
            <Link to={link}>
                <Text>
                    {text}
                </Text>
            </Link>
            
        </Wrapper>
    )
} 
const Wrapper = styled.div`
    width: 268px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-tertiary);
    border-radius: 8px;
    cursor: pointer;
    a{
        text-decoration: none;
    }
    @media(max-width: 858px) {
        width: 84%;
     }
    
`
const Text = styled.p`
    color: var(--color-primary);
    font-size: 16px;
    font-weight: 500;
`