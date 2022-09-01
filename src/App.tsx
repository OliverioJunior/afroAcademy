import { Welcome } from "./components";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path= "/" element= {<Welcome/>} />
      </Routes>
    </Router>


  )
}

export default App
