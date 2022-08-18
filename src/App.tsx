import { Header, Menu, ContainerBody, ContainerMinContent, H1, List } from "./components";

function App() {
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
  return (
    <ContainerBody>
      <Header>
          <ContainerMinContent>
            <H1 h1={headerName}/>
          </ContainerMinContent>
          <ContainerMinContent>
            {headerList.map((item) => <List key={item.id} text={item.text}/>)}
          </ContainerMinContent>
      </Header>
      <Menu/>
    </ContainerBody>
  )
}

export default App
