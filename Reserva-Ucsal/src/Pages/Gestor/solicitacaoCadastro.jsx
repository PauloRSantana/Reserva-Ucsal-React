import { Link } from "react-router-dom";

function SolicitacoesCadastro() {
  // Simulação de dados de solicitações
  const solicitacoes = [
    { id: 1, nome: "João Silva", email: "joao.silva@email.com", data: "15/11/2024" },
    { id: 2, nome: "Maria Souza", email: "maria.souza@email.com", data: "16/11/2024" },
    { id: 3, nome: "Carlos Oliveira", email: "carlos.oliveira@email.com", data: "18/11/2024" },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header text-center">
              <h4>Solicitações de Cadastro de Professores</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Data de Solicitação</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {solicitacoes.map((solicitacao) => (
                    <tr key={solicitacao.id}>
                      <td>{solicitacao.id}</td>
                      <td>{solicitacao.nome}</td>
                      <td>{solicitacao.email}</td>
                      <td>{solicitacao.data}</td>
                      <td>
                        <button className="btn btn-success btn-sm me-2">
                          Aprovar
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Rejeitar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center">
              <Link to="/gestor" className="btn btn-secondary">
                Voltar à Tela do Gestor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolicitacoesCadastro;
