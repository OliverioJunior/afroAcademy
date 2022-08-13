import { Header, Menu } from "./components";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #381C59;
    display: flex;
    align-items: center;
    flex-direction: column;
`

function App() {


  return (
    <Container>
      <Header/>
      <Menu/>
    </Container>
  )
}

export default App
