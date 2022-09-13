import { Ref } from "react";
import styled from "styled-components";
import { TRASHCAN } from "../../../assets/svg/svg";
import taskDone from '../../../assets/svg/taskDone.svg';
import prazoTask from '../../../assets/svg/prazoTask.svg';
interface NewType {
    task: string;
    Delete: () => void;
    check: (e: any) => void;
}

type ListTask = NewType
export default function ListTask({task, Delete, check} : ListTask) {
    return (
        <Li>
            <ContainerLi>
                <label htmlFor="Check">
                    <input  id='Check' onClick={check} type='checkbox' />
                    <Check/>
                </label>
                <p>{task}</p>
            <DivButton>
                <button onClick={Delete}>{TRASHCAN}</button>
                <button onClick={Delete}>{TRASHCAN}</button>
            </DivButton>
            </ContainerLi>
            <ContainerData>
                <img src={taskDone}/><p>20/09/2022</p>
                <img src={prazoTask}/><p>20/09/2022</p>
            </ContainerData>
        </Li>


            

    )
}
const Check = styled.div`
    border: 2px solid #4f4f4f;
    border-radius: 4px;
    width: 18px;
    height: 18px;
    cursor: pointer;
`
const ContainerLi = styled.div`
    display: flex;
    width: 100%;
    p{
        width:70%;
    }
    input{
        display:none;
    }
`
const ContainerData = styled.div`
    display: flex;
    width: 100%;
    align-items:center;
    justify-content: flex-end;
    p{
        margin: 0 10px;
    }
`
const Li = styled.li`
    display: flex;
    flex-direction: column;
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
    
    
`
const DivButton = styled.div`
    width: 100px; 
    display:flex;
    align-items:center;
    justify-content: space-between;
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