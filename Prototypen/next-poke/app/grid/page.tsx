import Link from "next/link"

import { getPokemonList } from "../lib/pokemonAPI"
import { PokemonCard } from "../components/pokemon-card"

interface PokemonGridProps {
    pokemonList: any
}

export default async function PokemonTestGrid() {

    const pokemonList = await getPokemonList()

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter((pokemon: any) =>
            pokemon.name.toLowerCase().includes("chu".toLowerCase())
        )
    }

    const filteredPokemonList = searchFilter(pokemonList)

    return (
        <>
            <div className="mb-32 w-full max-w-screen-xl grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center lg:mb-0 lg:text-left">
                {filteredPokemonList.map((pokemon : any) => {
                    return (
                        <Link
                            href={pokemon.name}
                            className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            key={pokemon.name + "Card"}
                        >
                            <h2 className="text-2xl text-center font-semibold">
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            </h2>

                            <div className="max-w-80 aspect-square">
                                Image Container
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}