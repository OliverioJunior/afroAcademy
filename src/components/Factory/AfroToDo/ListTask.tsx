import { Ref } from "react";
import styled from "styled-components";
import { TRASHCAN, EDIT } from "../../../assets/svg/svg";
import taskDone from '../../../assets/svg/taskDone.svg';
import prazoTask from '../../../assets/svg/prazoTask.svg';
interface NewType {
    task: string;
    Delete: () => void;
    check: (e: any) => void;
    done: string;
    today: string;
}
type ButtonType = {
    fill: string;
    padding: string;
}

type ListTask = NewType
export default function ListTask({task, Delete, check, done, today} : ListTask) {
    return (
        <Li>
            <ContainerLi>
                <DivLabel>
                    <label htmlFor="Check">
                        <input  id='Check' onClick={check} type='checkbox' />
                        <Check/>
                    </label>
                </DivLabel>
                <p>{task}</p>

            <DivButton>
                <Button padding='6px' fill='#70AE6E' onClick={Delete}>{EDIT}</Button>
                <Button padding='9px' fill='#FE5F55' onClick={Delete}>{TRASHCAN}</Button>
            </DivButton>
            </ContainerLi>
            <ContainerData>
                <ContainerImg>
                    <img src={taskDone}/><p>{done}</p>
                </ContainerImg>
                <img src={prazoTask}/><p>{today}</p>

            </ContainerData>
        </Li>


            

    )
}
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: ${({padding}:ButtonType)=> padding};
    width: 32px;
    height: 32px;
    fill:  #4F4F4F;
    background: #F1F7ED;
    border-radius: 8px;
    border:none; 
    cursor: pointer;
    margin: 0 0 0 10px;
    svg{
        &:hover{
            fill: ${({fill}:ButtonType)=> fill};
        }
    }


`
const Check = styled.div`
    border: 2px solid #4f4f4f;
    border-radius: 4px;
    width: 18px;
    height: 18px;
    cursor: pointer;
`
const ContainerLi = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    p{
        width:70%;
        margin: 7px 10px 0px 10px;
        word-break: break-word;
        text-align: justify;
    }
    input{
        display:none;
    }
    label{
        margin-right: 10px;
    }
`
const ContainerData = styled.div`
    display: flex;
    width: 100%;
    align-items:center;
    justify-content: flex-end;
    p{
        margin: 0 10px;
        color: #4F4F4F;
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
    width: 142px;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    
`
const ContainerImg = styled.div`
    display:none;
`
const DivLabel = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width: 32px;
    height: 32px;

`