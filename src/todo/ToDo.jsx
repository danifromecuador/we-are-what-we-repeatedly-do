import { useState } from 'react'
import { Items } from './components/Items'
import { New } from './components/New'
import '../todo/styles/ToDo.css'

export const ToDo = () => {
  const [array, setArray] = useState([
    {
      "completed": true,
      "text": "goal 1"
    },
    {
      "completed": true,
      "text": "goal 2"
    }
  ])

  const Data = (data) => {
    console.log(`from App: ${data}`);
  }


  return (
    <div className="to-do">
      <Items Array={array}/>
      <New Data={Data}/>
    </div>
  )
}