import { useState, useEffect } from 'react'
import { Items } from './components/Items'
import { New } from './components/New'
import '../todo/styles/ToDo.css'

export const ToDo = () => {
  const [array, setArray] = useState(JSON.parse(localStorage.getItem("goals-list")) || [])

  // create a new goal with the New.jsx component
  const Data = (data) => {
    if (data !== "") setArray([...array, { "index": array.length, "completed": false, "text": data }])
  }

  const sortArray = () => {
    for (let i = 0; i < array.length; i++) {
      array[i].index = i
    }
  }

  const CompleteThis = (i) => {
    if (array[i].completed === true) {
      array[i].completed = false
      array.unshift(array[i])
      array.splice(i + 1, 1)
      sortArray()
    }
    else {
      array[i].completed = true
      array.push(array[i])
      array.splice(i, 1)
      sortArray()
    }
    setArray([...array])
  }

  const DeleteThis = (i) => {
    array.splice(i, 1)
    sortArray()
    setArray([...array])
  }

  // saves on local storage when the array changes
  useEffect(() => {
    localStorage.setItem("goals-list", JSON.stringify(array));
  }, [array])

  return (
    <div className="to-do">
      <h1>Today&apos;s Goals</h1>
      <Items Array={array} Completed={CompleteThis} Delete={DeleteThis} />
      <New Data={Data} />
    </div>
  )
}
