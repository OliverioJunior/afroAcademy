import { ContainerMyTechs, Line, HeaderMyTechs, SkillItens } from "..";
import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from "../../context/auth";
import styled from "styled-components";
export default function Mytechs(){
    const linkRef = useRef<HTMLAnchorElement>(null!);
    const { setOffSetTech}= useContext(AuthContext);
    useEffect(()=>{
        setOffSetTech(linkRef.current?.offsetTop)
    },[linkRef])
   
    return(
        <ContainerMyTechs>
            <Link href="#" ref={linkRef}>
                <HeaderMyTechs 
                text="Minhas"
                span="techs"    
                />
            </Link>
            <SkillItens />
            <Line />
        </ContainerMyTechs>
    )
}
const Link = styled.a`
    color: var(--color-secundary) !important;
`