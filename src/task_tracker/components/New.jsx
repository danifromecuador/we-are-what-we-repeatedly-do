import { useState } from "react"
import PropTypes from 'prop-types'

export const New = () => {
  const [input, setInput] = useState("")
  const [completedTask, setCompletedTask] = useState([])

  const handleInput = (e) => setInput(e.target.value)

  const handleCompletedTaskAddBtn = () => {
    setCompletedTask([...completedTask], input)
    console.log(completedTask);
    setInput("")
  }

  const handleEnterKey = (e) => {
    if (e.key === "Enter") handleCompletedTaskAddBtn()
  }








  return (
    <div className="new">
      <div className="current-block">
        18:00 - 18:30
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

New.propTypes = {
  CompletedTask: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
}
