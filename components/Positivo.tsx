import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Positivo(props:any) {

  return (
    <View>
     <FlatList data={props.comentarios}
     renderItem={({item})=>
     <Text>*{item.opinion}</Text>}/>
    </View>
  )
}

const styles = StyleSheet.create({})