import styled from "styled-components";
import { SquareTypes } from "../../types/SquareTypes";
    const Quadrate = styled.div`
    width: ${344}px;
    height: ${338}px;
    background-color: #000;
    filter: drop-shadow(8px 8px 10px gray);
    transform: rotate(6deg);
`
export default function Square({children}:SquareTypes) {
   
    return( 
    <Quadrate>
        {children}
    </Quadrate>
    )
} 