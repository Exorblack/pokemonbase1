import Pokecard from "@/components/pokecard";
import Pokegrid from "@/components/pokegrid";
import pokelist, { getpoke } from "@/lib/pokeapi";
import pokemonpage from "../[pokemonname]/page"

interface ok {
  name:string
  image:string
}

const pokemon = async ({image}: ok) => {
    const pokemonlist = await pokelist();


  return (
    <>
    <Pokegrid pokelist={pokemonlist} image ={image} />
    </>

  )
}

export default pokemon
