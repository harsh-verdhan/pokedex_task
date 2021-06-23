import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokemonStack from './app/navigation/PokemonStack';

export default function App() {
  return (
    <NavigationContainer>
      <PokemonStack/>
    </NavigationContainer>
  );
}

