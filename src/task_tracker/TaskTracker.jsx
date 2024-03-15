import { Counter } from './components/Counter.jsx'
import { Tasks } from './components/Tasks.jsx'
import { New } from './components/New.jsx'

export const TaskTracker = () => {
  return (
    <div className="task-tracker">
      <Counter />
      <Tasks />
      <New />
    </div>
  )
}
