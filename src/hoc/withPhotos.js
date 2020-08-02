
import {graphql} from 'react-apollo'

//querys como strings - para que apollo las interprete
import {gql} from 'apollo-boost'

//componente de orden superior
const GET_PHOTOS =gql`
query getPhotos($categoryId:ID) {
  photos(categoryId: $categoryId){
    id
    categoryId
    src 
    likes
    userId
    liked
  }
}
`

export const withPhotos =graphql(GET_PHOTOS)