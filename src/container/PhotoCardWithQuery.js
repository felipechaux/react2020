import React from 'react'
import {PhotoCard} from '../components/PhotoCard'

import {gql} from 'apollo-boost'
//uso de render props
import {Query} from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!){
    photo(id:$id) {
      id
      categoryId
      src 
      likes
      userId
      liked
    }
  
  }
`

//render prop
const renderProp =({loading,error,data})=> {
    console.log(data)
     if(loading) return <p>Loading...</p>
     if(error) return <p>Error!</p>
    //recuperar foto de data
    const {photo={}} =data
    return <PhotoCard {...photo }/>
} 

export const PhotoCardWithQuery=({id})=>(
    
    <Query query={GET_SINGLE_PHOTO} variables={{id}}>
        {
    
          renderProp
        }
    </Query>
  
)