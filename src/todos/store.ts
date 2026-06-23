import { ref, computed, watch } from 'vue'
import type { Todo } from './types'

const stored = localStorage.getItem('todos')
const todos = ref<Todo[]>(stored ? JSON.parse(stored) : [])

watch(todos, val => localStorage.setItem('todos', JSON.stringify(val)), { deep: true })

function addTodo(text: string) {
  if (!text.trim()) return
  todos.value.push({ id: Date.now(), text, completed: false })
}

function removeTodo(id: number) {
  todos.value = todos.value.filter(t => t.id !== id)
}

const remaining = computed(() => todos.value.filter(t => !t.completed).length)

export { todos, addTodo, removeTodo, remaining }
