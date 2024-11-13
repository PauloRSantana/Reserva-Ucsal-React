import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import 'bootstrap/dist/css/bootstrap.min.css';
import BoasVindas from './Pages/BoasVindas';
import TelaProfessor from './Pages/Professor';
import CriarSolicitacao from './Pages/Solicitacoes';
import EditarSolicitacao from './Pages/EditarSolicitacao';
import VerDisponibilidade from './Pages/Disponibilidade';
import TelaGestor from './Pages/Gestor';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<BoasVindas/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/professor' element={<TelaProfessor/>}/>
      <Route path='/solicitacoes' element={<CriarSolicitacao/>}/>
      <Route path='/editar' element={<EditarSolicitacao/>}/>
      <Route path='/disponibilidade' element={<VerDisponibilidade/>}/>
      <Route path='/gestor' element={<TelaGestor/>}/>




      <Route path='*' element={<h1>Not Found 404</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
