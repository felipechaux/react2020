import React, { useState } from 'react'

// hooks -> useState

import { Category } from '../Category'

import { List, Item } from './styles'

import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories,setCategories] = useState(mockCategories)

  return (
    <List>
      {
        categories.map(category => <Item key={category}> <Category {...category} /> </Item>)
      }
    </List>
  )
}
// use all props with {...category} or cover={category.cover} emoji={category.emoji}
