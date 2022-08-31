import { ContainerMain , Main, Mytechs, Together } from "./components";
import { AuthProvider } from "./context/auth";
function App() {
  
  return (
    <AuthProvider>
      <ContainerMain>
        <Main/>
        <Mytechs/>
        <Together/>
      </ContainerMain>
    </AuthProvider>

  )
}

export default App
