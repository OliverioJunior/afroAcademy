import { ContainerMain, Header, ContainerMainScreenWidth } from "../components"
import Vector from '../assets/svg/Vector.svg'

function AfroTodo() {
  
  return (
     <ContainerMain>
        <Header value="center" colors="var(--color-quinary)">
          <img src={Vector} alt='icon check'/><h1>AfroToDo</h1>
        </Header>
        <ContainerMainScreenWidth colors="#EFF1F3">
          <div>
            <label>
              <input></input>
              <button></button>
            </label>
          </div>
        </ContainerMainScreenWidth>
      </ContainerMain>


  )
}

export default AfroTodo;