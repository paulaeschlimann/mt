"use client"

import { useCart } from "@/context"
import { ItemCount } from "./ItemCount"

export function Cart() {
    const { cartItems, addToCart, deleteFromCart } = useCart() as CartContextType 

    console.log(cartItems)

    const increaseQuantity = (cartItem: any) => {
        console.log(`increment ${cartItem.name}`)

        const newQuantity = cartItem.quantity + 1;
        const item = { ...cartItem, quantity: newQuantity };
    
        console.log(item)

        addToCart(item);
    }

    const decreaseQuantity = (cartItem: any) => {
        const newQuantity = cartItem.quantity - 1;

        if (newQuantity < 1) {
            removeFromCart(cartItem)
        } else {
            const item = { ...cartItem, quantity: newQuantity };
            addToCart(item);
        }        
    }

    function removeFromCart(cartItem: any) {
        console.log(cartItem.name)
        deleteFromCart(cartItem)
    }

    const cartItemsCount = cartItems?.reduce((acc: number, x: CartItem) => acc + x.quantity, 0)

    return (
        <>
            <section className="py-5 sm:py-7 bg-blue-100">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <span className="text-3xl font-semibold mb-2">
                        <ItemCount cartItemsCount={cartItemsCount} />
                    </span>
                </div>
            </section>

            <section className="py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <main className="md:w-3/4 flex-auto">
                            {cartItems && cartItems.map((cartItem: CartItem) => {
                                return (
                                    <div key={cartItem.name}>
                                        <article className="border border-gray-200 bg-white shadow--sm rounded mb-5 p-3 lg:p-5">
                                            <div className="flex flex-wrap lg:flex-row gap-5 mb-4 items-center">
                                                <div className="w-full lg:w-1/4">
                                                    <p className="mt-1 text-gray-400">
                                                        {cartItem.name}
                                                    </p>
                                                </div>
                                                <div className="w-24">
                                                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                        <button
                                                            data-action="decrement"
                                                            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                                            onClick={() => decreaseQuantity(cartItem)}
                                                        >
                                                            <span className="m-auto text-2xl font-thin">
                                                                −
                                                            </span>
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                                                            name="custom-input-number"
                                                            value={cartItem.quantity}
                                                            readOnly
                                                        ></input>
                                                        <button
                                                            data-action="increment"
                                                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                                            onClick={() => increaseQuantity(cartItem)}
                                                        >
                                                            <span className="m-auto text-2xl font-thin">
                                                                +
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex-auto">
                                                    <div className="float-right">
                                                        <a
                                                            className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                                                            onClick={() =>
                                                                removeFromCart(cartItem)
                                                            }
                                                        >
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <hr className="my-4" />
                                    </div>
                                )
                            })}
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}