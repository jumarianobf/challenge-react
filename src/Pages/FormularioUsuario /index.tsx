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

        
        <Footer/>
        
        </>
    )   
};

export default FormularioCadastro;
