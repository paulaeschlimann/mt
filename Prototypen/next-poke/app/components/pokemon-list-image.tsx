import Image from "next/image"

export function PokemonListImage({ image, name } : { image: string, name: string }) {
    return (
        <Image
                src={image}
                alt={"Picture of " + name}
                sizes="320px"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                width={500}
                height={300}
            />
    )
}