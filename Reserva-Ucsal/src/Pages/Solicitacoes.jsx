import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CriarSolicitacao() {
  const [tipoEspaco, setTipoEspaco] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [detalhes, setDetalhes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar a solicitação
    alert('Solicitação enviada com sucesso!');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5>Criar Solicitação de Reserva</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Tipo de Espaço */}
                <div className="mb-3">
                  <label htmlFor="tipoEspaco" className="form-label">Tipo de Espaço</label>
                  <select
                    id="tipoEspaco"
                    className="form-select"
                    value={tipoEspaco}
                    onChange={(e) => setTipoEspaco(e.target.value)}
                    required
                  >
                    <option value="">Selecione o tipo de espaço</option>
                    <option value="Sala de Aula">Sala de Aula</option>
                    <option value="Laboratório">Laboratório</option>
                    <option value="Auditório">Auditório</option>
                    <option value="Sala de Reuniões">Sala de Reuniões</option>
                  </select>
                </div>

                {/* Data */}
                <div className="mb-3">
                  <label htmlFor="data" className="form-label">Data</label>
                  <input
                    id="data"
                    type="date"
                    className="form-control"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                  />
                </div>

                {/* Horário */}
                <div className="mb-3">
                  <label htmlFor="horario" className="form-label">Horário</label>
                  <input
                    id="horario"
                    type="time"
                    className="form-control"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    required
                  />
                </div>

                {/* Detalhes Adicionais */}
                <div className="mb-3">
                  <label htmlFor="detalhes" className="form-label">Detalhes Adicionais</label>
                  <textarea
                    id="detalhes"
                    className="form-control"
                    rows="3"
                    value={detalhes}
                    onChange={(e) => setDetalhes(e.target.value)}
                    placeholder="Adicione qualquer necessidade específica (ex: equipamento audiovisual, quantidade de pessoas)"
                  ></textarea>
                </div>

                {/* Botões */}
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">Enviar Solicitação</button>
                  <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CriarSolicitacao;
