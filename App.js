import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

const App = () => {
    const [password, setPassword] = useState(123456)
    const [caracters, setCaracters] = useState(8)

    function generatePass(caracters) {
        let passwordGenerated = Math.floor(Math.random() * caracters)
        setPassword(passwordGenerated)
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('./src/assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>12 Caracteres</Text>
            <View style={styles.area}>
                <Slider
                    style={styles.slider}
                    minimunValue={8}
                    maximumValue={16}
                    onValueChange={number => setCaracters(number)}
                    minimumTrackTintColor="#ff0000"
                    maximumTrackTintColor="#000"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => generatePass(caracters)}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            <View style={styles.area}>
                <Text style={styles.password}>{password}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3ff',
    },

    logo: {
        marginBottom: 60,
    },

    slider: {
        height: 50,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    area: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 7,
        width: '80%',
    },

    button: {
        backgroundColor: '#ffa200',
        width: '80%',
        height: 50,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },

    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },

    password: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    },
})

export default App
