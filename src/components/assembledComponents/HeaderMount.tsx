import ContainerMinContent from "../Factures/ContainerMinContent";
import H1 from "../Factures/H1";
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
            <H1 h1={headerName}/>
          </ContainerMinContent>
          <ContainerMinContent>
            {headerList.map((item) => <List key={item.id} text={item.text}/>)}
          </ContainerMinContent>
      </Header>
    )
}