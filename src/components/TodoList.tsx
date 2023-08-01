import { store, useAppSelector } from "../store"


export function TodoList() {
  const todos = useAppSelector(store => {
    return store.todo
  })
  console.log(store)
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo}>{todo}</li>
        )
      })}
    </ul>
  )
}