import { Link } from "./Enrutamiento"
import './About.css'
import { Navegar } from "./Navegacion"
export function About(){
    return(
        <>
        <Navegar />
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