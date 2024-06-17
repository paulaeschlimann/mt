"use client"
import { useState } from "react"
import { PokemonCard } from "../components/pokemon-card"

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    const [ searchText, setSearchText ] = useState("")

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter((pokemon: any) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    const filteredPokemonList = searchFilter(pokemonList)

    return (
        <>
            <div>
                <h3 className="text-2xl py-6 text-center">Search for pokemon.</h3>
                <div className="grid w-full max-w-sm m-auto items-center gap-1.5">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Pokemon Name
                    </label>
                    <input
                        type="text"
                        value={searchText}
                        autoComplete="off"
                        id="pokemonName"
                        placeholder="Type pokemon name"
                        onChange={(e) => setSearchText(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text--sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
                <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
            </div>

            <div className="mb-32 block sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-[112rem] text-center m-auto lg:mb-0 lg:text-left">
                {filteredPokemonList.map((pokemon : any) => {
                    return (
                        <PokemonCard name={pokemon.name} imageUrl={pokemon.imageUrl} key={pokemon.name} types={pokemon.types} />
                    )
                })}
            </div>
        </>
    )
}