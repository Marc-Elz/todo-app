# Tasks — Todo App

## 1. Types
✅ **Definieer `Todo` interface in `src/todos/types.ts`**
- Velden: `id: number`, `text: string`, `completed: boolean`
- Exporteer de interface; geen `any` toegestaan

## 2. Store
✅ **Maak `src/todos/store.ts` met initiële state**
- `const todos = ref<Todo[]>([])`
- Laad initiële waarde uit `localStorage.getItem('todos')` (JSON.parse met fallback `[]`)

✅ **Voeg `watch` toe voor LocalStorage-sync in `store.ts`**
- `watch(todos, val => localStorage.setItem('todos', JSON.stringify(val)), { deep: true })`

✅ **Implementeer `addTodo(text: string)` in `store.ts`**
- Guard: doe niets als `text.trim()` leeg is
- Push nieuw `Todo`-object met `Date.now()` als id

✅ **Implementeer `removeTodo(id: number)` in `store.ts`**
- Filter `todos.value` op id en overschrijf de ref

✅ **Voeg `computed` toe voor `remaining` (aantal niet-completed)**
- `computed(() => todos.value.filter(t => !t.completed).length)`
- Exporteer naast `todos`, `addTodo`, `removeTodo`

## 3. TodoItem component
✅ **Maak `src/todos/TodoItem.vue` met `defineProps<{ todo: Todo }>()`**
- Toon `todo.text` in een `<li>`
- Voeg delete-knop toe met `defineEmits<{ remove: [id: number] }>()`

✅ **Style `TodoItem.vue` met `<style scoped>`**
- Flexbox: tekst links, knop rechts
- Hover-state op de delete-knop

## 4. TodoList component
✅ **Maak `src/todos/TodoList.vue` — importeer store en render lijst**
- `v-for="todo in todos"` op `<TodoItem>`, `:key="todo.id"`
- Koppel `@remove` event aan `removeTodo`

✅ **Voeg add-formulier toe aan `TodoList.vue`**
- Lokale `ref<string>('')` voor input
- `@submit.prevent` roept `addTodo` aan en reset de input

✅ **Toon teller via `remaining` computed**
- Bijv. `"{{ remaining }} taken over"` boven de lijst
- Verberg de teller als `todos.length === 0`

## 5. Integratie
✅ **Vervang `HelloWorld.vue` in `App.vue` door `TodoList.vue`**
- Verwijder HelloWorld-import en gebruik; voeg TodoList toe
- Controleer dat de app compileert zonder TypeScript-fouten (`tsc --noEmit`)

## 6. Tests
✅ **Installeer Vitest en `@vue/test-utils`**
- `npm install -D vitest @vue/test-utils @vitejs/plugin-vue jsdom`
- Voeg `test: { environment: 'jsdom' }` toe aan `vite.config.ts`

✅ **Test `store.ts` — addTodo en removeTodo**
- Controleer dat `addTodo('x')` een todo toevoegt met correcte velden
- Controleer dat `addTodo('')` niets toevoegt (lege-string guard)
- Controleer dat `removeTodo(id)` de juiste todo verwijdert

✅ **Test `store.ts` — LocalStorage-sync**
- Mock `localStorage` met `vi.stubGlobal` of `jsdom` ingebouwde implementatie
- Controleer dat na `addTodo` de waarde in `localStorage` overeenkomt (JSON.parse)

✅ **Test `TodoItem.vue` — rendering en remove-event**
- Mount met `@vue/test-utils`, geef een `todo`-prop mee
- Controleer dat `todo.text` zichtbaar is in de DOM
- Klik de delete-knop en controleer dat het `remove`-event met het juiste id afgaat

✅ **Test `TodoList.vue` — 3 todos toevoegen en weergeven**
- Vul het input-formulier drie keer in via `setValue` + `trigger('submit')`
- Controleer dat er 3 `<li>`-elementen in de DOM staan
- Controleer dat de teller `"3 taken over"` toont (of `0` na voltooiing)

✅ **Test `TodoList.vue` — 3 todos verwijderen en lijst controle**
- Voeg 3 todos toe via `addTodo`
- Klik de delete-knop van elk item via `trigger('click')` één voor één
- Controleer na elke verwijdering dat het aantal `<li>`-elementen met 1 afneemt
- Controleer dat de lijst leeg is (0 `<li>`-elementen) na alle 3 verwijderingen
- Controleer dat de teller verborgen is als de lijst leeg is

## 7. Styling

✅ **Verwijder Vite template styles uit `style.css`**
Vervang de opinionated Vite-startersstijlen door een minimale CSS reset.

✅ **Definieer CSS design tokens**
Stel CSS custom properties in voor kleuren, spacing en typografie als fundament voor de rest van de styling.

✅ **Style de app-layout in `App.vue`**
Centreer de app op de pagina met een passende max-width, achtergrond en globale typografie.

✅ **Verbeter de `TodoList.vue` styling**
Geef het invoerformulier, de koptekst en de teller een verzorgde uitstraling met scoped CSS.

✅ **Verbeter de `TodoItem.vue` styling**
Verbeter witruimte, typografie en hover-states van elk todo-item met scoped CSS.
