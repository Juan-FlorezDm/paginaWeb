import { Router} from "./pages/Enrutamiento"
import './App.css'



import { About } from "./pages/About"
import { Navegar } from "./pages/Navegacion"
import { Contacto } from "./pages/encuentranos"
import { ropaNiño } from "./pages/ropaNiño/ropaNiño"
import Page404 from "./pages/Page404"
import { ropaNiña } from "./pages/ropaNiña/ropaNiña"
import { Descuentos } from "./pages/Descuentos/Descuentos"


const routes =[
  {
    path: '/',
    Component: Navegar
  },
  {
    path: '/contacto',
    Component: Contacto
  },
  {
    path: '/nosotros',
    Component: About
  },
  {
    path: '/ropanino',
    Component: ropaNiño
  },{
    path: '/ropanina',
    Component: ropaNiña
  },
  {
    path: '/Descuentos',
    Component: Descuentos
  }
  
 

]

export function App(){
  return(
    <>
        <Router routes={routes} defaultComponent={Page404} />
    </>
  )
}


