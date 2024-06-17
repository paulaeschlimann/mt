interface PokemonStatProps {
    name: string,
    value: number
}

export function PokemonStat({ name, value } : PokemonStatProps) {

    return (
        <>
            <div className="w-full">

            
                <div className="mb-2 flex items-center justify-between gap-4">
                    <div color="blue-gray">
                        {name}
                    </div>
                    <div color="blue-gray">
                        {value}
                    </div>
                </div>
                <progress className="w-full" value={value} max="100" />
            </div>
        </>
    )
}