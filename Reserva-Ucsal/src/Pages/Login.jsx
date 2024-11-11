import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="Login d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h1 className="text-center mb-4">Login</h1>
        <form>
          
          {/* Campo de login */}
          <div className="mb-3">
            <label htmlFor="login" className="form-label">Login</label>
            <input
              id="login"
              type="text"
              className="form-control"
              placeholder="Digite seu login"
              name="login"
              required
            />
          </div>

          {/* Campo de senha */}
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input
              id="senha"
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              name="senha"
              required
            />
          </div>

          {/* Botão Acessar */}
          <button type="submit" className="btn btn-primary w-100 mb-3">Acessar</button>

          {/* Link para cadastro */}
          <div className="text-center">
            <Link to="/cadastro" className="btn btn-outline-secondary w-100">Cadastre-se</Link>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
