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
          

        <Footer/>
        </>
    )
}
export default Integrantes;