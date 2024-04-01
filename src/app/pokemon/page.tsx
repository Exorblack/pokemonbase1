"use client"
import { useEffect, useState } from 'react';
import Pokegrid from "@/components/pokegrid";
import pokelist, { PokeData } from "@/lib/pokeapi";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState<PokeData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await pokelist();
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Pokegrid pokelist={pokemonList} image={""} />
    </>
  );
};

export default Pokemon;
