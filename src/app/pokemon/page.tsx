import Pokecard from "@/components/pokecard";
import Pokegrid from "@/components/pokegrid";
import pokelist, { getpoke } from "@/lib/pokeapi";
import pokemonpage from "../[pokemonname]/page"



const pokemon = async () => {
    const pokemonlist = await pokelist();
    

  return (
    <>
    <Pokegrid pokelist={pokemonlist} image={""} />
        {/*{filteredsearch.map((pokemona:any)=>{
          return (
            
            <Pokecard name={pokemona.name}/>
            )
          })}*/}
    
    </>

  )
}

export default pokemon
