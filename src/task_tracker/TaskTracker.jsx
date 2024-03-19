import { useState, useEffect } from 'react'
import { Counter } from './components/Counter.jsx'
import { Tasks } from './components/Tasks.jsx'
import { New } from './components/New.jsx'
import './styles/TaskTracker.css'

export const TaskTracker = () => {
  const [array, setArray] = useState(JSON.parse(localStorage.getItem("completed-tasks-list")) || [])
  const [waitMessage, setWaitMessage] = useState("")

  const getData = (task) => { // add to the array a new completed task
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

  const deleteArray = () => setArray([])

  // saves on local storage when the array changes
  useEffect(() => {
    localStorage.setItem("completed-tasks-list", JSON.stringify(array))
  }, [array])

  return (
    <div className="task-tracker">
      <Counter Array={array} />
      <Tasks Array={array} />
      <button
        className='delete-completed-tasks-btn'
        onClick={deleteArray}
      >
        Reset Today's Progress
      </button>
      <div className="wait-message">{waitMessage}</div>
      <New Data={getData} />
    </div>
  )
}
