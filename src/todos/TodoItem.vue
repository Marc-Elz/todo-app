<script setup lang="ts">
import type { Todo } from './types'

defineProps<{ todo: Todo }>()
const emit = defineEmits<{ remove: [id: number] }>()
</script>

<template>
  <li>
    <span>{{ todo.text }}</span>
    <button @click="emit('remove', todo.id)">Verwijder</button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #e53e3e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 2px 8px;
  cursor: pointer;
  font-size: 0.8rem;
}

button:hover {
  background-color: #c53030;
}
</style>
