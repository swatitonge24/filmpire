import React from 'react'
import Body from './components/Body'
import aapStore from './utilities/aapStore';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store ={aapStore}>
      <Body/>
      </Provider>
  )
}

export default App


