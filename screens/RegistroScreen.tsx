import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Auth, db } from '../firebase/Config'
import { getDatabase, ref, set } from 'firebase/database'

export default function RegistroScreen({ navigation }: any) {

    const [nombre, setnombre] = useState("")

    const [edad, setedad] = useState(0)

    const [correo, setcorreo] = useState("")

    const [contraseña, setcontraseña] = useState("")


    function Registro() {
        createUserWithEmailAndPassword(Auth, correo, contraseña)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                guardarUsuario(user.uid)

                navigation.navigate("Login")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }




    function guardarUsuario(uid: String) {
        set(ref(db, 'usuarios/' + uid), {
            correo: correo,
            contraseña: contraseña,
            edad: edad,
            nombre: nombre,
            });
    }










return (
    <View>
        <Text>RegistroScreen</Text>

        <TextInput placeholder="nombre" onChangeText={setnombre} />

        <TextInput placeholder="edad" onChangeText={(texto) => setedad(+texto)} keyboardType='numeric' />

        <TextInput placeholder="correo" onChangeText={setcorreo} />

        <TextInput placeholder="contraseña" onChangeText={setcontraseña} />

        <Button title='Login' onPress={Registro} />













    </View>
)
}

const styles = StyleSheet.create({

})