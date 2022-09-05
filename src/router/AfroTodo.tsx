import { ContainerMain, Header, ContainerMainScreenWidth, ContainerForm } from "../components"
import { ADICIONAR } from "../assets/svg/svg";
import Vector from '../assets/svg/Vector.svg'

function AfroTodo() {
  
  return (
     <ContainerMain>
        <Header value="center" colors="var(--color-quinary)">
          <img src={Vector} alt='icon check'/><h1>AfroToDo</h1>
        </Header>
        <ContainerMainScreenWidth colors="#EFF1F3">
          <ContainerForm>
            <div>
              <input type='text' placeholder='Insira uma nova atividade' />
              <button onClick={(e)=> console.log(e.target)}>{ADICIONAR}</button>
            </div>
          </ContainerForm>
        </ContainerMainScreenWidth>
      </ContainerMain>



  )
}

export default AfroTodo;