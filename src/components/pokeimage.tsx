import  Image  from "next/image";


export default function pokeimage({image,name}:{image:string,name:string}){
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