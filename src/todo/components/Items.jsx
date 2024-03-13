import { Item } from "./Item"
import '../styles/Items.css'

export const Items = () => {
  return (
    <div className="to-do-items">
      <Item />
      <Item />
      <Item />
    </div>
  )
}