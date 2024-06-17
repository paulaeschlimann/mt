import { LitElement, html, css } from 'lit';
import { cartItems, addCartItem } from '../cartStore2';
import { StoreController } from '@nanostores/lit';
import type { CartItem } from '../cartStore2';

export default class CartLit extends LitElement {
    private getCartItems = new StoreController(this, cartItems);

    declare cart2: [];

    static properties = {
      cart2: { state: true },
  };

    connectedCallback(): void {
      super.connectedCallback()

      //this.getCartItems = (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {})
      const cart = localStorage.getItem('cart2')
      cartItems.set(cart ? JSON.parse(cart) : [])
      console.log(cart ? JSON.parse(cart) : [])
      this.cart2 = cart ? JSON.parse(cart) : []
    }

    addToCart(e: SubmitEvent) {
      e.preventDefault();
      console.log(this)
      /*addCartItem({
          id: this.itemId,
          name: this.name
      });*/
  }

    renderCartItem(cartItem: CartItem) {
        return html`
      <li class="listItem">
        <h3>${cartItem.name}</h3>
        <p>${cartItem.quantity}</p>
        <button class="button" @click=${this.addToCart}>Add ${cartItem.name} to cart </button>
      </li>
    `;
    }

    render() {
        const values = Object.values(this.getCartItems.value)
        console.log([...values].reduce((acc, v) => acc + v.quantity, 0))
        return html`
          cart2 : ${Object.values(this.cart2)}
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

customElements.define('cart-lit', CartLit);