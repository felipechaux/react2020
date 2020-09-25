import React,{useContext,Suspense} from 'react'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
 
import { NavBar } from './components/NavBar'

//import {Home} from './pages/Home'

//import {Detail} from './pages/Detail'

//import {Favs} from './pages/Favs'

//import {User} from './pages/User'

import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Redirect, Router } from "@reach/router";

import {Context} from './Context'
import { NotFound } from './pages/NotFound'


//render prop - para renderizado condicional - rutas protegidas
/*const UserLogged = ({children})=>{
  return children({isAuth:false})
}*/

//lazy importacion dinamica
const Favs = React.lazy(()=>import('./pages/Favs'))

const Home = React.lazy(()=>import('./pages/Home'))

const Detail = React.lazy(()=>import('./pages/Detail'))

const User = React.lazy(()=>import('./pages/User'))

export const App = () => {
  const {isAuth} =useContext(Context)

   //obtener detail
  //const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId=urlParams.get('detail')
  // console.log(detailId)

  //usuario debe iniciar sesion si quiere acceder a las rutas
  //not found default si ruta no existe

  //Suspense para cargar algo mientraz se renderiza componente no renderizado
return(
  <Suspense fallback={<div/>}>
  <GlobalStyle />
  <Logo />
    <Router>
      <NotFound default/>
        <Home path='/'/>
        <Home path='/pet/:categoryId'/>
        <Detail path='/detail/:detailId'/>
        {!isAuth && <NotRegisteredUser path='/login'/>}
        {!isAuth && <Redirect from='/favs' to='/login'/>}
        {!isAuth && <Redirect from='/user' to='/login'/>}
        {isAuth && <Redirect from='/login' to='/'/>}
        <Favs path='/favs'/>
        <User path='/user'/>
    </Router>
  <NavBar/>
  </Suspense>
)
}
//:id se envia como prop <Home path='/pet/:id'/> -> home 
//export const Home  = ({id}) =>

