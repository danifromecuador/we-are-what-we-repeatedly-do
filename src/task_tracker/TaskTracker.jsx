import { useState } from 'react'
import { Counter } from './components/Counter.jsx'
import { Tasks } from './components/Tasks.jsx'
import { New } from './components/New.jsx'

export const TaskTracker = () => {
  const [array, setArray] = useState([])
  const [waitMessage, setWaitMessage] = useState("")

  const getData = (task) => {
    console.log(`task: ${task.time_range} ${task.text}`);
    if (array.length > 0) {
      if (array[array.length - 1].time_range !== task.time_range) setArray([...array, task])
      else { // show a wait message for 3 seconds
        setWaitMessage("please wait until new time range")
        setTimeout(() => {
          setWaitMessage("")
        }, 3000)
      }
    }
    else setArray([...array, task]) // this will execute just if the array is empty
  }

  return (
    <div className="task-tracker">
      <Counter />
      <Tasks Array={array} />
      {waitMessage}
      <New Data={getData} />
    </div>
  )
}
