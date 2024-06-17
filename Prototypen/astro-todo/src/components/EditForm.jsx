import { memo, useState } from "react";

export function EditForm({ todo, updateTodo, cancelEditingTodo }) {
    console.log('Render EditForm')

    function handleSubmit(e) {
        e.preventDefault()

        updateTodo(inputData)
    }

    function handleInputChange(e) {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    const [inputData, setInputData] = useState(todo)

    const isInputValid = () => {
        return inputData.name.trim().length > 0 && inputData.category.trim().length > 0
    }

    return ( 
        <>
            <form onSubmit={handleSubmit} className="form">
                <input
                    name="name"
                    aria-label="name"
                    value={inputData.name}
                    onChange={e => handleInputChange(e)}
                    type="text"
                />
                <input
                    name="category"
                    aria-label="category"
                    value={inputData.category}
                    onChange={e => handleInputChange(e)}
                    type="text"
                />
                <button disabled={!isInputValid()}>Save</button>
                <button type="button" onClick={cancelEditingTodo}>Cancel</button>
            </form>
        </>
    )
}
export default memo(EditForm)