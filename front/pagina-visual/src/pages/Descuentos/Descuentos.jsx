import { Link } from "../Enrutamiento"
import { Navegar } from "../Navegacion"
export function Descuentos(){
    return(
        <>
        <Navegar />
            <div>Aca encontraras todas las prendas que tenemos en oferta</div>
            <Link to='/'>vovler a la home</Link>
        </>
    )
}