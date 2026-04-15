import { Button, Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Positivo from './Positivo'

export default function Tarjeta({ datos }: any) {

    const [ocultar, setocultar] = useState(false)

    const [positivo, setpositivo] = useState(false)





    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => setocultar(true)}>

            <Text>Pelicula: {datos.titulo}</Text>
            <Image
                source={{ uri: datos.imagen }}
                style={styles.img} />

            <Modal visible={ocultar}>
                <Text>Pelicula:{datos.titulo}</Text>
                <Image
                    source={{ uri: datos.imagen }}
                    style={styles.img} />

                <Text>Comentario {"\n\n\n\n"}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text>Negativos</Text>
                    <Switch
                        value={positivo}
                        onChange={() => setpositivo(!positivo)} />
                    <Text>Positivos</Text>
                </View>

                {
                    positivo == true
                    ? <Positivo comentarios ={datos.opiniones.opiniones_positivas.detalles}/>
                    : <FlatList
                    data={datos.opiniones.opiniones_negativas.detalles}
                    renderItem={({item})=>
                    <Text>{item.opinion}</Text>
                    }
                    />
                }





                <Button title='cerrar' onPress={() => setocultar(false)} />




            </Modal>



        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },

    img: {
        width: 150,
        height: 250,
        resizeMode: 'contain'
    }
})

