import { ContainerMyTechs, Line, HeaderMyTechs, SkillItens } from "..";
import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from "../../context/auth";
export default function Mytechs(){
    const linkRef = useRef<HTMLAnchorElement>(null!);
    const { setOffSetTech}= useContext(AuthContext);
    useEffect(()=>{
        setOffSetTech(linkRef.current?.offsetTop)
    },[linkRef])
   
    return(
        <ContainerMyTechs>
            <a href="#" ref={linkRef}>
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