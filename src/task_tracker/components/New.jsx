import { useState, useEffect } from "react"

export const New = ({Data}) => {
  const [input, setInput] = useState("")
  const [completedTask, setCompletedTask] = useState([])
  const [pastDate, setPastDate] = useState("null")

  const handleInput = (e) => setInput(e.target.value)

  const handleCompletedTaskAddBtn = () => {
    if (input !== "") setCompletedTask([...completedTask, { "time_range": pastDate, "text": input }])
    setInput("")
    Data(completedTask)
  }

  const handleEnterKey = (e) => {
    if (e.key === "Enter") handleCompletedTaskAddBtn()
  }

  const getPastTimeRange = () => {
    let pastDateString = "none"
    const currentDate = new Date()
    const hours = currentDate.getHours()
    const minutes = currentDate.getSeconds()
    if (minutes >= 0 && minutes < 15) pastDateString = `${hours - 1}:45 - ${hours}:00`
    if (minutes >= 15 && minutes < 30) pastDateString = `${hours}:00 - ${hours}:15`
    if (minutes >= 30 && minutes < 45) pastDateString = `${hours}:15 - ${hours}:30`
    if (minutes >= 45 && minutes <= 59) pastDateString = `${hours}:30 - ${hours}:45`
    setPastDate(pastDateString)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getPastTimeRange()
    }, 1000);

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    // console.log(completedTask);
  }, [completedTask])

  return (
    <div className="new">
      <div className="current-block">
        {pastDate}
      </div>
      <input
        type="text"
        placeholder="enter completed task"
        value={input}
        onChange={(e) => handleInput(e)}
        onKeyDown={handleEnterKey}
      />
      <button
        type="button"
        className="add-completed-task-btn"
        onClick={handleCompletedTaskAddBtn}
      >
        Add
      </button>
    </div>
  )
}
