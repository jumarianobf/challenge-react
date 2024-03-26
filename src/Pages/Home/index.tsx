import Header from "../../Components/Header"
import Card from "../../Components/Card"
import Footer from "../../Components/Footer"
import './style.css'




const Home = () => {
    return(

        <>
        <Header/>     

        <a className="link" href="/integrantes"> Veja nossos integrantes</a>
        <br />
        <Card></Card>
        <Card></Card>
        <Card></Card>


        <Footer/>
        </>
    )
}
export default Home;