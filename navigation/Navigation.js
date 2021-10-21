import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import { useAuthContext } from '../store/AuthProvider';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {isAuth} = useAuthContext()
  return (
  <NavigationContainer>
      <Stack.Navigator
      >
        {isAuth ? (
          <>
            <Stack.Screen name={'Start'} component={StartScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name={'Login'} component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>    
  )
}

export default Navigation