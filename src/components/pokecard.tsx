import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Link from "next/link";
import Pokeimage from "./pokeimage";

interface pokeprop {
  name : string;
  image: string;
}
  
function pokecard ({ name, image }:  pokeprop) {
    return (

      <main>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-6 max-w-lg" key={`${name} card `}>
        <Link href={name}>
          <Card className="hover:bg-gray-950">
          <Pokeimage image={image} name={name}/>
            <CardHeader>
              <CardTitle>{name.charAt(0).toUpperCase() + name.slice(1)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Click to see Card Content</p>
            </CardContent>

          </Card>
        </Link>
        </div>
      </main>
    );
  };
  
  export default pokecard;
  