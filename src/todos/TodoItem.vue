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
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-border);
}

span {
  color: var(--color-text-strong);
}

button {
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-xs) var(--space-sm);
  color: var(--color-text);
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}

button:hover {
  border-color: #e53e3e;
  color: #e53e3e;
}
</style>
