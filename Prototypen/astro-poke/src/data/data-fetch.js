import { pokemons } from "./pokemon"

const POKEMON_API = "https://pokeapi.co/api/v2/"
const POKEMON_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

export async function getAllPokemon() {
    
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0")
    const data = await response.json()

    let mergedData = []

    for(let i = 0; i < data.results.length; i++) {
        const withoutTrailingSlash = data.results[i].url.slice(0, -1)
        const pokemonNumber = +withoutTrailingSlash.substring(withoutTrailingSlash.lastIndexOf('/')+1)
        const imageUrl = `${POKEMON_IMAGE_URL}${pokemonNumber}.png`

        mergedData.push({
            ...data.results[i],
            id: pokemonNumber,
            imageUrl,
            ...(pokemons.find((itmInner) => itmInner.id === pokemonNumber))
        })
    }

    return mergedData
}

export async function getPokemon(pokemonName) {
    
    const response = await fetch(POKEMON_API + "pokemon/" + pokemonName.toLowerCase())

    if (response.status !== 200) {
        return response
    }
    
    const data = await response.json()
    data.imageUrl = `${POKEMON_IMAGE_URL}${data.id}.png`
    
    return data
}