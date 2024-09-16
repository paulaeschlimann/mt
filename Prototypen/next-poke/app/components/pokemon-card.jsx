import Link from "next/link"
import { CartButton } from "./cart-button"

export function PokemonCard({ name, imageUrl, types }) {
    return (
        <article className="article-item">
            <Link 
                href={`pokemon/${name}`}
                key={name + "Card"}
                className="article-link"
                aria-label={name}
            >
            </Link>
            <h2 className="article-heading">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>
            <div className="article-image">
                <img src={imageUrl} alt={name} width={500} height={300} decoding="async" loading="lazy" />
            </div>
            <div className="details-1">
            {
                types && types.map((type) => {
                    return (
                        <div key={type.name}>
                            {type.name}
                        </div>
                    )
                })
            }
            </div>
            <div className="action-buttons">
                <CartButton name={name} />
            </div>
        </article>        
    )
}