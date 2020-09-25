import React, { Fragment,useEffect,useState } from 'react'

// hooks -> useState

import { Category } from '../Category'
import NProgress from 'nprogress'
import { List, Item } from './styles'
import nProgress from 'nprogress'

//fetch de datos -castom hook
function userCategoriesData(){

   //[]json
  const [categories,setCategories] = useState([])

  //estado para loading
  const [loading,setLoading] = useState(false)

  useEffect(function(){
    setLoading(true)
    NProgress.start()
    window.fetch('https://petgram-backend-one.now.sh/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response)
      //datos cargados
      setLoading(false)
      nProgress.done()
    })
    //solo ejecuta una vez al montar componente []
  },[])
  return  {categories,loading}

}

//import { categories as mockCategories } from '../../../api/db.json'

 const ListOfCategoriesComponent = () => {

  const {categories,loading} = userCategoriesData()
  //estado para saber si estan fijas las categortias - componente  visual
  const [showFixed,setShowFixed] = useState(false)



  
  //detectar cuando scroll cambie para condicion de categorias
  useEffect(function (){
    const onScroll = e =>{
      //cuando scroll sea mayor a 200
      const newShowFixed = window.scrollY > 200
      showFixed!= newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll',onScroll)
    //limpiando efecto cada vez que se ejecute
    return () => document.removeEventListener('scroll',onScroll)
  },[showFixed])


 //constante para tener siempre visible la lista de categorias de arriba
  const renderList = (fixed)=>(
    /*<List className={fixed ?'fixed':''}>
    mejor forma con props
    */
   <List fixed={fixed}>
    {
       /* en caso de loading true, renderizar categorias por defecto, si no  carga normal */
      loading ? <Item key='loading'><Category /></Item>
      : categories.map(category => <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /> </Item>)
    }
  </List>

  )

  return (
    //fragment para retornar mas de un elemento
    <Fragment>
    {renderList()}
    {showFixed && renderList(true)}
    </Fragment>
  )
}

//uso de memo para evitar renderizar de forma innecesaria
//no se vuelve a renderizar si las props son diferentes
export const ListOfCategories = React.memo(ListOfCategoriesComponent)

// use all props with {...category} or cover={category.cover} emoji={category.emoji}
