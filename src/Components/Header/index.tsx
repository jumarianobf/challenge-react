import './style.css'
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'


function Header() {

  return (
    <>
<header>

  <div className='cabecalho'>
    <h1>Produtos</h1>
    <h1>Industria</h1>
    <h1>Aprendizado</h1>
    <a href="/" target="_blank">
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="logo" />
    </a>
      <h1>Suporte</h1>
      <h1>Empresa</h1>
      <h1>Login</h1>
  </div>
    <div className="icones">
    <img className='icon' src="src\assets\Captura_de_tela_2024-03-18_204003-removebg-preview.png" alt="login" />
    <img className='icon-buscar' src="src\assets\imagem_2024-03-20_201923596-removebg-preview.png" alt="buscar" />
  </div>
</header>
    
    </>
  )
}

export default Header