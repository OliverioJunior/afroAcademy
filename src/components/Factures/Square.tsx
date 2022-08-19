import styled from "styled-components";

export default function Square() {
    const Quadrate = styled.div`
    width: ${344}px;
    height: ${338}px;
    background-color: #000;
    filter: drop-shadow(8px 8px 10px gray);
    transform: rotate(6deg);
    `
    return( <Quadrate/>)
} 