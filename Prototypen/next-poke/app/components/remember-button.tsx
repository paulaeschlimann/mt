"use client"

import GlobalState, { useCart } from '@/context'
import { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext(undefined)

interface RememberButtonProps {
    name: string,
}

type CartItem = string

export function RememberButton({ name }: RememberButtonProps) {
    //const [cartItems, setCartItems] = useState<CartItem[]>([])
    const { cartItems, handleAddToCart } = useCart() as ICartContextType

    return (
        <>
            <button className="relative inline-block rounded bg-primary border-2 border-solid border-cyan-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-slate-900 hover:border-cyan-200 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" onClick={() => handleAddToCart(name)}>Add to cart</button>
        </>
    )
}