import { Link } from 'react-router-dom'; 


function TelaGestor() {
  return (
    <div className="container mt-5">
      <h3>Seja bem-vindo, Gestor!</h3>
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
                </li>
                <li className="list-group-item">
                  <strong>Data:</strong> 30/11/2024 <br />
                  <strong>Horário:</strong> 10:00 - 12:00 <br />
                  <strong>Espaço:</strong> Laboratório <br />
                </li>
              </ul>
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

                <Link to="/ajustar-disponibilidade" className="button" class="btn btn-primary mb-1">
                  Ajustar Disponibilidade das Salas
                </Link>

                <Link to="/solicitacao-reserva" className="btn btn-warning mb-1">
                  Aceitar/Recusar Solicitações de Reservas
                </Link>

                <Link to="/solicitacaocad" className="btn btn-success">
                  Visualizar Solicitações de Cadastro de Professores
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="row">
        {/* MANUTENÇÃO!!! (vai ser criada uma página para enviar informaçöes para o suporte) */}
        <div className="col-md-12">
          <a href="#" className="btn btn-info">
            Precisa de ajuda? Acesse o Suporte
          </a>
        </div>
      </div>
    </div>
  );
}

export default TelaGestor;
