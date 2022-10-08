import { HashRouter , Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/auth';
import Welcome from '../pages/Welcome';


function Router() {
  
  return (
  <AuthProvider>
    <HashRouter>
      <Routes>
        <Route path= "/" element= {<Welcome/>} />
      </Routes>
    </HashRouter>
  </AuthProvider>
      
    )
}

export default Router;
