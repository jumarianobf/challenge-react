import React, { useState } from "react";
import Header from "../../Components/Header"
import Card from "../../Components/Card"
import Footer from "../../Components/Footer"
import './style.css'




const Home = () => {

    const [clicks, setClicks] = useState<{ x: number, y: number }[]>([]);

    const handleClick = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        setClicks((prevClicks) => [...prevClicks, { x: clientX, y: clientY }]);
    };

    const saveClickData = () => {
        const csvContent = "data:text/csv;charset=utf-8," +
            clicks.map(({ x, y }) => `${x},${y}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "click_data.csv");
        document.body.appendChild(link);
        link.click();
    };

    return(

        <>
        <Header/>     

        <a className="link" href="/integrantes" onClick={saveClickData}> Veja nossos integrantes</a>
        <br />
        <Card texto1="Entregue sucesso agora com o Salesforce Customer 360" 
          texto2="O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI." 
          img="src\assets\Captura_de_tela_2023-11-23_185950_1-removebg-preview (1).png" />
          
        <Card texto1="O que é CRM?" 
          texto2="Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa." 
          img="src\assets\Captura_de_tela_2024-03-18_220420-removebg-preview.png" />
 
        <Card texto1="O que é a Salesforce?" 
        texto2="A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. " 
        img="src\assets\Captura de tela 2024-03-18 220440.png" />


        <Footer/>
        </>
    )
}
export default Home;