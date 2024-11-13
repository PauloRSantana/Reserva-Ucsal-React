import { Link } from 'react-router-dom'; 


function TelaGestor() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Visualizar Professores Solicitando Cadastro */}
        
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Professores Solicitando Cadastro</h5>
            </div>

            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Professor:</strong> João Silva <br />
                  <strong>Data Solicitação:</strong> 15/11/2024
                </li>
                <li className="list-group-item">
                  <strong>Professor:</strong> Maria Souza <br />
                  <strong>Data Solicitação:</strong> 16/11/2024
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <Link to="/cadastro-professores" className="btn btn-primary">
                Ver Todos os Pedidos
              </Link>
            </div>
          </div>
        </div>

        {/* Ajustar Disponibilidade das Salas */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Ajustar Disponibilidade das Salas</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Espaço:</strong> Sala de Aula 101 <br />
                  <strong>Status:</strong> Disponível
                </li>
                <li className="list-group-item">
                  <strong>Espaço:</strong> Laboratório 3 <br />
                  <strong>Status:</strong> Indisponível (Manutenção)
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <Link to="/ajustar-disponibilidade" className="btn btn-warning">
                Ajustar Disponibilidade
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Solicitações de Reserva */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Solicitações de Reservas</h5>
            </div>
            
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Data:</strong> 25/11/2024 <br />
                  <strong>Horário:</strong> 14:00 - 16:00 <br />
                  <strong>Espaço:</strong> Sala de Aula 102 <br />
                  <button className="btn btn-success btn-sm mt-2">Aceitar</button>
                  <button className="btn btn-danger btn-sm mt-2 ms-2">Recusar</button>
                </li>
                <li className="list-group-item">
                  <strong>Data:</strong> 30/11/2024 <br />
                  <strong>Horário:</strong> 10:00 - 12:00 <br />
                  <strong>Espaço:</strong> Laboratório <br />
                  <button className="btn btn-success btn-sm mt-2">Aceitar</button>
                  <button className="btn btn-danger btn-sm mt-2 ms-2">Recusar</button>
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <Link to="/reservas" className="btn btn-primary">
                Ver Todas as Solicitações
              </Link>
            </div>
          </div>
        </div>

        {/* Ações Rápidas para Gestores */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Ações Rápidas</h5>
            </div>
            <div className="card-body">
              <div className="list-group">

                <Link to="/ajustar-disponibilidade" className="list-group-item list-group-item-action">
                  Ajustar Disponibilidade das Salas
                </Link>

                <Link to="/aceitar-solicitacoes" className="list-group-item list-group-item-action">
                  Aceitar/Recusar Solicitações de Reservas
                </Link>

                <Link to="/cadastro-professores" className="list-group-item list-group-item-action">
                  Visualizar Solicitações de Cadastro de Professores
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="row">
        {/* MANUTENÇÃO!!! (vai ser criada uma página para enviar informaçöes para o suporte) */}
        <div className="col-md-12 text-center">
          <a href="#" className="btn btn-info">
            Precisa de ajuda? Acesse o Suporte
          </a>
        </div>
      </div>
    </div>
  );
}

export default TelaGestor;
