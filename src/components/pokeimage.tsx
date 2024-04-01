import  Image  from "next/image";

interface ima{
  image:string,
  name:string
}

export default function pokeimage({image,name}:ima){
    return(
        <div>
        <Image
          className="pt-10"
          src={image}
          alt={name}
          width="250"
          height="250"              
        ></Image>
        
        </div>
    )
}