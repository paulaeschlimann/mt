import { atom } from 'nanostores';



export const todoStore = atom([
	{ id: '6848d44a-29d2-4edb-9226-d00bdd9b9bcc', name: 'Todo 1', category: 'Cat 1', completed: false },
	{ id: '534b3dd1-f144-4982-a2df-218c095282e4', name: 'Todo 2', category: 'Cat 2', completed: true },
	{ id: '11991c60-b76d-4876-af7d-6bd9199e1f9b', name: 'Todo 3', category: 'Cat 3', completed: true }
]);

export const filteredCategory = atom('')

export const editingTodo = atom(null)