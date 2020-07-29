import React,{Fragment} from 'react'

import { Article,ImgWrapper, Img, Button } from './styles'

import { MdFavoriteBorder,MdFavorite } from 'react-icons/md'

import {useLocalStorage} from '../../hooks/useLocalStorage'

import {useNearScreen} from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'



export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {


   //id para like
   const key = `like-${id}`

  //implementacion  hook para laze load y intersection observer
  const [show,element] = useNearScreen() 

  //implementando hook para likes
  const [liked,setLiked] = useLocalStorage(key,false)
  //console.log(key)

  //icono segun likes
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show &&
       <Fragment>
           <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>

      <Button onClick={()=>setLiked(!liked)}>
        <Icon size='32px' />{likes} Likess!
      </Button>
        </Fragment>
      }
     
    </Article>
  )
}
