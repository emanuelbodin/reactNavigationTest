import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useAuthContext } from '../store/AuthProvider'

const LoginScreen = () => {
    const {login} = useAuthContext()
    return (
<View style={styles.container}>
    <Text>
        Login Screen
    </Text>
    <TouchableOpacity onPress={login}><Text>Login</Text></TouchableOpacity>
</View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})