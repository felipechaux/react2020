import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'

import { ListOfPhotoCard } from './components/ListOfPhotoCard'

import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
)
