import { Alarm } from '../alarm/Alarm.jsx'
import { ToDo } from '../todo/ToDo.jsx'
import { TaskTracker } from '../task_tracker/TaskTracker.jsx'
import './styles/App.css'

export const App = () => {
  return (
    <div className="app">
      <div className="left">
        <Alarm />
        <ToDo />
      </div>
      <div className="right">
        <TaskTracker />
      </div>
    </div>

  )
}
