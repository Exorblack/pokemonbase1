import Pokegrid from "@/components/pokegrid";
import pokelist from "@/lib/pokeapi";

interface PokemonProps {
  image: string;
}

const PokemonPage: React.FC<PokemonProps> = async ({ image }) => {
  const pokemonList = await pokelist();

  return (
    <>
      <Pokegrid pokelist={pokemonList} image={image} />
    </>
  );
};

export default PokemonPage;
