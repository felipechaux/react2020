import React,{Fragment} from 'react'

import { Article,ImgWrapper, Img } from './styles'

import {useLocalStorage} from '../../hooks/useLocalStorage'

import {useNearScreen} from '../../hooks/useNearScreen'

import { FavButton } from "../FavButton";

import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

//para evitar recargar pagina
import { Link } from "@reach/router";


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'



export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {


   //id para like
   const key = `like  -${id}`

  //implementacion  hook para laze load y intersection observer
  const [show,element] = useNearScreen() 

  //implementando hook para likes
  const [liked,setLiked] = useLocalStorage(key,false)
  //console.log(key)


  return (
    <Article ref={element}>
      {
        show &&
       <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
      <ToggleLikeMutation>
        {
          //mutacion que se quiere hacer  (toggleLike)
           (toggleLike)=>{
          //cambiar estado local
          const handleFavClick = () => {
            //cambiar like en bd si es dislike 
            !liked && toggleLike({variables:{
             //id de la foto que gusta, 
             //internamente react apollo detecta que el id sufre mutacion - asi que actualiza cache - y asi se renderizan cambios en la UI
              input:{id}
            }})
            setLiked(!liked)
          }
             return  <FavButton liked={liked} likes={likes} 
             onClick={handleFavClick}/>

           }
        }
       </ToggleLikeMutation>
      </Fragment>
      }
     
    </Article>
  )
}
