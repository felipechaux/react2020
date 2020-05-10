import React from 'react'

import { PhotoCard } from '../PhotoCard'


export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        [1, 2].map(category => <li key=''> <PhotoCard />  </li>)
      }
    </ul>
  )
}
