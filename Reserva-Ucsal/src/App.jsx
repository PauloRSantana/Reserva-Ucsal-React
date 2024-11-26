import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Principais/Login'
import Cadastro from './Pages/Principais/Cadastro'
import 'bootstrap/dist/css/bootstrap.min.css';
import BoasVindas from './Pages/Principais/BoasVindas';
import TelaProfessor from './Pages/Professor/Professor';
import CriarSolicitacao from './Pages/Professor/criarSolicitacao';
import EditarSolicitacao from './Pages/Professor/editarSolicitacao';
import VerDisponibilidade from './Pages/Professor/verDisponibilidade';
import TelaGestor from './Pages/Gestor/Gestor';
import SolicitacoesCadastro from './Pages/Gestor/solicitacaoCadastro';
import AjustarDisponibilidade from './Pages/Gestor/ajustarDisponibilidade';
import SolicitarReservas from './Pages/Gestor/solicitacaoReservas';


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
      <Route path='/solicitacaocad' element={<SolicitacoesCadastro/>}/>
      <Route path='/ajustar-disponibilidade' element={<AjustarDisponibilidade/>}/>
      <Route path='/solicitacao-reserva' element={<SolicitarReservas/>}/>




      <Route path='*' element={<h1>Not Found 404</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
