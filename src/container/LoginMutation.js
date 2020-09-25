import React from 'react'
import { gql } from "apollo-boost"
import { Mutation  } from "react-apollo"


const LOGIN = gql`
mutation login($input:UserCredentials!){ 
    login(input:$input) 
}
`


//children para usar en cualquier punto de la aplicacion
export const LoginMutation = ({children})=>{

    return <Mutation mutation={LOGIN}>
        {children}
    </Mutation>
}