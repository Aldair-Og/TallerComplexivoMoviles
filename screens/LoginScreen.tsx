import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../firebase/Config';

export default function LoginScreen({navigation}:any) {

    const [correo, setcorreo] = useState("")
    const [contraseña, setcontraseña] = useState("")

    






    function Login() {
        const auth = getAuth();
        signInWithEmailAndPassword(Auth, correo, contraseña)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate("Drawer")

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }



    return (
        <View>
            <Text>LoginScreen</Text>

            <TextInput placeholder='correo' onChangeText={setcorreo} />

            <TextInput placeholder='contraseña' onChangeText={setcontraseña} />

            <Button title='Ingresar' onPress={Login}/>
            <Button title='Registro' onPress={()=>navigation.navigate("Registro")}/>




        </View>
    )
}

const styles = StyleSheet.create({})