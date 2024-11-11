import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cadastro() {
    const [role, setRole] = useState('');  // Estado para armazenar a escolha do cargo

    // Função para atualizar o estado quando uma opção de cargo for escolhida
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    return (
        <div className="Cadastro d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
                <h1 className="text-center mb-4">Cadastre-se</h1>
                    
                <form>
                    {/* Campo de nome */}
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            className="form-control"
                            placeholder="Digite seu nome"
                            name="Nome"
                            required
                        />
                    </div>

                    {/* Campo de email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            name="E-mail"
                            required
                        />
                    </div>

                    {/* Seletor de cargo */}
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Escolha o cargo:</label>
                        <select
                            id="role"
                            name="role"
                            className="form-select"
                            value={role}
                            onChange={handleRoleChange}
                            required
                        >
                            <option value="" disabled>Selecione um cargo</option>
                            <option value="Professor">Professor</option>
                            <option value="Gestor">Gestor</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </div>

                    {/* Botão de cadastro */}
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Cadastre-se
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
