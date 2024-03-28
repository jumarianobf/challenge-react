import Header from "../../Components/Header"
import Card from "../../Components/Card"
import Footer from "../../Components/Footer"



const Integrantes = () => {
    return(

        <>
        <Header/>
        <a className="link" href="/"> Volte para Home</a>
        
          <Card texto1="Julia Mariano Barsotti Ferreira" 
          texto2="RM552713 - 1TDSPA"
          img="src\assets\WhatsApp Image 2023-11-23 at 23.11 1.png"
          linkedin="https://www.linkedin.com/in/julia-mariano-014967288/"/>

          <Card texto1="Leonardo Gaspar Saheb" 
          texto2="RM553383 - 1TDSPT" 
          img="src\assets\Foto_Perfil 1.png"
          linkedin="https://www.linkedin.com/in/leonardo-gaspar-saheb-140669261/"/>

          <Card texto1="Enzo Franco Rocha"           
          texto2="RM553643 - 1TDSPT"     
          img="src\assets\MicrosoftTeams-image 1.png" 
          linkedin="https://www.linkedin.com/in/enzo-rocha-90a859251/"/> 
          
        <Footer/>
        </>
    )
}
export default Integrantes;