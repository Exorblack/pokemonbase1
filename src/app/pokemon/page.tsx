import React from "react"; 
import Pokegrid from "@/components/pokegrid";
import pokelist from "@/lib/pokeapi";

interface PokemonProps { 
  name: string;
  image: string;
}

const pokemon: React.FC<PokemonProps> = async ({ name }: PokemonProps) => {
  const pokemonlist = await pokelist();

  return (
    <>
      <Pokegrid pokelist={pokemonlist} image={name} /> 
    </>
  );
};

export default pokemon;
