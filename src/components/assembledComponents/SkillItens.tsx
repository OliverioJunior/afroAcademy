import {ContainerIcon, ContainerSkillItens, ContainerSkills} from ".."
import { HTML5, CSS3, JAVASCRIPT, REACT } from "../../assets/svg/svg";

export default function SkillItens(){
    const itens = [{
        id: 1,
        color: '#E44D26',
        text: "React Native",
        description: "É uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.",
        icon: HTML5,
      },{
        id: 2,
        color: '#264DE4',
        text: "Styled-Components",
        description: "Trata-se de uma biblioteca (lib) que nos permite escrever códigos CSS dentro do JavaScript.",
        icon: CSS3
      },{
        id: 3,
        color: '#F7DF1E',
        text: "Typescript",
        description: "É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
        icon: JAVASCRIPT
      },{
        id: 4,
        color: '#61DAFB',
        text: "ReactJs",
        description: "Uma biblioteca JavaScript para a criação de interfaces de usuário.",
        icon: REACT
      }
    ]
    return(
        <ContainerSkills>
            {itens.map((item)=>{
              return(
                <ContainerSkillItens
                key={item.id}>
                  <ContainerIcon>
                    {item.icon}
                  </ContainerIcon>
                  <div> 
                    <h2>
                      {`${item.text}`}
                    </h2>
                  </div> 
                  <p>
                    {item.description}
                  </p>
                    
                </ContainerSkillItens>
             )})}
          </ContainerSkills>
    )
}