import { persistentAtom } from '@nanostores/persistent'

export const counterStore = persistentAtom('count', 0, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

export const cartStore = persistentAtom('cart', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
})

export function addCartItem(item) {
    const existingEntry = cartStore.value.find(e => e.id === item.id)

	if (existingEntry) {
        cartStore.set([...cartStore.value.map(e => {
            if (e.id === item.id) {
                return {
                    id: item.id,
                    name: item.name,
                    imageUrl: "",
                    quantity: e.quantity + 1,
                }
            } else {
                return e
            }
        })])
	} else {
		cartStore.set([...cartStore.value, {
            id: item.id,
			name: item.name,
			imageUrl: "",
			quantity: 1,
        }])
	}
}

export function changeQty(id, op) {
    const existingEntry = cartStore.value.find(e => e.id === id)

    let newQty

    switch (op) {
        case 'incr':
            newQty = existingEntry.quantity + 1
            break

        case 'decr':
            newQty = existingEntry.quantity - 1
            break

        default:
            break
    }

    if (newQty <= 0) {
        removeCartItem(id)
    } else {
        cartStore.set([...cartStore.value.map(e => {
            if (e.id === id) {
                return {
                    ...e,
                    quantity: newQty,
                }
            } else {
                return e
            }
        })])
    }
}

export function removeCartItem(id) {
    cartStore.set(cartStore.value.filter(e => e.id !== id))
}