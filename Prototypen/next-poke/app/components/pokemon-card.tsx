import Link from "next/link"
import { PokemonListImage } from "../components/pokemon-list-image"
import { RememberButton } from "./remember-button"

interface PokemonCardProps {
    name: string,
    imageUrl: string,
    types: any[]
}

export function PokemonCard({ name, imageUrl, types } : PokemonCardProps) {
    return (
        <article className="relative group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link 
                href={name} 
                key={name + "Card"}
                className="absolute w-full h-full inset-0"
            >
            </Link>
            <h2 className="text-2xl text-center font-semibold">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>
            <div className="m-4 max-w-80 aspect-square">
                {/*<PokemonListImage
                    image={imageUrl}
                    name={name}
                />*/}
                <img src={imageUrl} alt={name} width={500} height={300} decoding="async" loading="lazy" />
            </div>
            <div className="flex space-x-2">
            {
                types && types.map((type: any) => {
                    return (
                        <div key={type.name} className="p-2 rounded-md border-2 border-gray-600">
                            {type.name}
                        </div>
                    )
                })
            }
            </div>
            <div className="flex justify-end">
                <RememberButton name={name} />
            </div>
        </article>        
    )
}