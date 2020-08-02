import React from 'react'

import { PhotoCard } from '../PhotoCard'

//import { photos } from '../../../api/db.json'
//hoc 

 export const ListOfPhotoCardComponent = ({data:{photos=[]}}={}) => {
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )

}
