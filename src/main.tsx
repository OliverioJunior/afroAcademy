import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import { AfroTodo } from './components'
import { AuthProvider } from './context/auth'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path= "/" element= {<App/>} />
          <Route path= "/AfroTodo" element= {<AfroTodo/>} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
)
