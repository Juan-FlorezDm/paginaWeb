import { Link } from "./Enrutamiento"
export function Contacto(){
    return( 
        <>
            <h1>encuentranos en los siguientes lugares: </h1>
             <div>
                <a href="/encuentranos">
                    <a href="https://www.facebook.com/profile.php?id=100063501725151"><strong>Facebook</strong></a> 
                    <a href="https://www.instagram.com/babyfrumosita/"><strong>Intagram</strong></a> 
                    <a href=""><strong>X</strong></a> 
                </a> 
                <Link to='/nosotros'>Sobre nosotros</Link>
            </div>
        </>
    )
}
