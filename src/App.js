import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
 
import { NavBar } from './components/NavBar'

import {Home} from './pages/Home'

import {Detail} from './pages/Detail'

import {Favs} from './pages/Favs'

import {User} from './pages/User'

import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Router } from "@reach/router";

import Context from './Context'


//render prop - para renderizado condicional - rutas protegidas
/*const UserLogged = ({children})=>{
  return children({isAuth:false})
}*/


export const App = () => {

   //obtener detail
  //const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId=urlParams.get('detail')
  // console.log(detailId)

return(
  <div>
  <GlobalStyle />
  <Logo />
  <Router>
      <Home path='/'/>
       <Home path='/pet/:categoryId'/>
       <Detail path='/detail/:detailId'/>
  </Router>

  <Context.Consumer>
    {
      //se obtiene children
      ({isAuth})=>
      isAuth ? <Router>
       <Favs path='/favs'/>
       <User path='/user'/>
        </Router>
        :<Router>
         <NotRegisteredUser  path='/favs'/>
         <NotRegisteredUser  path='/user'/>
          </Router>
    }
  </Context.Consumer>
  <NavBar/>
  </div>
)
}
//:id se envia como prop <Home path='/pet/:id'/> -> home 
//export const Home  = ({id}) =>

