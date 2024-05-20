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
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert(error);
        }
}

export default FormularioCadastro;
