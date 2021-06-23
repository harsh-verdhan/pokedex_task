import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet,FlatList } from 'react-native'
import {fetchPokemon} from "../api/index"
import PokemonList from '../components/lists/PokemonList'

export default function Home({navigation}) {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setPokemons(await fetchPokemon())
    }
    fetchAPI()
  }, [setPokemons])
  
  return (
    <View>
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({item})=>
          <PokemonList
            name={item.name}
            onPress={()=>navigation.navigate("PokemonDetails",{url:item.url})}
          />
        }/>
    </View>
  )
}

