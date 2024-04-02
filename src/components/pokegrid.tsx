"use client";
import React ,{ useState } from "react"
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Pokecard from "./pokecard";

interface pokespropslist{
  pokelist : any
}

function Pokegrid({pokelist}:pokespropslist) {

    const [searchText,setSearchText] = useState("");

    const searchfilter = (pokelista: any) =>{
      return pokelista.filter(
        (pokemon:any)=> pokemon.name.toLowerCase().includes(searchText.toLowerCase())
      )
    }
    const filteredsearch = searchfilter(pokelist)

  return (
    <main>
      
      <div>

         <h3 className="text-2xl text-center py-[50px]">Search Here</h3>
         <div className="grid w-full max-w-90 items-center justify-center gap-1.5">
          <Label htmlFor="PokemonName">Pokemon Name</Label>
          <Input 
          placeholder="ditto, pikachu, etc..."
          type="text"
          value={searchText}
          id="PokemonName"
          onChange={(e)=>setSearchText(e.target.value)}
          autoComplete="off"
          >
          </Input>
         </div>
      </div>
      <div className="md:grid md:grid-cols-3 sm:justify-center sm:items-center">
      {filteredsearch.map((pokemona:any)=>{
      return (
          <Pokecard name={pokemona.name} key={`${pokemona.name} card`}/>
        )
      })}
    </div>
    </main>
  )
}

export default Pokegrid
