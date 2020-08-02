import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

 import ApolloClient from 'apollo-boost'
 import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  uri:'https://petgram-backend-one.now.sh/graphql'
})

//https://petgram-server-24iykciv5.now.sh/categories

ReactDOM.render(
<ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('app'))
