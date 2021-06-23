import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet} from 'react-native'
import axios from "axios";

export default function PokemonDetails({route}) {
  const [pokemonDetails, setPokemonDetails] = useState({})

  const pokeUrl = route.params.url
  const fetchPokemon = async () => {
    try {
      const {data:{
        name,
        weight,
        base_experience,
        height,
        species,
        abilities,
        forms
      }}= await axios(`${pokeUrl}`)
      return {
        name,
        weight,
        base_experience,
        height,
        species,
        abilities,
        forms
      }
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
    const fetchAPI = async () => {
      setPokemonDetails(await fetchPokemon())
    }
    fetchAPI()
  }, [setPokemonDetails])

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{pokemonDetails.name}</Text>
        <Text>exp:{pokemonDetails.base_experience}</Text>
        <Text>h:{pokemonDetails.height}</Text>
        <Text>w:{pokemonDetails.weight}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.otherAttributes}>Other Attributes</Text>
        <View style={styles.attributes}>
          <Text style={styles.leftText}>Species</Text>
          {pokemonDetails.species && <Text style={styles.rightText}>{pokemonDetails.species.name}</Text>}
        </View>
        <View style={styles.attributes}>
          <Text style={styles.leftText}>Abilities</Text>
          <View style={styles.rightContent} >
            {pokemonDetails.abilities && pokemonDetails.abilities.map((ability,i)=>(
              <Text key={i} style={styles.rightText}>{ability.ability.name}, </Text>
            ))} 
          </View>
        </View>
        <View style={styles.attributes}>
          <Text style={styles.leftText}>Forms</Text>
          <View style={styles.rightContent} >
            {pokemonDetails.forms && pokemonDetails.forms.map((form,i)=>(
              <Text key={i} style={styles.rightText}>{form.name} </Text>
            ))} 
          </View>
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:150,
    backgroundColor:"lightgrey",
    justifyContent:"center",
    alignItems:"center"
  },
  name:{
    fontSize:25,
    padding:14,
    textTransform:"capitalize"
  },
  subContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
  otherAttributes:{
    fontSize:25
  },
  attributes:{
    width:"90%",
    flexDirection:"row",
    marginVertical:5,
    justifyContent:"space-between",
  },
  leftText:{
    fontSize:20
  },
  rightText:{
    textTransform:"capitalize",
  },
  rightContent:{
    flexDirection:"row",
  }

})