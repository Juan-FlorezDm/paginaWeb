import { useState, useRef } from "react"
import './Navegacion.css'
import { Link } from "./Enrutamiento";

export const Navegar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)

    return(
      <>
        <nav>
          <Link className='title'to='/'>HOME</Link>
          <div className="menu" onClick={() =>{
            setMenuOpen(!menuOpen)
          }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open": ""}>
            <li><Link to='/ropanino'>Ropa de Niño</Link></li>
            <li><Link to='/ropanina'>Ropa de Niña</Link></li>
            <li><Link to='/Descuentos'>Descuento</Link></li>
          </ul>
        </nav>
      </>
      
    )
}
