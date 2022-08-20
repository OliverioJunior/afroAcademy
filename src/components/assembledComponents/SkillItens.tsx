import {ContainerIcon, ContainerRowAll, Paragraph, SectionHeader, Square} from ".."
import { HTML5, CSS3, JAVASCRIPT, REACT } from "../../assets/svg/svg";

export default function SkillItens(){
    const itens = [{
        id: 1,
        color: '#E44D26',
        text: "HTML5",
        description: "Uma linguagem de marcação poderosa para a criação de páginas web presente em todo o desenvolvimento de sites.",
        icon: HTML5,
      },{
        id: 2,
        color: '#264DE4',
        text: "CSS3",
        description: "Uma linguagem de estilo que permite a criação de páginas web com um design mais atraente e responsivo.",
        icon: CSS3
      },{
        id: 3,
        color: '#F7DF1E',
        text: "JavaScript",
        description: "Uma linguagem de programação que permite a criação de páginas web com um design mais atraente e responsivo.",
        icon: JAVASCRIPT
      },{
        id: 4,
        color: '#61DAFB',
        text: "React",
        description: "Uma biblioteca JavaScript para a criação de interfaces de usuário.",
        icon: REACT
      }
    ]
    return(
        <ContainerRowAll
            height={"auto"}
            width={"100%"}
          >
            {itens.map((item)=>{
              return(
                <ContainerRowAll
                  key={item.id}
                  height={"300px"}
                  width={"300px"}
                  margin="20px"
                >
                  <Square
                    color="var(--primary-color)"
                    height="300px"
                    width="300px"
                    borderRadius="16px"
                    padding="10px"
                    >
                      <ContainerIcon
                        color= {item.color}
                        height={"72px"}
                        width={"72px"}
                      >
                        {item.icon}
                      </ContainerIcon>
                      <SectionHeader
                        text={`${item.text}`}
                      />
                      <Paragraph
                        text={item.description}
                      />
                    </Square>
                </ContainerRowAll>
               
              )})}
            
                   

            </ContainerRowAll>
    )
}