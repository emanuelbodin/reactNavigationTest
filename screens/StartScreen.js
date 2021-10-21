import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useAuthContext } from '../store/AuthProvider'

const StartScreen = () => {
    const {logout} = useAuthContext()

    return (
<View style={styles.container}>
    <Text>
        Start Screen
    </Text>
    <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>
</View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})