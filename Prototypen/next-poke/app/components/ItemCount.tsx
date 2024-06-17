export function ItemCount({ cartItemsCount } : { cartItemsCount: number} ) {

    if (cartItemsCount !== null) {
        return (
            <>
                {cartItemsCount} item{cartItemsCount === 0 || cartItemsCount > 1 ? 's' : ''} in cart
            </>
        )
    } else {
        return (
            <>
                0 items in cart
            </>
        )
    }
}