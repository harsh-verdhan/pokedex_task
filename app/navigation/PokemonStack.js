import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import PokemonDetails from '../screens/PokemonDetails';

const Stack = createStackNavigator();

function PokemonStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetails}
        />
      </Stack.Navigator>
  )
}


export default PokemonStack;