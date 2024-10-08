"use client"

import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(null)

function GlobalState({ children }) {
    const CART_LOCAL_STORAGE = "cart"
    const [cartItems, setCartItems] = useState(null)

    const handleAddToCart = (name) => {
        if (!cartItems) return

        const cartItemIndex = cartItems.findIndex(item => item.name === name)
        const newCartItem = {
            name: name,
            quantity: 1
        }

        if (cartItemIndex !== -1) {
            cartItems[cartItemIndex].quantity++
        } else {
            cartItems.push(newCartItem)
        }

        setCartItems([...cartItems])
    }

    const addToCart = (updatedCartItem) => {
        if (!cartItems) return

        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.name === updatedCartItem.name) {
                return { ...cartItem, ...updatedCartItem }
            } else {
                return cartItem
            }
        })

        setCartItems(updatedCartItems)
    }

    const deleteFromCart = (cartItemToBeRemoved) => {
        if (!cartItems) return
        
        const updatedCartItems = cartItems.filter(cartItem => cartItem.name !== cartItemToBeRemoved.name)

        setCartItems(updatedCartItems)
    }

    useEffect(() => {
        const cart = localStorage.getItem(CART_LOCAL_STORAGE)
        setCartItems(cart !== null ? JSON.parse(cart) : [])
    }, [])

    useEffect(() => {
        if (cartItems !== null) {
            localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(cartItems))
        }
    }, [cartItems])

    return (
        <CartContext.Provider value={{ cartItems, handleAddToCart, addToCart, deleteFromCart }} >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    return context
}

export default GlobalState