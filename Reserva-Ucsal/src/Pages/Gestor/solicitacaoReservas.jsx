import { useState } from "react";
import { Link } from "react-router-dom";

function SolicitarReservas() {
  // Estado inicial com dados simulados das solicitações de reserva
  const [reservas, setReservas] = useState([
    {
      id: 1,
      data: "25/11/2024",
      horario: "14:00 - 16:00",
      espaco: "Sala de Aula 102",
      solicitante: "João Silva",
      status: "Pendente",
    },
    {
      id: 2,
      data: "30/11/2024",
      horario: "10:00 - 12:00",
      espaco: "Laboratório 3",
      solicitante: "Maria Souza",
      status: "Pendente",
    },
  ]);

  // Função para alterar o status de uma reserva
  const alterarStatus = (id, novoStatus) => {
    const novasReservas = reservas.map((reserva) =>
      reserva.id === id ? { ...reserva, status: novoStatus } : reserva
    );
    setReservas(novasReservas);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header text-center">
              <h4>Solicitações de Reservas</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Espaço</th>
                    <th>Solicitante</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {reservas.map((reserva) => (
                    <tr key={reserva.id}>
                      <td>{reserva.id}</td>
                      <td>{reserva.data}</td>
                      <td>{reserva.horario}</td>
                      <td>{reserva.espaco}</td>
                      <td>{reserva.solicitante}</td>
                      <td>
                        <span
                          className={
                            reserva.status === "Pendente"
                              ? "badge bg-warning"
                              : reserva.status === "Aceita"
                              ? "badge bg-success"
                              : "badge bg-danger"
                          }
                        >
                          {reserva.status}
                        </span>
                      </td>
                      <td>
                        {reserva.status === "Pendente" && (
                          <>
                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={() => alterarStatus(reserva.id, "Aceita")}
                            >
                              Aceitar
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                alterarStatus(reserva.id, "Recusada")
                              }
                            >
                              Recusar
                            </button>
                          </>
                        )}
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

export default SolicitarReservas;
