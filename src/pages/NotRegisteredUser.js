import React, { Fragment } from "react";
//importar contexto creado 
import Context from '../Context'
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = ()=>(
   <Context.Consumer>
       {
        //isAuth no es encesario
          ({isAuth,activateAuth})=>{
             return (
               <Fragment>
               <UserForm title='Registrarse' onSubmit={activateAuth}>
               </UserForm>
                     <UserForm title='Iniciar sesion' onSubmit={activateAuth}>
               </UserForm>
               </Fragment>
             )

          }
              
       }
   </Context.Consumer>
)