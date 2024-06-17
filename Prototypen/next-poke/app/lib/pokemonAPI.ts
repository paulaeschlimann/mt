import { pokemons } from "@/data/pokemon"

const POKEMON_API = "https://pokeapi.co/api/v2/"
const POKEMON_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0")
    const data = await response.json()

    /*const dataEnhanced = data.results.map((obj : any) => {
        const withoutTrailingSlash = obj.url.slice(0, -1)
        const pokemonNumber = withoutTrailingSlash.substring(withoutTrailingSlash.lastIndexOf('/')+1)
        obj.imageUrl = `${POKEMON_IMAGE_URL}${pokemonNumber}.png`
        
        return obj
    })*/

    let mergedData = []

    for(let i = 0; i < data.results.length; i++) {
        const withoutTrailingSlash = data.results[i].url.slice(0, -1)
        const pokemonNumber = +withoutTrailingSlash.substring(withoutTrailingSlash.lastIndexOf('/')+1)
        const imageUrl = `${POKEMON_IMAGE_URL}${pokemonNumber}.png`

        mergedData.push({
            ...data.results[i],
            id: pokemonNumber,
            imageUrl,
            ...(pokemons.find((itmInner: any) => itmInner.id === pokemonNumber))
        })
        
    }

    //console.log(dataEnhanced)
    //return data.results
    //return dataEnhanced
    return mergedData
}

export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name.toLowerCase())
    const data = await response.json()
    return data
}