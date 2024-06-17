import { LitElement, html, css } from 'lit';
import { cartStore, addToStore } from '../cartStore';
import { withStores } from '@nanostores/lit';

export class CartButton extends withStores (LitElement, [cartStore]) {
    
    static properties = {
        name: { type: String },
    };
    
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.name
    }

    addToCart() {
        console.log(this.name)

        console.log([...cartStore.get(), this.name])

        //cartStore.set([...cartStore.get(), this.name])

        addToStore(this.name)
    }
    
    render() {
        return html`<button class="button" @click=${this.addToCart}>Add ${this.name} to cart </button>`;
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
}

customElements.define('cart-button', CartButton);