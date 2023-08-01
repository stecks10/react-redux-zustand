import { useSelector } from "react-redux"
import { store } from "../store"


export function TodoList() {
  const todos = useSelector(store => {
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