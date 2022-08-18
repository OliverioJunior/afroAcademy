import styled from "styled-components";
const ContainerList = styled.div`
    width: min-content;
    height: min-content;
    display: flex;
    margin: 10px;
    user-select: none;  
    li{
        list-style: none;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
    }
`
type Li = {
    text: string;
}
export default function List({text}:Li) {
    return(
        <ContainerList>
            <li>
                {text}
             </li>
        </ContainerList>
    )
} 