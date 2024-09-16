"use client"

import { useCart } from "@/context"
import { CartCounter } from "./cart-counter"

export function Cart() {
    const { cartItems, addToCart, deleteFromCart } = useCart()

    const increaseQuantity = (cartItem) => {
        const newQuantity = cartItem.quantity + 1;
        const item = { ...cartItem, quantity: newQuantity };
    
        addToCart(item);
    }

    const decreaseQuantity = (cartItem) => {
        const newQuantity = cartItem.quantity - 1;

        if (newQuantity < 1) {
            removeFromCart(cartItem)
        } else {
            const item = { ...cartItem, quantity: newQuantity };
            addToCart(item);
        }        
    }

    function removeFromCart(cartItem) {
        deleteFromCart(cartItem)
    }

    return (
        <>
            <section className="section-cart-summary">
                <div className="container-cart-summary">
                    <span className="cart-summary">
                        <CartCounter includeText />
                    </span>
                </div>
            </section>

            <section className="section-cart">
                <div className="container">
                    <div className="cart-container">
                        <div className="cart">
                            {cartItems && cartItems.map((cartItem) => {
                                return (
                                    <div key={cartItem.name}>
                                        <article className="cart-item-container">
                                            <div className="cart-item">
                                                <div className="item-details-container">
                                                    <p className="item-details">
                                                        {cartItem.name}
                                                    </p>
                                                </div>
                                                <div className="quantity-container">
                                                    <div className="quantity-controls">
                                                        <button
                                                            data-action="decrement"
                                                            className="quantity-button button-left"
                                                            onClick={() => decreaseQuantity(cartItem)}
                                                        >
                                                            <span className="cart-button-label">
                                                                −
                                                            </span>
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="quantity"
                                                            name="custom-input-number"
                                                            value={cartItem.quantity}
                                                            readOnly
                                                        ></input>
                                                        <button
                                                            data-action="increment"
                                                            className="quantity-button button-right"
                                                            onClick={() => increaseQuantity(cartItem)}
                                                        >
                                                            <span className="cart-button-label">
                                                                +
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="button-container">
                                                    <div className="button-remove-container">
                                                        <a
                                                            className="button-remove"
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
                                        <hr className="item-h-line" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}