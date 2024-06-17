export { }

declare global {
    interface ICartItem {
        name: string,
        quantity: number
    }

    interface ICartContextType {
        cartItems: CartItem[] | null,
        handleAddToCart: (name: string) => void, 
        addToCart: (cartItem: any) => void, 
        deleteFromCart: (cartItem: any) => void
    }

    type CartContextType = {
        cartItems: CartItem[],
        handleAddToCart: (name: string) => void, 
        addToCart: (name: string) => void,
        deleteFromCart: (cartItem: any) => void
    }

    type CartItem = {
        name: string,
        quantity: number
    }
}