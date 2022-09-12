import { Ref } from "react";
import styled from "styled-components";
import { TRASHCAN } from "../../../assets/svg/svg";
type ListTask = {
    task: string;
    Delete: ()=> void;
    check: (e:any) => void;
}
export default function ListTask({task, Delete, check} : ListTask) {
    return (
        <Li>
            <label htmlFor="input">
                <input onClick={check} type='checkbox' />
            </label>
            <p>{task}</p>
            <button onClick={Delete}>{TRASHCAN}</button>
        </Li>
    )
}

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 16px;
    gap: 16px;
    border: 1px solid #C8E6D2;
    border-radius: 8px;
    margin: 5px 0;
    input{
        cursor: pointer;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 10px;
        width: 32px;
        height: 32px;
        fill:  #4F4F4F;
        background: #F1F7ED;
        border-radius: 8px;
        border:none; 
        cursor: pointer;
        svg{
            &:hover{
                fill: #FE5F55;
            }
        }
    }
`