import React, { useState } from "react"; // Import React and useState
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Pokecard from "./pokecard";
import Pokeimage from "@/components/pokeimage";

interface PokesPropsList {
  pokelist: any;
  image: string;
}

// Rename the component to start with an uppercase letter
function PokeGrid({ pokelist, image }: PokesPropsList) {
  const [search, setSearch] = useState(""); // Corrected hook name to start with "use"

  const searchFilter = (pokelista: any) => {
    return pokelista.filter(
      (pokemon: any) => pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredSearch = searchFilter(pokelist);

  return (
    <main>
      <div>
        <h3 className="text-2xl text-center py-[50px]">Search Here</h3>
        <div className="grid w-full max-w-90 items-center justify-center gap-1.5">
          <Label htmlFor="PokemonName">Pokemon Name</Label>
          <Input
            placeholder="ditto, pikachu, etc..."
            type="text"
            value={search}
            id="PokemonName"
            onChange={(e) => setSearch(e.target.value)} // Fixed function name to start with lowercase letter
            autoComplete="off"
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 sm:justify-center sm:items-center">
        {filteredSearch.map((pokemona: any) => {
          return <Pokecard name={pokemona.name} image={image} key={`${pokemona.name} card`} />;
        })}
      </div>
    </main>
  );
}

export default PokeGrid; // Export the component with corrected name
