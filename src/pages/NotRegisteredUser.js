import React, { Fragment, useContext } from "react";
//importar contexto creado 
//export {createContext(),} no por defecto export default, por esose usa import nombrado
import { Context } from '../Context'
import { UserForm } from "../components/UserForm"
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from "../container/LoginMutation";


export const NotRegisteredUser = ()=>{
   //hook useContext
   const {activateAuth} = useContext(Context)

   return  <Fragment>
        <RegisterMutation>
            {
               //pasar funcion en children
               (register,{ data,loading,error })=>{

                  const onSubmit=({email,password})=>{
                    const input ={email,password}
                    const variables = {input}
                     //mutacion que recibe variables
                    //register regresa promesa
                   register({variables}).then(({ data })=>{
                      console.log(data)
                      const {signup}=data
                      activateAuth(signup)
                   })
                  }

                  const errorMsg = error && 'El usuario ya existe o hay algun problema.'
                 
                  return <UserForm disabled={loading} error={errorMsg} title='Registrarse' 
                  onSubmit={onSubmit}/>
               }
            }
          </RegisterMutation>
          <LoginMutation>
             {
                (login,{ data,loading,error })=>{
                  const onSubmit=({email,password})=>{
                     const input ={email,password}
                     const variables = {input}
                      //mutacion que recibe variables
                     //register regresa promesa
                    login({variables}).then(({data})=>{
                       const {login}=data
                       console.log(data)
                       activateAuth(login)
                    })
                   }

                   const errorMsg = error && 'Credenciales invalidas o el usuario no existe.'
                 
                   return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesion' 
                   onSubmit={onSubmit} />
                }
             }
          </LoginMutation>
      </Fragment>
      }
