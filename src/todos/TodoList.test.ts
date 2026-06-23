import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import TodoList from './TodoList.vue'
import { todos, addTodo } from './store'

beforeEach(() => {
  todos.value = []
})

describe('TodoList — 3 todos toevoegen', () => {
  it('toont 3 li-elementen en juiste teller na invullen formulier', async () => {
    const wrapper = mount(TodoList)

    for (const text of ['Taak 1', 'Taak 2', 'Taak 3']) {
      await wrapper.find('input').setValue(text)
      await wrapper.find('form').trigger('submit')
    }

    expect(wrapper.findAll('li')).toHaveLength(3)
    expect(wrapper.find('p').text()).toBe('3 taken over')
  })
})

describe('TodoList — 3 todos verwijderen', () => {
  it('verwijdert todos één voor één en verbergt teller bij lege lijst', async () => {
    vi.spyOn(Date, 'now').mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(3)
    addTodo('A')
    addTodo('B')
    addTodo('C')
    const wrapper = mount(TodoList)
    await nextTick()

    expect(wrapper.findAll('li')).toHaveLength(3)

    await wrapper.findAll('li')[0].find('button').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(2)

    await wrapper.findAll('li')[0].find('button').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(1)

    await wrapper.findAll('li')[0].find('button').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(0)

    expect(wrapper.find('p').exists()).toBe(false)
  })
})
