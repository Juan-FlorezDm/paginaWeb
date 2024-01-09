import { Link } from "../Enrutamiento"
import { Navegar } from "../Navegacion"
import { Cards } from "./cards"
import './ropaNiño.css'

export function ropaNiño(){
    return(
        <>
            <Navegar />
            <div className="contenedor">
            <Cards />
            </div>
            <Link to='/'>vovler a la home</Link>
        </>
       
    )
}