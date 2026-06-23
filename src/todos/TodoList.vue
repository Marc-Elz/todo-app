<script setup lang="ts">
import { ref } from 'vue'
import { todos, addTodo, removeTodo, remaining } from './store'
import TodoItem from './TodoItem.vue'

const input = ref('')

function handleSubmit() {
  addTodo(input.value)
  input.value = ''
}
</script>

<template>
  <div>
    <p v-if="todos.length > 0">{{ remaining }} taken over</p>
    <form @submit.prevent="handleSubmit">
      <input v-model="input" placeholder="Nieuwe taak..." />
      <button type="submit">Toevoegen</button>
    </form>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
  </div>
</template>
