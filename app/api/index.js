import axios from "axios";

const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'

export const fetchPokemon = async () => {
  try {
    const{data:{results}}= await axios(`${url}`)
    return results;
  } catch (error) {
    console.log(error);
  }
}