import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'

import {PhotoCardWithQuery} from './container/PhotoCardWithQuery'

import {Home} from './pages/Home'

import { Router } from "@reach/router";



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
    :<Router>
      <Home path='/'/>
      <Home path='/pet/:id'/>
    </Router>
  }
 
</div>
)
}

