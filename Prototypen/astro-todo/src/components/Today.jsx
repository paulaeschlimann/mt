import { useStore } from "@nanostores/react";
import { todoStore } from '../todoStore'

export function Today() {
    console.log('Render today')

    const todos = useStore(todoStore)

    return (
        <>
            <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        </>
    )
}