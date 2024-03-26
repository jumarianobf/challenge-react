import './style.css'
import User from "../../assets/user.jpg"


const Card = (props:any) => {
    const {texto1, img, texto2, linkedin } = props;
  
    return (
        
        <div className="card">
            <div className="container">
                <h2 className='texto1'>{texto1}</h2>
                <img src={img} alt="" />
        
            </div>
                <p className="texto2">{texto2}</p>
                {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
    );
  };

export default Card