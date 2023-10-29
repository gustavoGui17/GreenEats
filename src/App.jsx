import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/loginForms/Login'
import LoginForms from './components/loginForms/LoginForms'
import Cadastro from './components/cadastro/Cadastro'

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
          <Routes>
           <Route path='Login' element={<Login />} />
           <Route path='LoginForms' element={<LoginForms />} />
           <Route path='Cadastro' element={<Cadastro/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
