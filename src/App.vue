<script setup lang="ts">
import TodoList from './todos/TodoList.vue'
</script>

<template>
  <main class="layout">
    <TodoList />
  </main>
</template>

<style scoped>
.layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-xl) var(--space-md);
  box-sizing: border-box;
}

.layout > :deep(*) {
  width: 100%;
  max-width: 480px;
}
</style>
