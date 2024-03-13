import { useState } from 'react'
import '../styles/New.css'

export const New = ({Data}) => {
  const [input, setInput] = useState("")

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleAddBtn = () => {
    Data(input)
  }
  return (
    <div className="new">
      <input
        className='input-text'
        type="text"
        placeholder='enter new goal'
        value={input}
        onChange={(e)=>handleInput(e)}
      />
      <input
        className='add-btn'
        type="button"
        value="Add"
        onClick={handleAddBtn}
      />
    </div>
  )
}