import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditarSolicitacao() {
    const [detalhes, setDetalhes] = useState('');

  // Exemplo de dados de solicitações
  const [solicitacoes, setSolicitacoes] = useState([
  

    {
      id: 1,
      data: '25/11/2024',
      horario: '14:00 - 16:00',
      espaco: 'Sala de Aula 102',
      status: 'Aprovada'
    },
    {
      id: 2,
      data: '30/11/2024',
      horario: '10:00 - 12:00',
      espaco: 'Laboratório',
      status: 'Pendente'
    },

    {
      id: 3,
      data: '30/11/2024',
      horario: '10:00 - 12:00',
      espaco: 'Laboratório',
      status: 'Pendente'
    }
  ]);

  // Estado para a solicitação sendo editada
  const [solicitacaoEditada, setSolicitacaoEditada] = useState(null);

  // Função para lidar com o clique de editar
  const editarSolicitacao = (solicitacao) => {
    setSolicitacaoEditada(solicitacao);
  };

  // Função para salvar a solicitação editada
  const salvarSolicitacao = () => {
    setSolicitacoes(solicitacoes.map(s => 
      s.id === solicitacaoEditada.id ? solicitacaoEditada : s
    ));
    setSolicitacaoEditada(null); // Volta para a lista de solicitações após salvar
  };

  return (
    <div className="container mt-5">
      <h2>Editar Solicitações Existentes</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">Suas Solicitações</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {solicitacoes.map((solicitacao) => (
                  <li key={solicitacao.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Data:</strong> {solicitacao.data} <br />
                      <strong>Horário:</strong> {solicitacao.horario} <br />
                      <strong>Espaço:</strong> {solicitacao.espaco} <br />
                      <strong>Status:</strong> {solicitacao.status}
                    </div>
                    <button 
                      className="btn btn-warning btn-sm"
                      onClick={() => editarSolicitacao(solicitacao)}
                    >
                      Editar
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {solicitacaoEditada && (
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">Editar Solicitação</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="data" className="form-label">Data</label>
                    <input 
                      type="date" 
                      id="data"
                      className="form-control"
                      value={solicitacaoEditada.data}
                      onChange={(e) => setSolicitacaoEditada({...solicitacaoEditada, data: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="horario" className="form-label">Horário</label>
                    <input 
                      type="text" 
                      id="horario"
                      className="form-control"
                      value={solicitacaoEditada.horario}
                      onChange={(e) => setSolicitacaoEditada({...solicitacaoEditada, horario: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="espaco" className="form-label">Espaço</label>
                    <input 
                      type="text" 
                      id="espaco"
                      className="form-control"
                      value={solicitacaoEditada.espaco}
                      onChange={(e) => setSolicitacaoEditada({...solicitacaoEditada, espaco: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="detalhes" className="form-label">Detalhes Adicionais</label>
                  <textarea
                    id="detalhes"
                    className="form-control"
                    rows="3"
                    value={detalhes}
                    onChange={(e) => setDetalhes(e.target.value)}
                    placeholder="Informe o motivo da edição"
                  ></textarea>
                </div>

                  <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={salvarSolicitacao}
                  >
                    Salvar Alterações
                  </button>

                  <button type="button" className="btn btn-secondary " onClick={() => window.history.back()}>
                    Voltar
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditarSolicitacao;
