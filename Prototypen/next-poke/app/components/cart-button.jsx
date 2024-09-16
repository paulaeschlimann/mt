"use client"

import { useCart } from "@/context"
import { createContext } from "react"

export const CartContext = createContext(undefined)

export function CartButton({ name }) {
    const { cartItems, handleAddToCart } = useCart()

    return (
        <button className="action-button" onClick={() => handleAddToCart(name)}>Add to cart</button>
    )
}