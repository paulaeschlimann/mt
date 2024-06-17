import { atom } from 'nanostores';

export const cartStore = atom([]);

export const cartItems = ({});

export const addToStore = (item) => {
    cartStore.set([...cartStore.get(), item])

    saveToLocalStorage(cartStore.get())
}

const saveToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
}