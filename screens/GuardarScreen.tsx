import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Auth, db } from '../firebase/Config'
import { push, ref, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

export default function GuardarScreen() {

  const [id, setid] = useState("")
  const [titulo, settitulo] = useState("")
  const [descripcion, setdescripcion] = useState("")
  const [fecha, setfecha] = useState("")

  function guardarNota() {

    set(ref(db, 'usuarios/' + id + '/notas/' + titulo ), {
      titulo: titulo,
      descripcion: descripcion,
      fecha: fecha
    });

    settitulo("")
    setdescripcion("")
    setfecha("")
  }

  function leerUID() {
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        const uid = user.uid;
        setid(uid)
      } else {

      }
    });
  }

  useEffect(() => {
    leerUID()
  }, [])

  return (
    <View>
      <Text>GuardarScreen</Text>

      <TextInput
        placeholder='Ingresa Titulo'
        onChangeText={settitulo}
        value={titulo}
      />

      <TextInput
        placeholder='Ingresa Descripcion'
        onChangeText={setdescripcion}
        value={descripcion}
      />

      <TextInput
        placeholder='Ingresa Fecha'
        onChangeText={setfecha}
        value={fecha}
      />

      <Button title='Guardar' onPress={guardarNota} />

    </View>
  )
}

const styles = StyleSheet.create({})