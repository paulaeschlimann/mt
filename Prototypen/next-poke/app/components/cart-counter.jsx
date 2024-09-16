"use client"

import { useCart } from "@/context"

export function CartCounter({ includeText = false }) {
    const { cartItems } = useCart()
    const cartItemsCount = cartItems?.reduce((acc, x) => acc + x.quantity, 0)

    let text = ""
    
    if (cartItemsCount === undefined) {
        text = "..."
    } else {
        const itemText = cartItemsCount === 1 ? "item" : "items"
        text = includeText ? `${cartItemsCount} ${itemText}` : `${cartItemsCount}`
    }

    return (
        <>{text}</>
    )
}