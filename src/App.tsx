import { ContainerMain , Main, Mytechs, Together } from "./components";
import { AuthProvider } from "./context/auth";
function App() {
  
  return (
     <ContainerMain>
        <Main/>
        <Mytechs/>
        <Together/>
      </ContainerMain>

  )
}

export default App
