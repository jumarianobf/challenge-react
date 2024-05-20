"use client";

import React, { useState } from 'react';
import './style.css'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

function FormularioCadastro() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [regiao, setRegiao] = useState('');
    const [empresaUsuario, setEmpresaUsuario] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const usuario = {
            nome_usuario: nomeUsuario,
            telefone_usuario: telefoneUsuario,
            email: email,
            regiao: regiao,
            empresa_usuario: empresaUsuario
        };

        try {
            const response = await fetch('http://localhost:8080/projetoTeste/rest/usuario/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            if (!response.ok) {
                console.log("Dados enviados com sucesso!");
                alert("Feedback enviado com sucesso!");
            } else {
                console.error("Falha ao enviar os dados.");
                alert("Falha ao enviar os dados.");
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert(error);
        }
    };

    return (
        <>
        <Header/> 
        <div className='container2'>
            <div className='form-image'><img src="" alt="" /></div>
            <div className='form'>
                <div className='form-header'>
                    <div className='title'>
                        <h1>Formulário de Cadastro de Usuário</h1>
                    </div>
                
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <div className='input-box'>
                            <label>
                                <div className='texto'>
                                    Nome
                                    <br />
                                </div>
                                <input type="text" value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)} placeholder="Digite seu primeiro nome" required/>
                            </label>
                        </div>
                        <div className='input-box'>
                            <label>
                            <div className='texto'>
                                Telefone
                                <br />
                            </div>
                                <input type="text" value={telefoneUsuario} onChange={(e) => setTelefoneUsuario(e.target.value)} placeholder="Digite seu telefone" required/>
                            </label>
                        </div>
                        <div className='input-box'>
                            <label>
                            <div className='texto'>
                                Email
                                <br />
                            </div>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" required/>
                            </label>
                        </div>
                        <div className='input-box'>
                            <label>
                            <div className='texto'>
                                Região
                                <br />
                            </div>
                                <input type="text" value={regiao} onChange={(e) => setRegiao(e.target.value)} placeholder="Digite sua região" />
                            </label>
                        </div>
                        <div className='input-box'> 
                            <label>
                            <div className='texto'>
                                Empresa
                                <br />
                            </div>
                                <input type="text" value={empresaUsuario} onChange={(e) => setEmpresaUsuario(e.target.value)} placeholder="Digite sua empresa" required/>
                            </label>
                        </div>
                    </div>
                    <div className='continue-button'>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>

        
        <Footer/>
        
        </>
    )   
};

export default FormularioCadastro;
