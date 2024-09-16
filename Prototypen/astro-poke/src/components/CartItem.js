import { LitElement, html, css } from 'lit';

export default class CartItem extends LitElement {
    static properties = {
        id: { type: Number, state: true },
        name: { type: String, state: true },
        qty: { type: Number, state: true },
    }

    constructor() {
        super()
        this.id = 0
        this.name = ""
        this.qty = 0
    }

    increase() {
        const event = new CustomEvent('increase-qty', {
            bubbles: true,
            composed: true,
            detail: {
                id: this.id,
            }
        })

        this.dispatchEvent(event)
    }

    decrease() {
        const event = new CustomEvent('decrease-qty', {
            bubbles: true,
            composed: true,
            detail: {
                id: this.id,
            }
        })

        this.dispatchEvent(event)
    }

    delete() {
        const event = new CustomEvent('delete-qty', {
            bubbles: true,
            composed: true,
            detail: {
                id: this.id,
            }
        })

        this.dispatchEvent(event)
    }

    render() {
        return html`
            <div class="cart-item">
                <div class="item-details-container">
                    <p class="item-details">
                        ${this.name}
                    </p>
                </div>
                <div class="quantity-controls-container">
                    <div class="quantity-controls">
                        <button @click=${this.decrease} class="quantity-button button-left">-</button>
                        <input type="number" class="quantity" value=${this.qty} readonly />
                        <button @click=${this.increase} class="quantity-button button-right">+</button>
                    </div>
                </div>
                <div class="button-container">
                    <div class="button-remove-container">
                        <button @click=${this.delete} class="button-remove">Remove</button>
                    </div>
                </div>
            </div>
        `
    }

    static styles = css`
        .cart-item {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: center;
            gap: 1.25rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        .item-details-container {
            width: 25%;
        }
        .item-details {
            margin: 0;
        }
        .quantity {
            display: flex;
            font-weight: 600;
            text-align: right;
            background-color: rgb(209, 213, 219);
            align-items: center;
            width: 100%;
        }

        .quantity-controls-container {
            width: 8rem;
        }

        .quantity-controls {
            background-color: transparent;
            border-radius: .5rem;
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 2.5rem;
            margin-top: .25rem;
            position: relative;
        }

        .quantity-controls > input,
        .quantity-controls > button {
            border: 0px solid white;
        }

        .quantity-button {
            color: rgb(75, 85, 99);
            background-color: rgb(209, 213, 219);
            cursor: pointer;
            width: 5rem;
            height: 100%;
        }

        .quantity-button:hover {
            color: rgb(55, 65, 81);
            background-color: rgb(156, 163, 175);
        }

        .button-left {
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
        }

        .button-right {
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
        }

        .button-container {
            flex: 1 1 auto;
        }

        .button-remove-container {
            float: right;
        }

        .button-remove {
            color: rgb(220, 38, 38);
            padding-top: .5rem;
            padding-bottom: .5rem;
            padding-left: 1rem;
            padding-right: 1rem;
            border: 1px solid rgb(229, 231, 235);
            border-radius: .375rem;
            cursor: pointer;
            display: inline-block;
            transition-duration: 150ms;
        }

        .button-remove:hover {
            color: #fff;
            background-color: rgb(220, 38, 38);
            border-color: rgb(136, 1, 1);
        }
    `
}

customElements.define('cart-item', CartItem);