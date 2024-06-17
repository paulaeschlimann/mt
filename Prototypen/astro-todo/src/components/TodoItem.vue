<template>
    <div v-bind:class="{ 'completed' : todoItem.completed}">
        <p @click="$emit('toggle-completion', todoItem.id, !todoItem.completed)">
            {{ todoItem.name }}
        </p>
        <button @click="$emit('edit-todo', todoItem)">Bearbeiten</button>
        <button @click="$emit('delete-todo', todoItem.id)">Löschen</button>
    </div>
</template>

<script setup>
    const props = defineProps({
        todoItem: Object,
        toggleCompletion: Function
    })
</script>

<style>
    .completed {
        text-decoration: line-through;
    }
</style>