<template>
    <ul class="no-list-style">
        <li v-bind:key="item.id" v-for="item in filteredTodoEntries">
            <TodoItem v-bind:todoItem="item" @toggle-completion="toggleCompletion" @delete-todo="deleteTodo" @edit-todo="editTodo" />
        </li>
    </ul>
</template>

<script setup>
    import TodoItem from './TodoItem.vue';

    import { computed, watch } from 'vue'

    import { todoStore, filteredCategory, editingTodo } from '../todoStore';
    import { useStore } from '@nanostores/vue'

    let todoEntries = useStore(todoStore)
    const $filteredCategory = useStore(filteredCategory)

    function editTodo(todo) {
        editingTodo.set(todo)
    }

    function deleteTodo(todoId) {
        console.log('löschen')
        
        todoStore.set(todoEntries.value.filter(todo => todo.id !== todoId))
    }

    function toggleCompletion(todoId, completed) {
        todoStore.set(todoEntries.value.map(todo => {
            if (todo.id !== todoId) {
                return todo
            } else {
                return {...todo, completed}
            }
        }))
    }

    const filteredTodoEntries = computed(() => {
        if ($filteredCategory.value) {
            return todoEntries.value.filter(todo => todo.category === $filteredCategory.value)
        } else {
            return todoEntries.value
        }
    })

    watch(
        () => todoEntries.value,
        () => {
            if ($filteredCategory.value !== '' && !todoEntries.value.some(todo => todo.category === $filteredCategory.value)) {
                filteredCategory.set('')
            }
        }
    )
</script>