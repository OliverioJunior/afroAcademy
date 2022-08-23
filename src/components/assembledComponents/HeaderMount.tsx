import { ContainerMenu, List, Header, Paragraph, ContainerRowHeader } from "../index";

export default function HeaderMount() {
    const headerName = ` oliveriojunior `
    const headerList = [{
    id: 1,
    text: "Home"
  },
  {
    id: 2,
    text: "Techs"
  },
  {
    id: 3,
    text: "Contato"
  }
]
    const caracteres = ['< ', ' />']
    return(
        <Header>
          <ContainerRowHeader>
            <span>{caracteres[0]}</span>
              <Paragraph size={24} text={headerName} weight={600}/>
            <span>{caracteres[1]}</span>
          </ContainerRowHeader>
          <ContainerMenu>
            {headerList.map((item) => <List key={item.id} text={item.text}/>)}
          </ContainerMenu>
      </Header>
    )
}