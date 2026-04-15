import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Tarjeta from '../components/Tarjeta';

export default function ListaScreen() {

    const [peliculas, setpeliculas] = useState([])

    const API_PELICULAS = "https://jritsqmet.github.io/web-api/peliculas3.json"

    async function leerPeliculas() {
        const resp = await fetch(API_PELICULAS);
        const json = await resp.json();
        setpeliculas(json.peliculas);
    }

    useEffect(() => {
        leerPeliculas();

    }, [])
    



    return (
        <View>
            <FlatList 
            data={peliculas}
            renderItem={({item}:any)=>
            <Tarjeta datos={item} />
        }
            />
        </View>
    )
}

const styles = StyleSheet.create({})

