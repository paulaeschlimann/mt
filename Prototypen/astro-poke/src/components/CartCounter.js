import { LitElement, css } from 'lit';
import { cartStore } from '../store/cartStore'

export default class CartCounter extends LitElement {
    static properties = {
        count: { state: true },
        includeText: { type: Boolean }
    };

    constructor() {
        super();

        this.count = 0
        this.includeText = false
    }

    firstUpdated() {
        cartStore.subscribe((value) => {
            this.count = value.reduce((acc, v) => acc + v.quantity, 0)
        })
    }

    render() {
        const itemText = this.count === 1 ? 'item' : 'items'
        const text = this.includeText ? `${this.count} ${itemText}` : this.count

        return text
    }

    static styles = css`
      .container {
        position: fixed;
        right: 0;
        top: var(--nav-height);
        height: 100vh;
        background: var(--color-bg-2);
        padding-inline: 2rem;
        min-width: min(90vw, 300px);
        border-left: 3px solid var(--color-bg-3);
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

customElements.define('cart-counter', CartCounter);