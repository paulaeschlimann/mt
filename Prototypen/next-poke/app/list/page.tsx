import Image from "next/image";
import { PokemonGrid } from "../components/pokemon-grid";
import { getPokemonList } from "../lib/pokemonAPI"

export default async function Home() {
  const pokemonList = await getPokemonList()

  return (
    <div className="w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)]">
      <PokemonGrid pokemonList={pokemonList}/>
    </div>
  );
}
