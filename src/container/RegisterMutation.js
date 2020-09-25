import React from 'react'
import { gql } from "apollo-boost"
import { Mutation  } from "react-apollo"


const REGISTER = gql`
mutation signup($input:UserCredentials!){ 
    signup(input:$input) 
}
`


//children para usar en cualquier punto de la aplicacion
export const RegisterMutation = ({children})=>{

    return <Mutation mutation={REGISTER}>
        {children}
    </Mutation>
}