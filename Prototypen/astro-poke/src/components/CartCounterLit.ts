import { LitElement, html, css } from 'lit';
import { cartItems } from '../cartStore2';
import { StoreController } from '@nanostores/lit';
import type { CartItem } from '../cartStore2';

export default class CartCounterLit extends LitElement {
    private getCartItems = new StoreController(this, cartItems);

    connectedCallback(): void {
      super.connectedCallback()

      //this.getCartItems = (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {})
      const cart = localStorage.getItem('cart2')
      cartItems.set(cart ? JSON.parse(cart) : [])
    }

    renderCartItem(cartItem: CartItem) {
        return html`
      <li class="listItem">
        <h3>${cartItem.name}</h3>
        <p>${cartItem.quantity}</p>
      </li>
    `;
    }

    render() {
        //console.log(this.getCartItems.value)
        const values = Object.values(this.getCartItems.value)
        console.log([...values].reduce((acc, v) => acc + v.quantity, 0))
        return html`
          <aside class="container">
            ${Object.values(this.getCartItems).length
                    ? html`
                  <ul class="list">
                    ${values.map((cartItem) =>
                        this.renderCartItem(cartItem)
                    )}
                  </ul>
                `
                    : html`<p>Your cart is empty!</p>`
                }
          </aside>
        `;
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

customElements.define('cart-counter-lit', CartCounterLit);