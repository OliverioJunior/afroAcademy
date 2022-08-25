import { ContainerMyTechs, Line, HeaderMyTechs, SkillItens } from "..";

export default function Mytechs(){
    return(
        <ContainerMyTechs>
            <HeaderMyTechs 
             text="Minhas"
             span="techs"    
            />
            <SkillItens />
            <Line />
        </ContainerMyTechs>
    )
}