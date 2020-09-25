import React,{ createContext, useState} from "react";

//expor nombrado
export const Context = createContext()

//render props
const Provider = ({children}) =>{
    //isAutch -> estado local para saber si el usuario se autentica
    //setIsAuth -> actualizar si se autentica
    const [isAuth,setIsAuth] = useState(()=>{
        //leer de sesion storage
      return window.sessionStorage.getItem('token')
    })

    const value ={
        isAuth,
        //actualizar estado
        //token que llega de hacer login
        activateAuth:token=>{
            setIsAuth(true)
            //guardar token en storage
            window.sessionStorage.setItem('token',token)
        },
        //para cerrar sesion
        removeAuth:()=>{
            setIsAuth(false)
            window.sessionStorage.removeItem('token')
        }
    }

   //desde aqui se inyecta value={{ isAuth: true }}
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer : Context.Consumer
}

