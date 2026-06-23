# Todo App — Project Context

## Goal
Vue 3 todo component met add/delete functionaliteit en LocalStorage persistence.

## Tech Stack
- Vue 3 + Vite
- TypeScript (strict mode)
- Geen externe UI-libraries

## Architectuur
- Domeinstructuur: `src/todos/` met `TodoList.vue`, `TodoItem.vue`, `store.ts`, `types.ts`
- `store.ts` beheert de todo-staat en LocalStorage-sync (geen Pinia)
- Single File Components (SFC) met `<script setup>` syntax en `<style scoped>`
- Composition API (`ref`, `computed`, `watch`); LocalStorage-sync via `watch` in de store

## Key Rules
- Altijd `defineProps` en `defineEmits` met TypeScript-types
- `ref<T>()` voor primitives, `reactive()` vermijden tenzij object-state complex is
- Interfaces voor data-modellen (`Todo`, etc.) in aparte `types.ts`
- Geen `any` — strict TypeScript door de hele codebase
- Gebruik `computed()` voor afgeleide state (bv. gefilterde of getelde todos)
- Componenten klein houden: logica in composables als het > ~60 regels wordt

## Testing
- Vitest + jsdom; `Date.now()` als todo-id vereist `vi.spyOn(Date, 'now')` bij synchrone aanroepen in tests
