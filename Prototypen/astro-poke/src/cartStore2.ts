import { atom, map } from 'nanostores';

export type CartItem = {
	id: number;
	name: string;
	imageUrl: string;
	quantity: number
};

type Item = {
	id: number;
	name: string;
}

type CartItems = Record<number, CartItem>

export const cartItems = map<Record<number, CartItem>>([]);

export function addCartItem(item: Item) {
	const existingEntry = cartItems.get()[item.id];
	console.log(existingEntry)
	if (existingEntry) {
		cartItems.setKey(item.id, {
			...existingEntry,
			quantity: existingEntry.quantity + 1,
		});
	} else {
		cartItems.setKey(item.id, {
			id: item.id,
			name: item.name,
			imageUrl: "",
			quantity: 1,
		});
	}

	console.log(cartItems.get())

	saveToLocalStorage(cartItems.get())
}

const saveToLocalStorage = (cartItems: CartItems) => {
    localStorage.setItem('cart2', JSON.stringify(cartItems))
}