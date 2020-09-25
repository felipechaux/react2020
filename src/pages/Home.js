import React from 'react'
import { Layout } from "../components/Layout";
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'


 const HomePage = ({categoryId}) =>{

   return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes
    encontrar fotos de animales domesticos muy bonitos'>
    <ListOfCategories />
   <ListOfPhotoCard categoryId={categoryId} />
   </Layout>
   )
}
   // si la prop anterior y la actual es la misma para evitar re-renderizado
 export default React.memo(HomePage, (prevProps, props) => {
      return prevProps.categoryId === props.categoryId
 })


