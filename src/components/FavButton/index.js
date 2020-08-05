import React from "react";
import { MdFavoriteBorder,MdFavorite } from 'react-icons/md'
 import { Button } from "./styles";

export const FavButton = ({liked,likes,onClick}) =>{
    //icono segun likes
 const Icon = liked ? MdFavorite : MdFavoriteBorder

return <Button onClick={onClick}>
       <Icon size='32px' />{likes} Likes!
     </Button>
}
