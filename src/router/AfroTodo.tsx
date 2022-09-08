import { ContainerMain, Header, ContainerMainScreenWidth, ContainerForm, NoTask } from "../components"
import { ADICIONAR } from "../assets/svg/svg";
import { useRef } from 'react'
import Vector from '../assets/svg/Vector.svg'
function AfroTodo() {
  const inputRef = useRef<HTMLInputElement>(null!)
  return (
     <ContainerMain>
        <Header value="center" colors="var(--color-quinary)">
          <img src={Vector} alt='icon check'/><h1>AfroToDo</h1>
        </Header>
        <ContainerMainScreenWidth colors="#EFF1F3">
          <ContainerForm>
            <div>
              <input ref={inputRef} type='text' placeholder='Insira uma nova atividade' />
              <button onClick={(e)=> console.log(inputRef.current.value)}>{ADICIONAR}</button>
            </div>
          </ContainerForm>
          <NoTask/>
        </ContainerMainScreenWidth>
      </ContainerMain>



  )
}

export default AfroTodo;