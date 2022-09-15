import { ContainerMain, Header, ContainerForm, NoTask, ContainerAfroNoTask, ContainerTask, ListTask, ContainerInput, ContainerDivList, ContainerUlTask, ContainerDivUlTask} from "../components"
import { ADICIONAR } from "../assets/svg/svg";
import { useEffect, useRef, useState  } from 'react'
import Vector from '../assets/svg/Vector.svg'
type TaskType = {
  id:number; 
  task: string; 
  check: boolean; 
  done:string; 
  today:string
}
function AfroTodo() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [check, setCheck] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null!)
  const inputDataRef = useRef<HTMLInputElement>(null!)
  useEffect(()=>{
    const data = inputDataRef.current
   /*  data.addEventListener('keypress', ()=>{
      if(data.value.length < 10){
        let da = data.value.replace(/[a-z]/ig, data.value.slice(0, -1))
        data.value = da
      } else {
        data.value = data.value.slice(0, -1)
      }
    }) */
  })
  function formataData(){
    const data = inputDataRef.current
    const day = data.value.substring(8)
    const mon = data.value.substring(5,7)
    const year = data.value.substring(0,4)
    return `${day}/${mon}/${year}`
    
  }
  function addTask(){
    const input = inputRef.current
    const data = inputDataRef.current
    if(!input.value || data.value.length === 0){
      input.placeholder = 'Nenhuma atividade escrita'
      input.style.border = '1px solid #FE5F55'
    }else{
      setTasks([...tasks, {
        id: tasks.length,
        task: input.value,
        check: false,
        done: formataData(),
        today:`até ${formataData()}`
      }])
      input.placeholder = 'Insira uma nova atividade'
      input.style.border = '1px solid #C8E6D2'
      input.value = ''
      input.focus()
    }
  }
  function checkTask(id:number){
    tasks.map(item => {
      if(item.id === id){
        setCheck(check + 1);
        item.check = true
      }
    })
  }
  function deleteCheckTask(id:number){
    tasks.map(item => {
      if(item.id === id){
        setCheck(check - 1);
        item.check = false
      }
    })
  }
  const deleteTask = (id:number) =>{
   tasks.map(item => {
    if(item.id === id){
      if(item.check){ return setCheck(check - 1), setTasks(tasks.filter(item => item.id !== id))}
      if(!item.check){ return setTasks(tasks.filter(item => item.id !== id))}
    }
  }) 
  
  }
  return (
     <ContainerMain>
        <Header value="center" colors="var(--color-quinary)">
          <img src={Vector} alt='icon check'/><h1 onClick={() => window.scroll({top:0, behavior: "smooth"})}>AfroToDo</h1>
        </Header>
        <ContainerAfroNoTask>
          <ContainerForm >
            <ContainerInput>
              <input ref={inputRef} required type='text' placeholder='Insira uma nova atividade' />
            </ContainerInput>
            <ContainerInput>
              <input ref={inputDataRef} type='date'required />
              <button type="submit" onClick={(e)=> {e.preventDefault(); addTask()}}>{ADICIONAR}</button>
            </ContainerInput>
          </ContainerForm>
          {
            tasks.length ?  
            <ContainerTask>
              <ContainerDivList>
                <ContainerUlTask>
                  <ContainerDivUlTask>
                    <p>Tarefas concluídas</p><span> {check} de {tasks.length}</span>
                  </ContainerDivUlTask>
                  {tasks.map(({id,task, done, today}) => <ListTask
                  check={(e)=> e.target.checked ? checkTask(id) : deleteCheckTask(id)} 
                  key={id} 
                  task={task}
                  done={done}
                  today={today}
                  Delete={()=>{return deleteTask(id);}}
                  />)}
                </ContainerUlTask>
              </ContainerDivList>
            </ContainerTask> 
          : <NoTask/>
          }
         
       
        </ContainerAfroNoTask>
      </ContainerMain>



  )
}


export default AfroTodo;