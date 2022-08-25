import { ContainerMyTechs, Line, HeaderMyTechs, SkillItens } from "..";

export default function Together(){
    return(
        <ContainerMyTechs>
            <HeaderMyTechs 
             text="Vamos trabalhar"
             span="juntos" 
             phrase="Entre em contato comigo através das seguintes maneiras para que possamos fazer algo incrível juntos!"   
            />
            <Line />
        </ContainerMyTechs>
    )
}