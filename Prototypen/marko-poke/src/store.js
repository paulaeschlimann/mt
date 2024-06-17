export let cartItems = null

export const addCartItem = (itemToAdd)  => {
    console.log(`add to cart ${itemToAdd.name}`)
    let cartItems = loadCart()

    const existingItem = cartItems.find(item => item.id === itemToAdd.id)
    console.log(existingItem)

    if (existingItem) {
        cartItems = cartItems.map(item => {
            if (item.id !== itemToAdd.id) {
                return item
            } else {
                return {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }   
            }
        })
    } else {
        cartItems = [...cartItems, {
            id: itemToAdd.id,
            name: itemToAdd.name,
            quantity: 1
        }]
    }

    //cartItems = [...cartItems, name]
    saveCart(cartItems)
}

export const updateCartItem = (itemToUpdate) => {
    let cartItems = loadCart()

    const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === itemToUpdate.id) {
            return { ...cartItem, ...itemToUpdate }
        } else {
            return cartItem
        }
    })

    saveCart(updatedCartItems)

    return updatedCartItems
}

export const removeCartItem = (itemToRemove) => {
    let cartItems = loadCart()

    const remainingItems = cartItems.filter(item => item.id !== itemToRemove.id)

    console.log("remainingItems")
    console.log(remainingItems)

    saveCart(remainingItems)

    return remainingItems
}

const saveCart = (cartItems) => {
    const cart = loadCart()

    localStorage.setItem('cart', JSON.stringify(cartItems))
    const cartItemCount = new CustomEvent('cart-item-count-update', {
        detail: {
            count: cartItems.length
        }
    })

    window.dispatchEvent(cartItemCount)

    const cartItemSum = new CustomEvent('cart-item-sum-update', {
        detail: {
            sum: cartItems?.length ? cartItems.reduce((acc, v) => acc + v.quantity, 0) : 0
        }
    })

    window.dispatchEvent(cartItemSum)
}

export const loadCart = () => {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
}

export const cartItemsCount = () => {
    const cart = loadCart()
    return cart ? cart.length : 0
}

export const cartItemsSum = () => {
    const cart = loadCart()
    console.log(cart?.length ? cart.reduce((acc, v) => acc + v.quantity, 0) : 0)
    return cart?.length ? cart.reduce((acc, v) => acc + v.quantity, 0) : 0
}