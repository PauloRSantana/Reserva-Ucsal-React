import { useState } from "react";
import { Link } from "react-router-dom";

function AjustarDisponibilidade() {
  // Dados simulados das salas
  const [salas, setSalas] = useState([
    { id: 1, nome: "Sala de Aula 101", status: "Disponível", observacao: "" },
    { id: 2, nome: "Laboratório 3", status: "Indisponível", observacao: "Em manutenção" },
    { id: 3, nome: "Sala de Aula 202", status: "Disponível", observacao: "" },
  ]);

  // Função para alterar o status da sala
  const alterarStatus = (id) => {
    const novasSalas = salas.map((sala) =>
      sala.id === id
        ? {
            ...sala,
            status: sala.status === "Disponível" ? "Indisponível" : "Disponível",
            observacao: sala.status === "Disponível" ? "Em manutenção" : "",
          }
        : sala
    );
    setSalas(novasSalas);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header text-center">
              <h4>Ajustar Disponibilidade das Salas</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome da Sala</th>
                    <th>Status</th>
                    <th>Observação</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {salas.map((sala) => (
                    <tr key={sala.id}>
                      <td>{sala.id}</td>
                      <td>{sala.nome}</td>
                      <td>
                        <span
                          className={
                            sala.status === "Disponível"
                              ? "badge bg-success"
                              : "badge bg-danger"
                          }
                        >
                          {sala.status}
                        </span>
                      </td>
                      <td>{sala.observacao || "Nenhuma"}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => alterarStatus(sala.id)}
                        >
                          Alterar Status
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

export default AjustarDisponibilidade;
