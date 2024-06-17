import { getPokemon } from "../lib/pokemonAPI"
import { PokemonImage } from "../components/pokemon-image"
import { PokemonStat } from "../components/pokemon-stat";

export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {
    const { pokemonName } = params
    const pokemonObject = await getPokemon(pokemonName)

    return (
        <>
            <h1 className="text-4xl text-bold pt-4">
                {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
            </h1>
            <div className="m-4" style={{ position: "relative", width: "300px", height: "300px"}}>
                <PokemonImage
                    image={pokemonObject.sprites.other['official-artwork'].front_default}
                    name={pokemonObject.name}
                />
            </div>
            <h3>ID: {pokemonObject.id}</h3>
            <h3>Weight: {pokemonObject.weight}</h3>
            <h3>Height: {pokemonObject.height}</h3>
            <div className="flex-col">
                {pokemonObject.stats.map( (statObject : any) => {
                    const statName = statObject.stat.name
                    const statValue = statObject.base_stat
                    
                    return (
                        <div className="flex items-stretch" style={{width: "500px"}} key={statName}>
                            <PokemonStat name={statName} value={statValue} />
                        </div>
                    )
                })}
            </div>
            <div className="flex-col">
                {pokemonObject.types.map( (typeObject : any) => {
                    const typeName = typeObject.type.name
                    
                    return (
                        <div className="flex items-stretch" style={{width: "500px"}} key={typeName}>
                            <h3 className="p-3 w-2/4">{typeName}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="flex-col">
                <h2>Abilities</h2>
                {pokemonObject.abilities.map( (abilityObject : any) => {
                    const abilityName = abilityObject.ability.name
                    
                    return (
                        <div className="flex items-stretch" style={{width: "500px"}} key={abilityName}>
                            <h3 className="p-3 w-2/4">{abilityName}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="flex-col">
                {pokemonObject.forms.map( (formObject : any) => {
                    const formName = formObject.name
                    
                    return (
                        <div className="flex items-stretch" style={{width: "500px"}} key={formName}>
                            <h3 className="p-3 w-2/4">{formName}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )
}