import { ContainerNoTask } from "../..";
import NoItem from '../../../assets/svg/noItem.svg'

export default function NoTask() {
    return(
        <ContainerNoTask>
        <img src={NoItem}/>
        <p>
          <strong>
            Você não tem nenhuma tarefa no momento.
          </strong>
        </p>
        <p>Adicione novas tarefas para que elas sejam mostradas.</p>
      </ContainerNoTask>
    )
} 