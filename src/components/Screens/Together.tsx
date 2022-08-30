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
            <Line />
        </ContainerMyTechs>
    )
}