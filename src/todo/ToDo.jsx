import { ToDoItems } from './components/ToDoItems'
import { NewItem } from './components/NewItem'
import '../todo/styles/ToDo.css'

export const DailyToDoList = () => {
  return (
    <div className="daily-todo-list">
      <ToDoItems />
      <NewItem />
    </div>
  )
}