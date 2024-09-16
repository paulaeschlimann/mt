import { PokemonCard } from "./components/pokemon-card";
import { getPokemonList } from "../data/data-fetch"

export default async function Home() {
    const pokemonList = await getPokemonList()

    return (
        <div className="grid-container">
            {pokemonList.map((pokemon) => {
                return (
                    <PokemonCard name={pokemon.name} imageUrl={pokemon.imageUrl} key={pokemon.name} types={pokemon.types} />
                )
            })}
        </div>
    );
}