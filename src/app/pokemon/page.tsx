import Pokegrid from "@/components/pokegrid";
import pokelist from "@/lib/pokeapi";



const PokemonPage = async () => {
    const pokemonlist = await pokelist();


  return (
    <>
    <Pokegrid pokelist={pokemonlist} />
    </>

  )
}

export default PokemonPage
