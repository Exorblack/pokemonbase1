"use client";
import { useState } from "react"
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Pokecard from "./pokecard";
import Pokeimage from "@/components/pokeimage";

interface pokespropslist{
  pokelist : any
  image:string
}

function pokegrid({pokelist,image}:pokespropslist) {

    const [search,setsearch] = useState("string")

    const searchfilter = (pokelista: any) =>{
      return pokelista.filter(
        (pokemon:any)=> pokemon.name.toLowerCase().includes(search.toLowerCase())
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
          value={search}
          id="PokemonName"
          onChange={(e)=>setsearch(e.target.value)}
          autoComplete="off"
          >
          </Input>
         </div>
      </div>
      <div className="md:grid md:grid-cols-3 sm:justify-center sm:items-center">
      {filteredsearch.map((pokemona:any)=>{
      return (
        
        <Pokecard name={pokemona.name} image={image} key={`${pokemona.name} card`}/>
        )
      })}
    </div>
    </main>
  )
}

export default pokegrid
