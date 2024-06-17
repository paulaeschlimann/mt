<template>
    <div class="autocomplete-list" style="position: relative; display: inline-block;">
        <input type="text" name="search" 
            placeholder="Search" autocomplete="off"
            v-model="searchText" @focus="focusSearch" @blur="blurSearch">
        
        <div class="autocomplete-items" :style="{ display: isAutoCompleteItemVisible }">
            <div v-bind:key="item.id" v-for="item in filteredTodos">

                <p>
                    {{ item.name }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref, watch } from 'vue'

    import { todoStore } from '../todoStore';
    import { useStore } from '@nanostores/vue'

    console.log('Render Search')

    const todoEntries = useStore(todoStore)
    let filteredTodos = []

    const searchText = ref('')
    let searchKeywords = computed(() => {
        const searchTextTrimmed = searchText.value.trim()

        if (searchTextTrimmed.length > 0) {
            return searchTextTrimmed.split(' ').filter(e => e !== '')
        }

        return []
    })
    let searchInputHasFocus = ref(false)

    watch(
        () => searchText.value,
        () => filterTodoEntries()
    )

    const isAutoCompleteItemVisible = computed(() => {
        return searchInputHasFocus.value ? 'block' : 'none'
    })

    function filterTodoEntries() {
        filteredTodos = filterByKeywords(todoEntries.value, searchKeywords.value)
    }

    function filterByKeywords(data, keywords) {
        const filteredTodoList = data.filter(val => {
            for(var i = 0; i < keywords.length; i++) {
                if(!val.name.toLowerCase().includes(keywords[i].toLowerCase())) {
                    return false
                }
            }

            return true
        })

        return filteredTodoList
    }

    function focusSearch() {
        searchInputHasFocus.value = true
        filterTodoEntries()
    }

    function blurSearch() {
        searchInputHasFocus.value = false
    }

</script>

<style scoped>
input {
  box-sizing: border-box;
  padding: 1em;
  font-size: 1em;
  border: 1px solid darkgrey;
  box-shadow: none;
  width: 100%;
  outline: none;
}

input:focus {
    border-color: cornflowerblue;
}

.autocomplete-list {
  width: 300px;
}

.autocomplete-items {
    border-color: cornflowerblue;
}

.autocomplete-items > div {
    border-bottom: 1px solid #d4d4d4;
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    color: black;
}

.autocomplete-items > div:last-child {
    border-bottom: 1px solid cornflowerblue;
    border-bottom-color: cornflowerblue;
}
</style>