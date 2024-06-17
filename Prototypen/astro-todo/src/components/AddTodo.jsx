import { memo, useState } from "react";
import { useStore } from "@nanostores/react";
import { todoStore } from '../todoStore'

export function AddTodo() {
    console.log('Render AddTodo')

    function handleSubmit(e) {
        e.preventDefault()

        addTodo(newTodoName, category)
        
        setNewTodoName('')
        setCategory('')
    }

    const [newTodoName, setNewTodoName] = useState('')
    const [category, setCategory] = useState('')
    
    const isInputValid = () => {
        return newTodoName.trim().length > 0 && category.trim().length > 0
    };

    function addTodo(name, category) {
        todoStore.set([...todos, { id: crypto.randomUUID(), name, category, completed: false }])
    }

    const todos = useStore(todoStore)

    /*const [todos, setTodos] = useState(() => {
        //const value = localStorage.getItem(LOCAL_STORAGE_KEY)
        const value = useStore(todoStore)
        //const value = useStore(todoNameStore)
    
        //if (value === null) {
        //    return []
        //}

        //console.log(value)
    
        //return JSON.parse(value)
      })*/

      /*useEffect(() => {
        //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        //todoStore.set(JSON.stringify(todos))
        todoStore.set(todos)
        //const $todoStore = useStore(todoStore)
        //console.log($todoStore)
        //filterTodos()
      }, [todos])*/

    return (        
        <>            
            <form onSubmit={handleSubmit} className="form">
                <input
                    aria-label="name"
                    value={newTodoName}
                    onChange={e => setNewTodoName(e.target.value)}
                    type="text"
                />
                <input
                    aria-label="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    type="text"
                />
                <button disabled={!isInputValid()}>Add</button>
            </form>
        </>
    )
}
export default memo(AddTodo)