import { memo, useState } from "react";
import { useStore } from "@nanostores/react";
import { todoStore, editingTodo } from '../todoStore'
import { EditForm } from "./EditForm";

export function EditTodo() {
    console.log('Render EditTodo')

    const $todoStore = useStore(todoStore)
    const $editingTodo = useStore(editingTodo)

    function updateTodo(updatedTodo) {
        todoStore.set($todoStore.map(todo => {
            if (todo.id === updatedTodo.id) {
                return updatedTodo
            } else {
                return todo
            }
        }))

        editingTodo.set(null)
    }

    function cancelEditingTodo() {
        editingTodo.set(null)
    }

    return ( 
        <>
            {$editingTodo &&
                <EditForm key={$editingTodo.id} todo={$editingTodo} updateTodo={updateTodo} cancelEditingTodo={cancelEditingTodo} />
            }
        </>
    )
}
export default memo(EditTodo)