import { Link } from "./Enrutamiento"
import './About.css'
export function About(){
    return(
        <>
        <div  className="contenedor">
            <div className="book">
                <p>Hello</p>
                <div className="cover">
                    <p>Hover Me</p>
                </div>
            </div>
        </div>
        
        <Link to='/'>Volver al Home</Link>
        </>
    )
}