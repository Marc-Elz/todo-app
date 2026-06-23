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
    <h1>Taken</h1>
    <form @submit.prevent="handleSubmit">
      <input v-model="input" placeholder="Nieuwe taak..." />
      <button type="submit">Toevoegen</button>
    </form>
    <p v-if="todos.length > 0">{{ remaining }} taken over</p>
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

<style scoped>
h1 {
  color: var(--color-text-strong);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 var(--space-lg);
}

form {
  display: flex;
  gap: var(--space-sm);
}

input {
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: inherit;
  font-family: inherit;
  color: var(--color-text-strong);
  background: var(--color-bg);
}

input:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 0;
  border-color: transparent;
}

button[type='submit'] {
  padding: var(--space-sm) var(--space-md);
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
}

button[type='submit']:hover {
  opacity: 0.85;
}

ul {
  list-style: none;
  padding: 0;
  margin: var(--space-md) 0 0;
  border-top: 1px solid var(--color-border);
}

p {
  margin: var(--space-md) 0 0;
  font-size: 0.875rem;
  color: var(--color-text);
}
</style>
