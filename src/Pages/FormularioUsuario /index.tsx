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
}

export default FormularioCadastro;
