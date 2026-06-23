import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from './TodoItem.vue'

describe('TodoItem', () => {
  const todo = { id: 1, text: 'Boodschappen doen', completed: false }

  it('toont todo.text in de DOM', () => {
    const wrapper = mount(TodoItem, { props: { todo } })
    expect(wrapper.find('span').text()).toBe('Boodschappen doen')
  })

  it('emit remove-event met het juiste id bij klik op delete-knop', async () => {
    const wrapper = mount(TodoItem, { props: { todo } })
    await wrapper.find('button').trigger('click')
    const emitted = wrapper.emitted('remove')
    expect(emitted).toHaveLength(1)
    expect(emitted![0]).toEqual([1])
  })
})
