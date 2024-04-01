import Pokegrid from "@/components/pokegrid";
import pokelist from "@/lib/pokeapi";

interface ok  {
  name:string
  image:string
}

const pokemon = async ({name}: ok) => {
    const pokemonlist = await pokelist();


  return (
    <>
    <Pokegrid pokelist={pokemonlist} image ={name} />
    </>

  )
}

export default pokemon
