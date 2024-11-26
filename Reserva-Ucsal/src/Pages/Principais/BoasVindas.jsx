import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function BoasVindas() {
  return (
    
    <div className="BoasVindas d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center card p-5 shadow-lg" style={{ width: '400px' }}>
        <h1 className="mb-4 text-primary">Bem-vindo ao RUCSal!</h1>
        <p className="mb-4 text-muted">Nosso sistema oferece a você um 
        meio simples e eficiente para gerenciar suas atividades acadêmicas e administrativas.</p>

        <div className="mb-4">
          <Link to="/login" className="btn btn-primary w-100 mb-4">
            Acessar conta
          </Link>
          
          <Link to="/cadastro" className="btn btn-secondary w-100">
            Criar uma conta
          </Link>
          
        </div>

        <p className="text-muted mt-3">
          Se já tem uma conta, clique em "Acessar conta". Caso contrário, clique em "Criar uma conta" para se cadastrar.
        </p>
      </div>
    </div>
  );
}

export default BoasVindas;
