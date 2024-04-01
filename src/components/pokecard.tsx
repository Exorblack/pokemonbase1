import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Link from "next/link";
import Pokeimage from "./pokeimage";
import { getpoke } from "@/lib/pokeapi";
import { useEffect, useState } from "react";

interface pokeprop {
  name : string;
  image: string;
}
function Pokecard ({ name, image }:  pokeprop) {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const data = await getpoke(name);
        setPokeData(data);
      
    };

    fetchData();
  }, [name]);

  if (!pokeData) {
    return (
      <div className="flex justify-center items-center"></div>
    )
  }
      return (

      <main>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-6 max-w-lg" key={`${name} card `}>
        <Link href={name}>
          <Card className="hover:bg-gray-950">
            <div className="flex items-center justify-center">
          <Pokeimage image={pokeData.sprites.other["official-artwork"].front_default} name={name}/>
            </div>
            <CardHeader>
              <CardTitle>{name.charAt(0).toUpperCase() + name.slice(1)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Click to see {name} Content</p>
            </CardContent>

          </Card>
        </Link>
        </div>
      </main>
    );
  };
  
  export default Pokecard;
  