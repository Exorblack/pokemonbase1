import Pokegrid from "@/components/pokegrid";
import pokelist from "@/lib/pokeapi";

interface ok extends React.FC {
  //name:string
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
