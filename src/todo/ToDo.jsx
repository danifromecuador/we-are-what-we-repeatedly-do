import { useState, useEffect } from 'react'
import { Items } from './components/Items'
import { New } from './components/New'
import '../todo/styles/ToDo.css'

export const ToDo = () => {
  const [array, setArray] = useState(JSON.parse(localStorage.getItem("array")) || [])

  const Data = (data) => {
    if (data !== "") setArray([...array, { "index": array.length, "completed": false, "text": data }])
  }

  const CompleteThis = (i) => {
    array[i].completed === true ? array[i].completed = false : array[i].completed = true
    setArray([...array])
  }

  const DeleteThis = (item) => {
    array.splice(item, 1)
    for (let i = 0; i < array.length; i++) {
      array[i].index = i
    }
    setArray([...array])
  }

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(array));
  }, [array])

  return (
    <div className="to-do">
      <h1>Today&apos;s Goals</h1>
      <Items Array={array} Completed={CompleteThis} Delete={DeleteThis} />
      <New Data={Data} />
    </div>
  )
}
