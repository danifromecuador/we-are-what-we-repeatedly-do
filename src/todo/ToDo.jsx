import { Items } from './components/Items'
import { New } from './components/New'
import '../todo/styles/ToDo.css'

export const ToDo = () => {
  return (
    <div className="to-do">
      <Items />
      <New />
    </div>
  )
}