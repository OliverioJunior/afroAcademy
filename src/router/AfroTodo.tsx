import { ContainerMain, Header, ContainerForm, NoTask, ContainerAfroNoTask, ContainerTask} from "../components"
import { ADICIONAR, TRASHCAN } from "../assets/svg/svg";
import { useRef } from 'react'
import Vector from '../assets/svg/Vector.svg'
function AfroTodo() {
  const inputRef = useRef<HTMLInputElement>(null!)
  return (
     <ContainerMain>
        <Header value="center" colors="var(--color-quinary)">
          <img src={Vector} alt='icon check'/><h1>AfroToDo</h1>
        </Header>
        <ContainerAfroNoTask>
          <ContainerForm>
            <div>
              <input ref={inputRef} type='text' placeholder='Insira uma nova atividade' />
              <button onClick={(e)=> console.log(inputRef.current.value)}>{ADICIONAR}</button>
            </div>
          </ContainerForm>
          <ContainerTask>
            <ul>
              <div>
                <p>Tarefas concluídas</p><span>0 de 0</span>
              </div>
              <li>
                  <label htmlFor="">
                    <input type='checkbox'/>
                  </label>
                <p>ola</p>
                <button>{TRASHCAN}</button>
              </li>

            </ul>
          </ContainerTask>
          {/* <NoTask/> */}
        </ContainerAfroNoTask>
      </ContainerMain>



  )
}

export default AfroTodo;