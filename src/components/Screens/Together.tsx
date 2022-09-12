import { useContext, useRef } from "react";
import { ContainerMyTechs, Line, HeaderMyTechs, ContainerTogether, ContainerButtonsLinks} from "..";
import { AuthContext } from "../../context/auth";

export default function Together(){
    const linkRef = useRef<HTMLDivElement>(null!);
    const { setOffSetContact }= useContext(AuthContext);
    setOffSetContact(linkRef.current?.offsetTop)
    return(
        <ContainerMyTechs>
            <div ref={linkRef}>
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