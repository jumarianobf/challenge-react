import './style.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
     <div className='background'>
          <a href="https://www.instagram.com/salesforcebrasil/" target="_blank"><FaInstagram /></a>
          <a href="https://twitter.com/salesforce" target="_blank"><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/salesforce/" target="_blank"><FaLinkedin /></a>
          <a href="https://www.youtube.com/SalesforceBrasil" target="_blank"><FaYoutube /></a>
          <p>Entre em contato</p>
        </div>
    </footer>

    
  );
}

export default Footer;