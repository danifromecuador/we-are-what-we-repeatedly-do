import { Item } from "./Item"
import '../styles/Items.css'

export const Items = () => {
  return (
    <ul className="to-do-items">
      <Item Text={"hello mdf"} />
      <Item Text={"hello soab"} />
    </ul>
  )
}