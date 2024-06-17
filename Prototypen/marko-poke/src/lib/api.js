import { pokemons } from "../data/pokemon"

const POKEMON_API = "https://pokeapi.co/api/v2/"
const POKEMON_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0")
    const data = await response.json()

    /*const dataEnhanced = data.results.map((obj) => {
        const withoutTrailingSlash = obj.url.slice(0, -1)
        const pokemonNumber = withoutTrailingSlash.substring(withoutTrailingSlash.lastIndexOf('/')+1)
        obj.id = +pokemonNumber
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
            ...(pokemons.find((itmInner) => itmInner.id === pokemonNumber))
        })
    }

    //console.log(dataEnhanced)
    //return data.results
    //return dataEnhanced

    return mergedData
}

export async function getPaginatedPokemonList(offset = 0, limit = 5) {
    console.log(`pokemon?limit=${limit}&offset=${offset}`)
    const response = await fetch(POKEMON_API + `pokemon?limit=${limit}&offset=${offset}`)
    const data = await response.json()

    const dataEnhanced = data.results.map((obj) => {
        const withoutTrailingSlash = obj.url.slice(0, -1)
        const pokemonNumber = withoutTrailingSlash.substring(withoutTrailingSlash.lastIndexOf('/')+1)
        obj.id = +pokemonNumber
        obj.imageUrl = `${POKEMON_IMAGE_URL}${pokemonNumber}.png`
        return obj
    })

    /*if (data.results.some(result => result.id > 1025)) {
        console.log('stop')
        data.next = null
    }*/

    data.results = data.results.filter(result => result.id <= 1025)

    if (data.results[0].id + limit > 1025) {
        console.log('stop')
        data.next = null
    }

    console.log(data.next)

    /*data.results0 = data.results.map((obj) => {
        const withoutTrailingSlash = obj.url.slice(0, -1)
        const pokemonNumber = withoutTrailingSlash.substring(withoutTrailingSlash.lastIndexOf('/')+1)
        obj.imageUrl = `${POKEMON_IMAGE_URL}${pokemonNumber}.png`
        return obj
    })*/

    //console.log(data.results)
    //console.log(data.results0)

    //console.log(dataEnhanced)
    return data.results
    //return dataEnhanced
}

export async function getPokemon(name) {
    const response = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await response.json()
    return data
}