import { LitElement, html, css } from 'lit';
import { cartStore, changeQty, removeCartItem } from '../store/cartStore'
import CartItem from './CartItem.js';

export default class ShoppingCart extends LitElement {
    static properties = {
        cart: { state: true },
    };

    connectedCallback() {
        super.connectedCallback()
        this.cart = []
    }

    firstUpdated() {
        cartStore.subscribe((value) => {
            this.cart = value
        })
    }

    increase(e) {
        changeQty(e.detail.id, 'incr')
    }

    decrease(e) {
        changeQty(e.detail.id, 'decr')
    }

    delete(e) {
        removeCartItem(e.detail.id)
    }

    render() {
        return this.cart && this.cart.length > 0 ? 
            this.cart.map(cartItem => html`
                <div class="cart-item-container">
                    <cart-item
                        .id=${cartItem.id}
                        .name=${cartItem.name}
                        .qty=${cartItem.quantity}
                        @increase-qty=${this.increase}
                        @decrease-qty=${this.decrease}
                        @delete-qty=${this.delete}
                    ></cart-item>
                </div>
                <hr class="item-h-line">`) 
            : html`Your cart is empty!`
    }

    static styles = css`
        .cart-item-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            border: 1px solid rgb(229, 231, 235);
            border-radius: .25rem;
        }
        .item-h-line {
            border-color: rgb(175, 156, 156);
        }
        .container {
            position: fixed;
            right: 0;
            top: var(--nav - height);
            height: 100vh;
            background: var(--color - bg - 2);
            padding-inline: 2rem;
            min-width: min(90vw, 300px);
            border-left: 3px solid var(--color - bg - 3);
        }

        .list {
            list-style: none;
            padding: 0;
        }

        .listItem {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .listItem * {
            margin-block: 0.3rem;
        }

        .listItemImg {
            width: 4rem;
        }
    `;
}

customElements.define('shopping-cart', ShoppingCart);