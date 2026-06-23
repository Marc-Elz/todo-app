import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { todos, addTodo, removeTodo } from './store'

beforeEach(() => {
  todos.value = []
  localStorage.clear()
})

describe('addTodo', () => {
  it('voegt een todo toe met correcte velden', () => {
    addTodo('test')
    expect(todos.value).toHaveLength(1)
    expect(todos.value[0].text).toBe('test')
    expect(todos.value[0].completed).toBe(false)
    expect(typeof todos.value[0].id).toBe('number')
  })

  it('voegt niets toe bij lege string', () => {
    addTodo('')
    expect(todos.value).toHaveLength(0)
  })
})

describe('removeTodo', () => {
  it('verwijdert de todo met het opgegeven id', () => {
    vi.spyOn(Date, 'now').mockReturnValueOnce(1).mockReturnValueOnce(2)
    addTodo('a')
    addTodo('b')
    removeTodo(1)
    expect(todos.value).toHaveLength(1)
    expect(todos.value[0].text).toBe('b')
  })
})

describe('localStorage sync', () => {
  it('slaat todos op in localStorage na addTodo', async () => {
    addTodo('gesynchroniseerd')
    await nextTick()
    const stored = JSON.parse(localStorage.getItem('todos') ?? '[]')
    expect(stored).toHaveLength(1)
    expect(stored[0].text).toBe('gesynchroniseerd')
  })
})
