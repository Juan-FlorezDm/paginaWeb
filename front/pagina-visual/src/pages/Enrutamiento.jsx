import { useState, useEffect } from "react"

const NAVEGANDO_PAG = 'pushState'
export function Navigate(href){
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAVEGANDO_PAG)
  window.dispatchEvent(navigationEvent)
}

export function Link({target, to, ...props }){
  const handleClick = (event) => {
    

    const isMainEvent = event.button == 0
    const isModifiedEvent = event.metaKey || event.altKey || event.crtlKey || event.shiftKey
    const isManageableEvent = targer == undefined || target == '_self'

    if(isMainEvent && isManageableEvent && !isModifiedEvent){
      event.preventDefault()
      Navigate(to)
    }
    
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}

export function Router({routes=[], defaultComponent: DefaultComponent = () => <h1>404</h1>}){
  const [currentPath, setCurrentPath ] =useState(window.location.pathname)
  
  useEffect(() =>{
    const onLocationChange =() =>{
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(NAVEGANDO_PAG, onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    return () =>{
      window.removeEventListener(NAVEGANDO_PAG, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  const Page = routes.find(({path}) => path == currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}