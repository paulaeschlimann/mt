import { LitElement, html, css } from 'lit';
import { cartItems } from '../cartStore2';
import { StoreController } from '@nanostores/lit';

export class CartCounter extends LitElement {
    getCartItems = new StoreController(this, cartItems)
    
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback()

        const cartItems = localStorage.getItem('cart2') ? JSON.parse(localStorage.getItem('cart2')) : {}
        console.log(cartItems)
    }
    
    static styles = css`
        .button {
            position: relative;
            border: 1px solid white;
            border-radius: 0.25rem;
            background: transparent;
            color: white;
            padding: 0.375rem;
        }
    `;
    
    render() {
        const values = Object.values(this.getCartItems.value)
        const cartItemSum = [...values].reduce((acc, v) => acc + v.quantity, 0)
        console.log(values)
        console.log(cartItemSum)

        return html`<p>${cartItemSum} ${cartItemSum === 1 ? 'item' : 'items'}</p>`;
    }
}

customElements.define('cart-counter', CartCounter);