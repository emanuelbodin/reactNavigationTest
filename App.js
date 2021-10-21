import React from 'react'
import {Text} from 'react-native'
import { AuthProvider } from './store/AuthProvider'
import Navigation from './navigation/Navigation'

const App = () => {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
    
  )
}

export default App