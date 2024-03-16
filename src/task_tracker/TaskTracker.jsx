import { useState } from 'react'
import { Counter } from './components/Counter.jsx'
import { Tasks } from './components/Tasks.jsx'
import { New } from './components/New.jsx'

export const TaskTracker = () => {
  const [array, setArray] = useState([])

  const getData = (data) => setArray([...data])

  return (
    <div className="task-tracker">
      <Counter />
      <Tasks Array={array} />
      <New Data={getData} />
    </div>
  )
}
