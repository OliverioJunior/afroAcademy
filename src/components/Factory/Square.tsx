import styled from "styled-components";
import { SquareTypes } from "../../types/SquareTypes";
    const Quadrate = styled.div`
    width: ${344}px;
    height: ${338}px;
    background-color: var(--color-secundary);
    filter: drop-shadow(0px 5px 4px rgba(0,0,0,0.9));
    transform: rotate(6deg);
`
export default function Square({children}:SquareTypes) {
   
    return( 
    <Quadrate>
        {children}
    </Quadrate>
    )
} 