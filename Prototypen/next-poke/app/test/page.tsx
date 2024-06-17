import { PokemonImage } from "../components/pokemon-image"
import { PokemonListImage } from "../components/pokemon-list-image";
import { PokemonResponsiveFillImage } from "../components/pokemon-resp-fill-image"

export default async function PokemonPage() {

    return (
        <>
            <div className="mb-32 grid grid-cols-1 xl:grid-cols-1 text-center lg:mb-0 lg:text-left">
                <div className="m-4">
                    <PokemonImage
                        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        name="bulbasaur"
                    />
                </div>
                <div className="m-4">
                    <PokemonListImage
                        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                        name="Ivysaur"
                    />
                </div>
                <div className="m-4">
                    <PokemonResponsiveFillImage
                        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
                        name="venusaur"
                    />
                </div>
            </div>
        </>
    )
}