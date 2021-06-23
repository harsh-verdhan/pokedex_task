import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'


export default function PokemonList({name,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container} >
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    borderBottomWidth: 2,
    borderColor: "lightgrey"
  },
  text:{
    fontSize:25,
    padding:14,
    textTransform:"capitalize"
  }

})