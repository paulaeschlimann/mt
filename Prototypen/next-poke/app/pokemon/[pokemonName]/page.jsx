import { getPokemon } from "../../../data/data-fetch"
import { CartButton } from "@/app/components/cart-button";

export default async function PokemonPage({ params }) {
    const { pokemonName } = params
    const pokemonObject = await getPokemon(pokemonName)

    return (
        <div className="details-page">
            <div className="pokemon-info">
                <h1>
                    {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} #{pokemonObject.id}
                </h1>
                <img src={pokemonObject.sprites.other["official-artwork"].front_default} alt={pokemonObject.name} width={400} height={400} />
            </div>

            <div className="types-container">
                {pokemonObject.types.map((typeObject) => {
                    const typeName = typeObject.type.name

                    return (
                        <div className="stat-item-property" key={typeName}>{typeName.charAt(0).toUpperCase() + typeName.slice(1)}</div>
                    )
                })}
            </div>

            <div className="stat-item-property">
                <div>Height</div>
                <div>{pokemonObject.height}</div>
            </div>
            <hr className="item-h-line" />

            <div className="stat-item-property">
                <div>Weight</div>
                <div>{pokemonObject.weight}</div>
            </div>
            <hr className="item-h-line" />

            <div className="stat-container">
                {pokemonObject.stats.map((statObject) => {
                    const statName = statObject.stat.name
                    const statValue = statObject.base_stat

                    return (
                        <>
                            <div className="stat-item-container" key={statName}>
                                <div className="stat-item">


                                    <div className="stat-item-property">
                                        <div>
                                            {statName}
                                        </div>
                                        <div>
                                            {statValue}
                                        </div>
                                    </div>
                                    <progress className="stat-indicator" value={statValue} max="100" />
                                </div>
                            </div>
                            <hr className="item-h-line" />
                        </>
                    )
                })}
            </div>
            <div className="cart-button">
                <CartButton name={pokemonName} />
            </div>
        </div>
    )
}