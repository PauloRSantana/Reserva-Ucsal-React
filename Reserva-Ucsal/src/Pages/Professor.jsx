import { Link } from 'react-router-dom'; // Importe o Link do React Router

function TelaProfessor() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Resumo das Próximas Reservas */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Próximas Reservas</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Data:</strong> 25/11/2024 <br />
                  <strong>Horário:</strong> 14:00 - 16:00 <br />
                  <strong>Espaço:</strong> Sala de Aula 102
                </li>
                <li className="list-group-item">
                  <strong>Data:</strong> 30/11/2024 <br />
                  <strong>Horário:</strong> 10:00 - 12:00 <br />
                  <strong>Espaço:</strong> Laboratório
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Status de Solicitações Pendentes */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Solicitações Pendentes</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Data:</strong> 20/12/2024 <br />
                  <strong>Status:</strong> Aguardando Aprovação <br />
                  <strong>Espaço:</strong> Auditório Principal
                </li>
                <li className="list-group-item">
                  <strong>Data:</strong> 15/01/2025 <br />
                  <strong>Status:</strong> Rejeitada <br />
                  <strong>Espaço:</strong> Sala de Reuniões 3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Notificações Recentes */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Notificações Recentes</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  Sua solicitação para o Auditório Principal foi aprovada!
                </li>
                <li className="list-group-item">
                  Solicitação para a Sala de Reuniões 3 foi rejeitada.
                </li>
                <li className="list-group-item">
                  Novas regras de uso para laboratórios implementadas.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Atalhos para Ações Comuns */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Ações Rápidas</h5>
            </div>
            <div className="card-body">
              <div className="list-group">
                {/* Alteração do <a> para <Link> */}
                <Link to="/solicitacoes" className="list-group-item list-group-item-action">
                  Criar nova solicitação
                </Link>
                <Link to="/editar" className="list-group-item list-group-item-action">
	              Editar solicitações existentes
                </Link>

                <Link to="/disponibilidade" className="list-group-item list-group-item-action">
                  Ver disponibilidade dos espaços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Dicas e Orientações de Uso */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Dicas de Uso</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  Lembre-se de enviar sua solicitação com 48 horas de antecedência.
                </li>
                <li className="list-group-item">
                  As solicitações para eventos maiores exigem aprovação adicional.
                </li>
                <li className="list-group-item">
                  Verifique a disponibilidade de espaços antes de enviar sua solicitação.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agenda Pessoal */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Agenda Pessoal</h5>
            </div>
            <div className="card-body">
              {/* Aqui você pode adicionar um componente de calendário */}
              <p>Visualização do calendário com suas atividades e reservas.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Mensagens Importantes ou Comunicados */}
        <div className="col-md-12 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Comunicados Importantes</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  Manutenção programada para o Auditório: 28/11/2024.
                </li>
                <li className="list-group-item">
                  Novas políticas de uso para salas de aula a partir de dezembro.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Link para Suporte */}
        <div className="col-md-12 text-center">
          <a href="#" className="btn btn-info">
            Precisa de ajuda? Acesse o Suporte
          </a>
        </div>
      </div>
    </div>
  );
}

export default TelaProfessor;
