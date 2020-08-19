import React,{ createContext, useState} from "react";

const Context = createContext()

//render props
const Provider = ({children}) =>{
    //isAutch -> estado local para saber si el usuario se autentica
    //setIsAuth -> actualizar si se autentica
    const [isAuth,setIsAuth] = useState(false)

    const value ={
        isAuth,
        //actualizar estado
        activateAuth:()=>{
            setIsAuth(true)
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

