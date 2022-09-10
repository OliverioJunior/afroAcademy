import { ContainerMain, Header, ContainerForm, NoTask, ContainerAfroNoTask, ContainerTask, ListTask} from "../components"
import { ADICIONAR } from "../assets/svg/svg";
import { useRef, useState  } from 'react'
import Vector from '../assets/svg/Vector.svg'

function AfroTodo() {
  const [tasks, setTasks] = useState<{ id:number; task: string;}[]>([])
  const [check, setCheck] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null!)
  function addTask(){
    const input = inputRef.current
    if(!input.value){
      input.placeholder = 'Nenhuma atividade escrita'
      input.style.border = '1px solid #FE5F55'
    }else{
      setTasks([...tasks, {
        id: tasks.length,
        task: input.value
      }])
      input.placeholder = 'Insira uma nova atividade'
      input.style.border = '1px solid #C8E6D2'
      input.value = ''
      input.focus()
    }
  }

  return (
     <ContainerMain>
        <Header value="center" colors="var(--color-quinary)">
          <img src={Vector} alt='icon check'/><h1 onClick={() => window.scroll({top:0, behavior: "smooth"})}>AfroToDo</h1>
        </Header>
        <ContainerAfroNoTask>
          <ContainerForm>
            <div>
              <input ref={inputRef} type='text' placeholder='Insira uma nova atividade' />
              <button onClick={(e)=> {e.preventDefault(); addTask()}}>{ADICIONAR}</button>
            </div>
          </ContainerForm>
          {
            tasks.length !== 0 ?  <ContainerTask>
              <div>
                <ul>
                  <div>
                    <p>Tarefas concluídas</p><span> {check} de {tasks.length}</span>
                  </div>
                  {tasks.map(({id,task}) => <ListTask
                  check={(e)=> e.target.checked ? setCheck(check + 1) : setCheck(check - 1)} 
                  key={id} 
                  task={task}
                  Delete={()=> {setTasks(tasks.filter(item => item.id !== id))}}
                  />)}
                </ul>
              </div>

          </ContainerTask> : <NoTask/>
          }
         
       
        </ContainerAfroNoTask>
      </ContainerMain>



  )
}

export default AfroTodo;