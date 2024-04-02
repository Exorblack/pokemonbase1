import Pokeimage from "@/components/pokeimage";
import { Progress } from "@/components/ui/progress";
import { getpoke } from "@/lib/pokeapi";

export default async function pokemonpage({params}:{params:{pokemonname:string}}){
    const {pokemonname :pokename} = params;
    const pokeobject= await getpoke(pokename); 
    //console.log(pokeobject);
    return (
        <>
        <div className="grid items-center justify-center">
            <h2 className="text-4xl text-center font-bold pt-10">{pokename.charAt(0).toUpperCase() + pokename.slice(1)}</h2>
               <Pokeimage
                image={pokeobject.sprites.other["official-artwork"].front_default}
                name={pokename}
                
               />
        </div>
        <div>
            <h3 className="grid items-center justify-center pt-4"> weight : {pokeobject.weight}</h3>
            <h3 className="grid items-center justify-center pt-4"> height : {pokeobject.height}</h3>
            <div className="text-center pt-10 font-semibold">Base stats</div>
            <div className="pt-10">
                {pokeobject.stats.map((statobj:any)=>{
                    const statname = statobj.stat.name
                    const statval = statobj.base_stat
                    return(
                        <div className="flex items-stretch w[500px] container" key={statname}>
                            <h3 className="p-3 w-2/4">{statname} : {statval}</h3>
                            <Progress className="w-2/4 m-auto" value={statval}></Progress>
                        </div>
                    )
                }
                )}
            </div>
        </div>
        </>
    );
}


