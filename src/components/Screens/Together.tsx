import { ContainerMyTechs, Line, HeaderMyTechs, ContainerTogether, ContainerButtonsLinks} from "..";

export default function Together(){

    return(
        <ContainerMyTechs>
            <div>
                <HeaderMyTechs 
                text="Vamos trabalhar"
                span="juntos" 
                />
                <ContainerTogether/>
            </div>
            <ContainerButtonsLinks/>
            <footer>
            Todos os direitos reservados a Olivério Júnior - 2022
            </footer>
        </ContainerMyTechs>
    )
}