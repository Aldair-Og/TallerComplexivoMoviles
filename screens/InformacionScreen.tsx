import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Auth, db } from "../firebase/Config";
import { onValue, ref } from "firebase/database";
import { Button, StyleSheet, Text, View } from "react-native";


export default function InformacionScreen() {

    const [usuario, setusuario] = useState({ nombre: "", edad: 0, correo: "" })

    function leerUsuario() {
        onAuthStateChanged(Auth, (user) => {
            if (user) {

                const uid = user.uid;
                //console.log(uid)
                getusuario(uid)

            } else {

            }
        });
    }

    function getusuario(uid: string) {
        const starCountRef = ref(db, 'usuarios/' + uid);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setusuario(data)
        });
    }


    function cerrarSesion() {
        signOut(Auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });


    }
    useEffect(() => {
        leerUsuario()
    }, [])

    return (
        <View>
            <Text>InformacionScreen</Text>
            <Text>USUARIO: {usuario?.nombre}</Text>
            <Text>EDAD: {usuario?.edad}</Text>
            <Text>EMAIL: {usuario?.correo}</Text>

            <Button title="cerrar sesion" onPress={cerrarSesion} />

        </View>
    )
}

const styles = StyleSheet.create({})