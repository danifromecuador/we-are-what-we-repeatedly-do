import { ToDoItems } from '../components/ToDoItems'
import { NewItem } from '../components/NewItem'
import '../styles/DailyToDoList.css'

export const DailyToDoList = () => {
  return (
    <div className="daily-todo-list">
      <ToDoItems />
      <NewItem />
    </div>
  )
}