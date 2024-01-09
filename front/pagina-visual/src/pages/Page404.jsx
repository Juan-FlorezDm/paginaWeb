import { Link } from "./Enrutamiento"

export default function Page404(){
    return(
        <>
        <div>
            <h1>404</h1>
            <p>no existe la pagina a la que quieres ir</p>
            <p>vuelve al home
                <Link to='/'>Home</Link>
            </p>
        </div>
        
        </>
    )
}