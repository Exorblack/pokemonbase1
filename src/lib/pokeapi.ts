

const pokeapiurl = "https://pokeapi.co/api/v2"

export default async function pokelist() {
    const res = await fetch(`${pokeapiurl}/pokemon?limit=260&offset=0`)
    const data = await res.json()
    return data.results;

}

export async function getpoke(name: string) {
  const res = await fetch(`${pokeapiurl}/pokemon/${name}`);
  //if (!res.ok) {
   // throw new Error(`Failed to fetch Pokemon ${name}: ${res.status} ${res.statusText}`);
//}
  const data = await res.json();
  return data;
}