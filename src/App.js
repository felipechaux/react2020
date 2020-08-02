import React, { Fragment } from 'react'

import { ListOfCategories } from './components/ListOfCategories'

import { ListOfPhotoCard } from './container/ListOfPhotoCard'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'

import {PhotoCardWithQuery} from './container/PhotoCardWithQuery'
import { PhotoCard } from './components/PhotoCard'

export const App = () => {

   //obtener detail
  const urlParams = new window.URLSearchParams(window.location.search)
   const detailId=urlParams.get('detail')
  // console.log(detailId)

return(
  <div>
  <GlobalStyle />
  <Logo />
  {
    detailId ? <PhotoCardWithQuery id={detailId}/>
    :<Fragment>
     <ListOfCategories />
    <ListOfPhotoCard categoryId={1} />
    </Fragment>
  }
 
</div>
)
}

