import { LitElement, html, css } from 'lit';
import { addCartItem } from '../store/cartStore';

export class CartButton extends LitElement {
    static properties = {
        itemId: { attribute: true },
        name: { attribute: true },
    };

    constructor() {
        super();
    }

    addToCart(e) {
        e.preventDefault();
        addCartItem({
            id: this.itemId,
            name: this.name
        });
    }

    render() {
        return html`<button class="button" @click=${this.addToCart}>Add to cart </button>`;
    }

    static styles = css`
        .button {
            position: relative;
            cursor: pointer;
            transition-duration: 150ms;
            line-height: 1.5;
            font-weight: 500;
            border: 2px solid rgb(21, 94, 117);
            border-radius: 0.25rem;
            background-color: transparent;
            padding: 0.375rem;
        }

        .button:hover {
            color: #fff;
            background-color: rgb(4, 59, 76);
            border-color: rgb(21, 94, 117);
        }
    `;
}

customElements.define('cart-button', CartButton)