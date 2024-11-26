import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página
    alert("Seja bem-vindo(a)!");
    navigate("/professor");
  };

  return (
    <div className="Login d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Login</h1>

        <form onSubmit={handleLogin}>
          {/* Campo de login */}
          <div className="mb-3">
            <label htmlFor="login" className="form-label">
              Login
            </label>
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
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              name="senha"
              required
            />
          </div>

          {/* Botão de acesso */}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Acessar
          </button>

          {/* Botão de cadastro */}
          <div className="text-center">
            <Link to="/cadastro" className="btn btn-outline-secondary w-100">
              Cadastre-se
            </Link>
          </div>
        </form>

        <p className="text-muted mt-4">
          Se você já realizou o login, mas ainda não consegue acessar, não se
          preocupe. Sua solicitação será enviada para um Gestor, que irá
          analisá-la em breve.
        </p>
      </div>
    </div>
  );
}

export default Login;
