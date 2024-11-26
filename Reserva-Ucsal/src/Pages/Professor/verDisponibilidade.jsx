import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function VerDisponibilidade() {
  
  // Exemplos de dados que podemos usar
  const [espacos, setEspacos] = useState([
    {
      id: 1,
      nome: 'Sala de Aula 101',
      disponibilidade: [
        { data: '25/11/2024', horario: '08:00 - 10:00', status: 'Disponível' },
        { data: '25/11/2024', horario: '10:00 - 12:00', status: 'Reservado' },
        { data: '26/11/2024', horario: '14:00 - 16:00', status: 'Disponível' },
      ]
    },
    {
      id: 2,
      nome: 'Auditório Principal',
      disponibilidade: [
        { data: '25/11/2024', horario: '14:00 - 16:00', status: 'Disponível' },
        { data: '26/11/2024', horario: '10:00 - 12:00', status: 'Reservado' },
        { data: '27/11/2024', horario: '08:00 - 10:00', status: 'Disponível' },
      ]
    },
    {
      id: 3,
      nome: 'Laboratório',
      disponibilidade: [
        { data: '25/11/2024', horario: '08:00 - 10:00', status: 'Reservado' },
        { data: '26/11/2024', horario: '14:00 - 16:00', status: 'Disponível' },
        { data: '27/11/2024', horario: '10:00 - 12:00', status: 'Disponível' },
      ]
    },

    {
      id: 4,
      nome: 'Sala 202',
      disponibilidade: [
        { data: '25/11/2024', horario: '08:00 - 10:00', status: 'Reservado' },
        { data: '26/11/2024', horario: '14:00 - 16:00', status: 'Disponível' },
        { data: '27/11/2024', horario: '10:00 - 12:00', status: 'Disponível' },
      ]
    }

    
    
  ]);

  return (
    <div className="container mt-5">
      <h2>Ver Disponibilidade dos Espaços</h2>
      <div className="row">
        {espacos.map((espaco) => (
          <div key={espaco.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              
              <div className="card-header">
                <h5 className="mb-0">{espaco.nome}</h5>
              </div>

              <div className="card-body">
                <h6>Disponibilidade</h6>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Horário</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {espaco.disponibilidade.map((item, index) => (
                      <tr key={index}>
                        <td>{item.data}</td>
                        <td>{item.horario}</td>
                        <td className={item.status === 'Disponível' ? 'text-success' : 'text-danger'}>
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerDisponibilidade;
