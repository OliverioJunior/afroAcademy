import { ContainerMyTechs, Line, HeaderMyTechs, SkillItens } from "..";

export default function Mytechs(){
    return(
        <ContainerMyTechs>
            <a href="/MyTech">
                <HeaderMyTechs 
                text="Minhas"
                span="techs"    
                />
            </a>

            <SkillItens />
            <Line />
        </ContainerMyTechs>
    )
}