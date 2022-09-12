import { ContainerMenu, List, Header, ContainerRowHeader, NameHeader } from "../index";
import { useRef, useLayoutEffect, useContext} from "react";
import { AuthContext } from "../../context/auth";

export default function HeaderMount() {
    const headerName = ` oliveriojunior `
    const { OffSetTech }= useContext(AuthContext);
    const { OffSetContact }= useContext(AuthContext);
    const listRef = [useRef<HTMLDivElement>(null!),useRef<HTMLDivElement>(null!),useRef<HTMLDivElement>(null!)]
    const headerList = [{
    id: 1,
    text: "Home",
    listRef: listRef[0]   
  },
  {
    id: 2,
    text: "Techs",
    listRef: listRef[1]   
  },
  {
    id: 3,
    text: "Contato",
    listRef: listRef[2]   
  }
  
]
    const caracteres = ['< ', ' />']
   
    useLayoutEffect(()=>{
        const listHome = listRef[0].current
        const listTechs = listRef[1].current
        const listContact = listRef[2].current
        listHome.addEventListener('click', ()=>{
           window.scrollTo({
            top:0,
            behavior: "smooth"
           })
        })
        listTechs.addEventListener('click', ()=>{
          window.scrollTo({
            top: OffSetTech,
            behavior: "smooth"
           })
        })
        listContact.addEventListener('click', ()=>{
          window.scrollTo({
            top: OffSetContact,
            behavior: "smooth"
           })
        })
    })
    return(
        <Header>
          <ContainerRowHeader>
            <span>{caracteres[0]}</span>
              <NameHeader text={headerName}/>
            <span>{caracteres[1]}</span>
          </ContainerRowHeader>
          <ContainerMenu>
            {headerList.map((item) => <List innerRef={item.listRef} key={item.id} text={item.text}/>)}
          </ContainerMenu>
      </Header>
    )
}