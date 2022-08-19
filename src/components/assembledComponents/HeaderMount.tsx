import ContainerMinContent from "../Factures/ContainerMinContent";
import Paragraph from "../Factures/Paragraph";
import Header from "../Factures/Header";
import List from "../Factures/Lists";

export default function HeaderMount() {
    const headerName = `oliveriojunior`
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
    return(
        <Header>
          <ContainerMinContent>
            <Paragraph size={24} p={headerName} weight={600}/>
          </ContainerMinContent>
          <ContainerMinContent>
            {headerList.map((item) => <List key={item.id} text={item.text}/>)}
          </ContainerMinContent>
      </Header>
    )
}