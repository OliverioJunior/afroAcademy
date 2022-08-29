import { ContainerMyTechs, Line, HeaderMyTechs, ContainerTogether, ContainerLinks, WrapperLinks } from "..";
import { GITHUB,GMAIL, WHATS,LINKEDIN } from "../../assets/svg/svg";
export default function Together(){
    const redes = [{
        id: 1,
        icon: WHATS,
        title: ' (79) 99682-4092'
    },{
        id:2,
        icon: LINKEDIN,
        title: 'in/olivério-júnior'
    },{
        id:3,
        icon: GITHUB,
        title: 'OliverioJunior'
    },{
        id:4,
        icon:GMAIL,
        title: 'oliverio.junior2'
    }]
    return(
        <ContainerMyTechs>
            <div>
                <HeaderMyTechs 
                text="Vamos trabalhar"
                span="juntos" 
                />
                <ContainerTogether/>
            </div>
            <ContainerLinks>
               
                  {redes.map((item)=>{
                    return(
                        <WrapperLinks key={item.id}>
                            <div >
                                <div>
                                    <i>
                                    {item.icon}
                                    </i>
                                </div>
                                <section>
                                    {item.title}
                                </section>
                            </div>
                        </WrapperLinks>
                    )
                  })}
                
            </ContainerLinks>   
            <Line />
        </ContainerMyTechs>
    )
}